import ExtenstionSection from "../../components/extension-section/ExtensionSection";
import FAQSecion from "../../components/faq-section/FAQSection";
import FeaturesSection from "../../components/features-section/FeaturesSection";
import FooterSection from "../../components/footer-section/FooterSection";
import FormSection from "../../components/form-section/FormSection";
import LandingSection from "../../components/landing-section/LandingSection";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <LandingSection />
      <FeaturesSection />
      <ExtenstionSection />
      <FAQSecion />
      <FormSection />
      <FooterSection />
    </main>
  );
};

export default Home;
