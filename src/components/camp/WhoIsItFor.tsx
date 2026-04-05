import { Check } from "lucide-react";

const items = [
"Pro kluky i holky",
"Děti od 6 do 13 let",
"Vhodné i pro úplné začátečníky — předchozí zkušenosti nejsou potřeba",
"Pro děti, které se chtějí hýbat, hrát si a užít si týden bez mobilů"];


const WhoIsItFor = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Pro koho je kemp vhodný?</h2>
        <div className="bg-surface rounded-2xl border border-border p-8 md:p-10">
          <ul className="space-y-4">
            {items.map((item) =>
            <li key={item} className="flex items-start gap-3 text-lg">
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </span>
                {item}
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

};

export default WhoIsItFor;