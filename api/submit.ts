import { PAYMENT_INFO } from "../src/lib/campData.ts";
import { generateQRString } from "../src/lib/utils.ts";
import { generateConfirmationEmailHtml } from "../src/lib/emailTemplate.ts";

// 1. Sanitization Utility to prevent Google Sheets Formula Injection
const sanitizeForGoogleSheets = (data: Record<string, any>): Record<string, any> => {
  const maliciousPrefixes = ['=', '+', '-', '@'];
  const sanitized: Record<string, any> = {};
  
  for (const [key, value] of Object.entries(data)) {
      if (typeof value === 'string' && maliciousPrefixes.some(prefix => value.startsWith(prefix))) {
          sanitized[key] = "'" + value;
      } else {
          sanitized[key] = value;
      }
  }
  return sanitized;
};

const sendConfirmationEmail = async (data: Record<string, any>) => {
  const messageForRecipient = `Kemp ${data.term} - ${data.childFirstName} ${data.childLastName}`;

  // Generate the strict Czech QR string (strip diacritics)
  const safeMessage = messageForRecipient.normalize("NFD").replace(/[\u0300-\u036f]/g, "").substring(0, 60);
  const finalAmount = data.brnoSubsidy ? PAYMENT_INFO.amount - 4000 : PAYMENT_INFO.amount;
  const qrString = generateQRString(safeMessage, finalAmount, data.variableSymbol);
  
  // Create a live URL for the QR code image
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(qrString)}`;

  // Construct the HTML Email
  const htmlBody = generateConfirmationEmailHtml({
      parentFirstName: data.parentFirstName,
      parentLastName: data.parentLastName,
      childFirstName: data.childFirstName,
      childLastName: data.childLastName,
      term: data.term,
      finalAmount: finalAmount,
      currency: PAYMENT_INFO.currency,
      accountNumber: PAYMENT_INFO.accountNumber,
      variableSymbol: data.variableSymbol,
      messageForRecipient: messageForRecipient,
      dueDate: PAYMENT_INFO.dueDate,
      qrImageUrl: qrImageUrl,
      logoUrl: 'https://sportstarters.cz/loga/logo-nobg.png'
    });

  // Call the Resend API
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'Sportstarters <prihlaska@sportstarters.cz>',
      to: data.email,
      subject: `Potvrzení registrace na kemp - ${data.childFirstName} ${data.childLastName}`,
      html: htmlBody
    })
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Resend API Error:", errorData);
    throw new Error('Failed to send email');
  }
};

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const rawData = req.body;

    // 1. Sanitize the payload
    const sanitizedData = sanitizeForGoogleSheets(rawData);

    // 2. Send sanitized data to SheetDB
    const sheetDbResponse = await fetch(process.env.SHEETDB_API_URL!, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [sanitizedData]
      }),
    });

    if (!sheetDbResponse.ok) {
      throw new Error('Failed to save to Google Sheets');
    }

    // 3. Send the Confirmation Email via Resend
    // We run this in a try-catch so that if the email fails, 
    // it doesn't crash the success response to the frontend (since the data was saved)
    try {
      await sendConfirmationEmail(sanitizedData);
    } catch (emailError) {
      console.error("Failed to send confirmation email, but data was saved.", emailError);
      // Optional: You could ping your own error logging service here
    }

    // 4. Return success to your React frontend
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Submission Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}