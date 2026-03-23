import { Info } from "lucide-react";

const ParentInfo = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Information for Parents</h2>
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8 flex gap-4">
          <Info className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
          <div className="space-y-3 text-base">
            <p>
              <strong>Financial support available.</strong> Parents in Brno may be eligible for 
              contributions toward summer camp costs from both the city of Brno and Czech health 
              insurance companies.
            </p>
            <p className="text-muted-foreground">
              We recommend checking with your employer, municipality, or health insurance provider 
              for details on available subsidies. We're happy to provide any documentation you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentInfo;
