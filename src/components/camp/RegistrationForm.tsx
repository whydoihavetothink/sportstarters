import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const hearAboutOptions = [
  "Social media",
  "Friend or family",
  "School",
  "Online search",
  "Poster / flyer",
  "Other",
];

const tshirtSizes = ["110/116", "122/128", "134/140", "146/152", "158/164"];

const RegistrationForm = () => {
  const { toast } = useToast();
  const [consent, setConsent] = useState(false);
  const [hearAbout, setHearAbout] = useState("");
  const [tshirtSize, setTshirtSize] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) {
      toast({ title: "Please agree to the terms", variant: "destructive" });
      return;
    }
    if (!hearAbout) {
      toast({ title: "Please tell us how you heard about us", variant: "destructive" });
      return;
    }
    if (!tshirtSize) {
      toast({ title: "Please select a T-shirt size", variant: "destructive" });
      return;
    }
    toast({ title: "Registration submitted!", description: "We'll be in touch soon." });
  };

  return (
    <section id="registration" className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Register Your Child</h2>
        <p className="text-muted-foreground text-center mb-10">
          Spots are limited. Secure your child's place today.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-surface border border-border rounded-2xl p-6 md:p-10 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="childName">Child's Name *</Label>
              <Input id="childName" required placeholder="First and last name" maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="childAge">Child's Age *</Label>
              <Input id="childAge" required type="number" min={6} max={13} placeholder="6–13" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="parentName">Parent's Name *</Label>
              <Input id="parentName" required placeholder="First and last name" maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" required type="email" placeholder="your@email.com" maxLength={255} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" required type="tel" placeholder="+420 ..." maxLength={20} />
            </div>
            <div className="space-y-2">
              <Label>T-shirt Size *</Label>
              <Select value={tshirtSize} onValueChange={setTshirtSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {tshirtSizes.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="health">Health Notes</Label>
            <Textarea
              id="health"
              placeholder="Allergies, medications, or anything we should know..."
              maxLength={1000}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label>How did you hear about us? *</Label>
            <Select value={hearAbout} onValueChange={setHearAbout}>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {hearAboutOptions.map((opt) => (
                  <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start gap-3 pt-2">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(v) => setConsent(v === true)}
              className="mt-0.5"
            />
            <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
              I agree to the processing of personal data for the purpose of camp registration and 
              communication. I confirm that all provided information is accurate.
            </Label>
          </div>

          <Button variant="cta" size="lg" type="submit" className="w-full">
            Submit Registration
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
