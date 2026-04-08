// src/lib/emailTemplates.ts

export interface ConfirmationEmailData {
  parentFirstName: string;
  parentLastName: string;
  childFirstName: string;
  childLastName: string;
  term: string;
  finalAmount: number;
  currency: string;
  accountNumber: string;
  variableSymbol: string;
  messageForRecipient: string;
  dueDate: string;
  qrImageUrl: string;
  logoUrl: string;
}

export const generateConfirmationEmailHtml = (data: ConfirmationEmailData): string => {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a202c; line-height: 1.6;">
      
      <div style="text-align: center; margin-bottom: 24px;">
        <img src="${data.logoUrl}" alt="Sportstarters Logo" width="400" style="display: block; margin: 0 auto; border: none; outline: none; text-decoration: none;" />
      </div>

      <h2 style="color: #1277d4; text-align: center;">Registrace byla úspěšná!</h2>
      <p>Vážený/á ${data.parentFirstName} ${data.parentLastName},</p>
      <p>děkujeme za přihlášení na <strong>Kemp: ${data.term}</strong> pro ${data.childFirstName} ${data.childLastName}.</p>
      
      <div style="background-color: #f7fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 24px 0;">
        <h3 style="margin-top: 0; color: #1a202c;">Údaje pro platbu</h3>
        <p><strong>Částka k úhradě:</strong> ${data.finalAmount.toFixed(2)} ${data.currency}</p>
        <p><strong>Číslo účtu:</strong> ${data.accountNumber}</p>
        <p><strong>Variabilní symbol:</strong> <span style="font-size: 18px; color: #1277d4; font-weight: bold;">${data.variableSymbol}</span></p>
        <p><strong>Zpráva pro příjemce:</strong> ${data.messageForRecipient}</p>
        <p><strong>Splatnost:</strong> ${data.dueDate}</p>
      </div>

      <div style="text-align: center; margin-top: 24px;">
        <p><strong>Rychlá platba přes QR kód:</strong></p>
        <img src="${data.qrImageUrl}" alt="QR Platba" width="200" height="200" style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px; margin: 0 auto;" />
        <p style="font-size: 12px; color: #718096;">Otevřete aplikaci svého mobilního bankovnictví a načtěte tento kód.</p>
      </div>

      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;" />
      <p style="font-size: 14px; color: #718096; text-align: center;">S pozdravem,<br>Tým Sportstarters</p>
    </div>
  `;
};