import { PAYMENT_INFO } from "@/lib/campData";
import { ArrowRight, CheckCircle2, Copy } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/use-toast";
import { useRegistrationStore } from "@/store/useRegistrationStore";

const PaymentPage = () => {
  const { formData, resetForm } = useRegistrationStore();
  const { toast } = useToast();

  // If the user somehow lands here without a variable symbol, fallback gracefully
  const vs = formData.variableSymbol || "0000000000";

  // Auto-generate the message for the bank transfer
  const messageForRecipient = `Sportstarters termín ${formData.term}: ${formData.childFirstName} ${formData.childLastName}`;

  const generateQRString = () => {
    // Bank apps prefer messages without diacritics and max 60 chars
    const safeMessage = messageForRecipient
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .substring(0, 60);

    return `SPD*1.0*ACC:${PAYMENT_INFO.iban}*AM:${PAYMENT_INFO.amount.toFixed(2)}*CC:${PAYMENT_INFO.currency}*X-VS:${vs}*MSG:${safeMessage}`;
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Zkopírováno",
      description: `${label} bylo zkopírováno do schránky.`,
      duration: 3000,
    });
  };

  return (
    <section className="py-16 md:px-8 md:py-24 bg-background min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-3xl">
        {" "}
        {/* */}
        <div className="bg-surface border border-border rounded-2xl p-6 md:p-10 shadow-sm animate-fade-up">
          {" "}
          {/* */}
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" /> {/* */}
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Registrace byla úspěšná!
            </h1>
            <p className="text-muted-foreground font-body text-lg">
              Děkujeme za přihlášení. Níže naleznete pokyny k platbě. Tyto údaje
              jsme vám také zaslali na e-mail <strong>{formData.email}</strong>.
            </p>
          </div>
          <hr className="border-border mb-10" />
          {/* Payment Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Col: Text Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Údaje pro platbu
              </h3>

              <div className="space-y-4">
                <DetailRow
                  label="Částka k úhradě"
                  value={` ${PAYMENT_INFO.amount.toFixed(2)} ${PAYMENT_INFO.currency}`}
                  highlight
                />
                <DetailRow
                  label="Číslo účtu"
                  value={PAYMENT_INFO.accountNumber}
                  onCopy={() =>
                    copyToClipboard(PAYMENT_INFO.accountNumber, "Číslo účtu")
                  }
                />
                <DetailRow
                  label="Variabilní symbol"
                  value={vs}
                  onCopy={() => copyToClipboard(vs, "Variabilní symbol")}
                  highlight
                />
                <DetailRow label="Příjemce" value={PAYMENT_INFO.accountName} />
                <DetailRow
                  label="Zpráva pro příjemce"
                  value={messageForRecipient}
                  onCopy={() =>
                    copyToClipboard(messageForRecipient, "Zpráva pro příjemce")
                  }
                />
                <DetailRow label="Splatnost" value={PAYMENT_INFO.dueDate} />
              </div>
            </div>

            {/* Right Col: QR Code */}
            <div className="flex flex-col items-center justify-center bg-muted/30 border border-border rounded-xl p-6">
              <h4 className="font-display font-medium text-foreground mb-6">
                Rychlá platba přes QR kód
              </h4>

              <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                <QRCodeSVG
                  value={generateQRString()} 
                  size={192} 
                  level="M" 
                  includeMargin={false} 
                />
              </div>
              <p className="text-sm text-muted-foreground text-center font-body">
                Otevřete aplikaci svého mobilního bankovnictví a načtěte tento
                kód.
              </p>
            </div>
          </div>
          {/* Footer Actions */}
          <div className="mt-12 pt-8 border-t border-border flex justify-center">
            {/* Using the 'cta' variant for the primary exit action */}
            <Button
              variant="cta"
              size="lg"
              onClick={() => {
                resetForm();
                window.location.href = "/";
              }}
            >
              Zpět na hlavní stránku <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for the rows to keep the code clean
const DetailRow = ({
  label,
  value,
  onCopy,
  highlight = false,
}: {
  label: string;
  value: string;
  onCopy?: () => void;
  highlight?: boolean;
}) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-border/50 last:border-0 gap-2">
    <span className="text-muted-foreground text-sm">{label}</span>
    <div className="flex items-center gap-3">
      <span
        className={`font-medium ${highlight ? "text-primary text-lg font-bold" : "text-foreground"}`}
      >
        {value}
      </span>
      {onCopy && (
        <button
          onClick={onCopy}
          className="text-muted-foreground hover:text-primary transition-colors p-1"
          title="Kopírovat"
        >
          <Copy className="w-4 h-4" />
        </button>
      )}
    </div>
  </div>
);

export default PaymentPage;
