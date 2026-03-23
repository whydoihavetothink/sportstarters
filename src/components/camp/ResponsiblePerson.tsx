import { User } from "lucide-react";

const ResponsiblePerson = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Responsible Person</h2>
        <div className="bg-surface border border-border rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-28 h-28 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
            <User className="w-12 h-12 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">Your Name</h3>
            <p className="text-primary font-medium text-sm mb-4">Founder & Camp Director</p>
            <p className="text-muted-foreground leading-relaxed">
              A lifelong sports enthusiast and experienced organizer with a passion for helping 
              kids discover the joy of movement. Safety, responsibility, and creating a positive 
              environment where every child feels welcome are the foundations of Sportstarters. 
              With years of experience working with children in various sports settings, the camp 
              is built on proven methods and genuine care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiblePerson;
