import RegistrationForm from "./RegistrationForm";
import RegistrationSidebar from "./RegistrationSidebar";

const RegistrationSection = () => {
  return (
    <section id="registrace" className="py-16 md:px-8 md:py-24 bg-surface">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-10 text-foreground">
          Registrace na kemp
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Area */}
          <div className="lg:col-span-2">
            <RegistrationForm />
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-1">
            <RegistrationSidebar />
          </div>
        </div>

      </div>
    </section>
  );
};

export default RegistrationSection;