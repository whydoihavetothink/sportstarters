import { Heart, Users, Trophy, Smile, Zap } from "lucide-react";

const values = [
{ icon: Zap, label: "Pohyb", desc: "Každý den aktivní pohyb a různé sporty" },
{ icon: Smile, label: "Zábava", desc: "Hry a aktivity, které děti opravdu baví" },
{ icon: Users, label: "Kamarádství", desc: "Nová přátelství díky týmovým aktivitám" },
{ icon: Trophy, label: "Sebevědomí", desc: "Děti si budují sebevědomí při sportu" },
{ icon: Heart, label: "Pro každého", desc: "Kemp pro začátečníky i aktivní děti" }];


const AboutSection = () => {
  return (
    <section id="o-kempu" className="section-padding bg-surface">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">O Kempu</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-lg">
          Sportstarters stojí na jednoduché myšlence: dětem prospívá pohyb.{"\n"}
          Proto náš kemp kombinuje různé sporty, pohybové hry a týmové výzvy, díky kterým děti získají sebevědomí, najdou nové kamarády a objeví radost z aktivního pohybu.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {values.map((v) => <div key={v.label} className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-3">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{v.label}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default AboutSection;