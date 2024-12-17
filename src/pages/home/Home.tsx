import ExtenstionSection from "../../components/extension-section/ExtensionSection";
import FAQSecion from "../../components/faq-section/FAQSection";
import FeaturesSection from "../../components/features-section/FeaturesSection";
import FormSection from "../../components/form-section/FormSection";
import LandingSection from "../../components/landing-section/LandingSection";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <LandingSection />
      <FeaturesSection />
      <ExtenstionSection />
      <FAQSecion />
      <FormSection />
    </>
  );
};

export default Home;
