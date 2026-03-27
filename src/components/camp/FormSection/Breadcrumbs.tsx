import { CheckCircle2 } from "lucide-react";

type RegistrationStepperProps = {
  step: number;
};

const Breadcrumbs = ({ step }: RegistrationStepperProps) => {
  const steps = [
    { num: 1, label: "Termín" },
    { num: 2, label: "Údaje" },
    { num: 3, label: "Souhlasy" }
  ];

  return (
    <div className="flex items-center justify-center mb-12 mt-2">
      {steps.map((item, index) => (
        <div key={item.num} className="flex items-center">
          
          {/* Kolečko a popisek */}
          <div className="flex flex-col items-center relative">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors bg-surface z-10 ${
                step >= item.num 
                  ? 'border-primary text-primary' 
                  : 'border-border text-muted-foreground'
              }`}
            >
              {step > item.num ? <CheckCircle2 className="w-5 h-5" /> : item.num}
            </div>
            
            {/* Textový popisek pod kolečkem */}
            <span 
              className={`absolute top-12 text-xs font-medium whitespace-nowrap transition-colors ${
                step >= item.num ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </span>
          </div>

          {/* Spojovací čára (nezobrazí se za posledním krokem) */}
          {index < steps.length - 1 && (
            <div className="w-12 sm:w-20 md:w-28 h-1 mx-2 sm:mx-4 rounded-full bg-border relative overflow-hidden">
              <div 
                className={`absolute top-0 left-0 h-full bg-primary transition-all duration-500 ease-in-out ${
                  step > item.num ? 'w-full' : 'w-0'
                }`} 
              />
            </div>
          )}
          
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;