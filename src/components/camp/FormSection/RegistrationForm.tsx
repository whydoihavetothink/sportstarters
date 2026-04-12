import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, HelpCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { CAMP_TERMS, CAMP_TERMS_DEADLINES, TSHIRT_SIZES } from "@/lib/campData";
import Breadcrumbs from "./Breadcrumbs";
import { useToast } from "@/hooks/use-toast";
import { useRegistrationStore } from "@/store/useRegistrationStore";
import { generateVariableSymbol, formatPhoneNumber, formatZipCode } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { Turnstile } from '@marsidev/react-turnstile';

const RegistrationForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Connect to the global store
  const { step, setStep, formData, updateForm } = useRegistrationStore();

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  
  // Loading state for API submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (step === 1) {
      if (!formData.term) {
        toast({ title: "Vyberte prosím termín", variant: "destructive", duration: 3000 });
        return;
      }
      setStep(2);
      return;
    }

    if (step === 2) {
      // 1. Check T-Shirt Size
      if (!formData.tshirtSize) {
        toast({ title: "Vyberte prosím velikost trička", variant: "destructive", duration: 3000 });
        return;
      }

      // 2. Check "Heard About Us"
      if (!formData.heardAboutUs) {
        toast({ title: "Vyberte prosím, jak jste se o nás dozvěděli", variant: "destructive", duration: 3000 });
        return;
      }

      setStep(3);
      return;
    }

    if (step === 3) {
      if (!turnstileToken) {
        toast({ 
          title: "Bot ochrana", 
          description: "Prosím, potvrďte, že jste člověk.", 
          variant: "destructive" 
        });
        return;
      }

      if (!formData.consent) {
        toast({ title: "Musíte souhlasit s VOP", variant: "destructive", duration: 3000 });
        return;
      }

      setIsSubmitting(true);

      try {
         // 1. Generate the unique 10-digit ID
        const variableSymbol = generateVariableSymbol(formData.phone);

        updateForm("variableSymbol", variableSymbol);
        // 2. Merge it with your existing Zustand form data
        const finalPayload = {
          ...formData,
          turnstileToken: turnstileToken,
          variableSymbol: variableSymbol,
          dateTime: new Date().toLocaleString('cs-CZ')
        };

        const response = await fetch('/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(finalPayload),
        });

        if (!response.ok) {
          throw new Error('Nepodařilo se odeslat formulář. Zkuste to prosím znovu.');
        }

        const result = await response.json();
        
        if (result.success) {
          toast({ 
            title: "Registrace byla úspěšná!", 
            description: "Přesměrováváme na platební údaje...",
            duration: 5000,
          });

          navigate('/platba');
        }
      } catch (error: any) {
        console.error("Submission error:", error);
        toast({ 
          title: "Chyba", 
          description: error.message,
          variant: "destructive" 
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div>
      <Breadcrumbs step={step} />

      <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm">
        
        {/* --- STEP 1 --- */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl font-display font-semibold mb-4">1. Výběr termínu</h3>
            <div className="space-y-3">
              {CAMP_TERMS.map((term) => (
                <div 
                  key={term}
                  onClick={() => updateForm("term", term)}
                  className={`p-5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                    formData.term === term ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="font-medium text-lg">{term}</span>
                  {formData.term === term && <CheckCircle2 className="w-6 h-6 text-primary" />}
                </div>
              ))}
            </div>
            <div className="pt-4 flex justify-end">
              <Button type="submit" size="lg" className="w-full md:w-auto">
                Pokračovat <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* --- STEP 2 --- */}
        {step === 2 && (
          <div className="space-y-8 animate-fade-up">
             <div>
                <h3 className="text-2xl font-display font-semibold mb-6">2. Údaje o dítěti</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  
                  <div className="space-y-2">
                    <Label htmlFor="childFirstName" className="h-6 flex items-center">Jméno dítěte *</Label>
                    <Input id="childFirstName" required value={formData.childFirstName} onChange={(e) => updateForm("childFirstName", e.target.value)} placeholder="Jan" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="childLastName" className="h-6 flex items-center">Příjmení dítěte *</Label>
                    <Input id="childLastName" required value={formData.childLastName} onChange={(e) => updateForm("childLastName", e.target.value)} placeholder="Novák" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="childDob" className="h-6 flex items-center">Datum narození *</Label>
                    <Input id="childDob" required type="date" value={formData.childDob} onChange={(e) => updateForm("childDob", e.target.value)} className="w-full min-w-0 appearance-none" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 h-6">
                      <Label>Velikost trička *</Label>
                      <a href="/size_spec.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors group" title="Otevřít tabulku velikostí (PDF)">
                        <HelpCircle className="w-4 h-4" />
                        <span className="text-xs font-medium underline decoration-dotted underline-offset-2 group-hover:decoration-solid">Tabulka velikostí</span>
                      </a>
                    </div>
                    <Select name="tshirtSize" value={formData.tshirtSize} onValueChange={(val) => updateForm("tshirtSize", val)} required>
                      <SelectTrigger><SelectValue placeholder="Vyberte velikost" /></SelectTrigger>
                      <SelectContent>
                        {TSHIRT_SIZES.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2 mt-5">
                  <Label htmlFor="healthNotes" className="h-6 flex items-center">Zdravotní poznámka (nepovinné)</Label>
                  <Textarea id="healthNotes" value={formData.healthNotes} onChange={(e) => updateForm("healthNotes", e.target.value)} placeholder="Alergie, diety..." rows={2} />
                </div>
              </div>

              <hr className="border-border" />

              <div>
                <h3 className="text-2xl font-display font-semibold mb-6">Údaje o zákonném zástupci</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="parentFirstName" className="h-6 flex items-center">Jméno *</Label>
                    <Input id="parentFirstName" required value={formData.parentFirstName} onChange={(e) => updateForm("parentFirstName", e.target.value)} placeholder="Karel" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentLastName" className="h-6 flex items-center">Příjmení *</Label>
                    <Input id="parentLastName" required value={formData.parentLastName} onChange={(e) => updateForm("parentLastName", e.target.value)} placeholder="Novák" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="h-6 flex items-center">Telefon *</Label>
                    <Input 
                      id="phone" 
                      required 
                      type="tel" 
                      value={formData.phone} 
                      onChange={(e) => {
                        const formattedPhone = formatPhoneNumber(e.target.value);
                        updateForm("phone", formattedPhone);
                      }} 
                      placeholder="+420 123 456 789" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="h-6 flex items-center">E-mail *</Label>
                    <Input id="email" required type="email" value={formData.email} onChange={(e) => updateForm("email", e.target.value)} placeholder="karel.novak@email.cz" />
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-display font-semibold mb-4">Korespondenční adresa</h4>
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
                    <div className="space-y-2 md:col-span-6">
                      <Label htmlFor="street" className="h-6 flex items-center">Ulice a č.p. *</Label>
                      <Input id="street" required value={formData.street} onChange={(e) => updateForm("street", e.target.value)} placeholder="Hlavní 123/45" />
                    </div>
                    <div className="space-y-2 md:col-span-4">
                      <Label htmlFor="city" className="h-6 flex items-center">Město *</Label>
                      <Input id="city" required value={formData.city} onChange={(e) => updateForm("city", e.target.value)} placeholder="Brno" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="zipCode" className="h-6 flex items-center">PSČ *</Label>
                      <Input
                        id="zipCode"
                        required
                        value={formData.zipCode}
                        onChange={(e) => {
                          const formattedZipCode = formatZipCode(e.target.value);
                          updateForm("zipCode", formattedZipCode);
                        }}
                        placeholder="602 00"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">

                <div className="space-y-2 md:w-1/2">
                  <Label htmlFor="heardAboutUs" className="h-6 flex items-center">
                    Jak jste se o nás dozvěděli? *
                  </Label>
                  <Select 
                    name = "heardAboutUs"
                    value={formData.heardAboutUs} 
                    onValueChange={(val) => updateForm("heardAboutUs", val)}
                    required
                  >
                    <SelectTrigger id="heardAboutUs">
                      <SelectValue placeholder="Vyberte jednu z možností" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="friends">Od známých / doporučení</SelectItem>
                      <SelectItem value="flyer">Letáček / Plakát ve škole</SelectItem>
                      <SelectItem value="search">Vyhledávač (Google, Seznam)</SelectItem>
                      <SelectItem value="other">Jiné</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Conditionally rendered text input for "Jiné" */}
                {formData.heardAboutUs === "other" && (
                  <div className="mt-2 animate-fade-up">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="heardAboutUsOther" className="h-6 flex items-center text-muted-foreground">
                        Prosím, specifikujte *
                      </Label>
                      {/* Visual character counter */}
                      <span className="text-xs text-muted-foreground">
                        {formData.heardAboutUsOther.length}/50
                      </span>
                    </div>
                    <Input 
                      id="heardAboutUsOther" 
                      required 
                      maxLength={50} // <-- Prevents typing more than 50 characters
                      value={formData.heardAboutUsOther} 
                      onChange={(e) => updateForm("heardAboutUsOther", e.target.value)} 
                      placeholder="Např. inzerát v časopise..." 
                    />
                  </div>
                )}

              </div>
                  <div className="mt-6 flex items-start gap-3 p-4 border border-border rounded-xl bg-primary/5 transition-colors">
                    <Checkbox 
                      id="brnoSubsidy" 
                      checked={formData.brnoSubsidy} 
                      onCheckedChange={(v) => updateForm("brnoSubsidy", v === true)} 
                      className="mt-1"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label 
                        htmlFor="brnoSubsidy" 
                        className="text-sm font-medium leading-relaxed cursor-pointer text-foreground"
                      >
                        Využívám finanční příspěvěk města Brna v hodnotě 4000 Kč.
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        V případě využití voucheru je nutné kredity v systému Brno iD odeslat naší organizaci do 14 dnů od přihlášení, nejpozději však <span className="text font-bold"> do {CAMP_TERMS_DEADLINES[formData.term]}</span>. Pokud kredity nebudou včas připsány, bude vám doúčtována plná cena 5 000 Kč.
                      </p>
                    </div>
                  </div>
              </div>


            <div className="pt-4 flex flex-col-reverse md:flex-row justify-between gap-3">
              <Button type="button" variant="outline" size="lg" onClick={() => setStep(1)} disabled={isSubmitting}>
                <ArrowLeft className="mr-2 w-4 h-4" /> Zpět
              </Button>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                Pokračovat k platbě <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* --- STEP 3 --- */}
        {step === 3 && (
          <div className="space-y-8 animate-fade-up">
             <h3 className="text-2xl font-display font-semibold mb-4">3. Souhlasy a dokončení</h3>
                  
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-6">
                <p className="font-medium text-foreground mb-2">Jak bude probíhat platba?</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Po odsouhlasení VOP a odeslání formuláře vám vyskočí okno s pokyny k platbě (bankovní převod). Kemp je potřeba uhradit do jednoho měsíce od podání přihlášky, jinak bude místo nabídnuto dalším zájemcům.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 border border-border rounded-xl bg-surface hover:bg-muted/50 transition-colors">
                <Checkbox id="consent" checked={formData.consent} onCheckedChange={(v) => updateForm("consent", v === true)} className="mt-1" disabled={isSubmitting} />
                <Label htmlFor="consent" className="text-sm text-foreground leading-relaxed cursor-pointer font-medium">
                  Souhlasím s <a href="/vop.pdf" className="text-primary hover:underline" target="_blank">Všeobecnými smluvními podmínkami a Kempovým řádem</a>. *
                </Label>
              </div>
            
            <div className="flex flex-col items-center">
                {/* 5. The Turnstile Widget */}
                <Turnstile
                  siteKey={import.meta.env.VITE_PUBLIC_CLOUDFLARE_TURNSTILE_KEY!}
                  onSuccess={(token) => setTurnstileToken(token)}
                  onExpire={() => setTurnstileToken(null)}
                  onError={() => setTurnstileToken(null)}
                  options={{
                    theme: 'light',
                    size: 'flexible'
                  }}
                />
              </div>

            <div className="pt-4 flex flex-col-reverse md:flex-row justify-between gap-3">
              <Button type="button" variant="outline" size="lg" onClick={() => setStep(2)} disabled={isSubmitting}>
                <ArrowLeft className="mr-2 w-4 h-4" /> Zpět
              </Button>
              <Button type="submit" variant="cta" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Odesílám..." : "Závazně objednat"}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;