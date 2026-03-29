// api/submit.js

// 1. Sanitization Utility to prevent Google Sheets Formula Injection
const sanitizeForGoogleSheets = (data) => {
  const maliciousPrefixes = ['=', '+', '-', '@'];
  const sanitized = {};
  
  for (const [key, value] of Object.entries(data)) {
      if (typeof value === 'string' && maliciousPrefixes.some(prefix => value.startsWith(prefix))) {
          sanitized[key] = "'" + value;
      } else {
          sanitized[key] = value;
      }
  }
  return sanitized;
};

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const rawData = req.body;

    // 2. Sanitize the payload
    const sanitizedData = sanitizeForGoogleSheets(rawData);

    // 3. Send sanitized data to SheetDB
    // SheetDB expects data wrapped in an array under the "data" key
    const sheetDbResponse = await fetch(process.env.SHEETDB_API_URL, {
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

    // 4. Return success to your React frontend
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Submission Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}