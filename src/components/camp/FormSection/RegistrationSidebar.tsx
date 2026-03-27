import { CAMP_DETAILS } from "@/lib/campData";
import { useRegistrationStore } from "@/store/useRegistrationStore";

const RegistrationSidebar = () => {
  // Grab only what we need from the global store
  const formData = useRegistrationStore((state) => state.formData);

  const childFullName = [formData.childFirstName, formData.childLastName]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm sticky top-24">
      <h3 className="text-xl font-display font-bold mb-5 border-b border-border pb-4">
        Shrnutí objednávky
      </h3>
      
      <div className="space-y-4 text-sm">
        <div>
          <span className="block text-muted-foreground mb-1">Název programu</span>
          <span className="font-medium text-foreground text-base">{CAMP_DETAILS.name}</span>
        </div>
        
        <div>
          <span className="block text-muted-foreground mb-1">Zvolený termín</span>
          <span className="font-medium text-foreground text-base">
            {formData.term ? formData.term : <span className="text-muted-foreground/50 italic">Zatím nevybráno</span>}
          </span>
        </div>

        {childFullName && (
          <div>
            <span className="block text-muted-foreground mb-1">Dítě</span>
            <span className="font-medium text-foreground">{childFullName}</span>
          </div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex justify-between items-end">
          <span className="text-muted-foreground">Celková cena</span>
          <span className="text-2xl font-bold text-foreground">
            {CAMP_DETAILS.price.toLocaleString("cs-CZ")} {CAMP_DETAILS.priceCurrency}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSidebar;