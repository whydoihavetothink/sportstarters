import Navbar from "@/components/camp/Navbar";
import HeroSection from "@/components/camp/HeroSection";
import AboutSection from "@/components/camp/AboutSection";
import WhoIsItFor from "@/components/camp/WhoIsItFor";
import DailyProgram from "@/components/camp/DailyProgram";
import PriceSection from "@/components/camp/PriceSection";
import ParentInfo from "@/components/camp/ParentInfo";
import ResponsiblePerson from "@/components/camp/ResponsiblePerson";
import FAQSection from "@/components/camp/FAQSection";
import RegistrationForm from "@/components/camp/RegistrationForm";
import Footer from "@/components/camp/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhoIsItFor />
      <DailyProgram />
      <PriceSection />
      <ParentInfo />
      <ResponsiblePerson />
      <div id="faq">
        <FAQSection />
      </div>
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Index;
