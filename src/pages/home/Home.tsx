import ExtenstionSection from "../../components/extension-section/ExtensionSection";
import FeaturesSection from "../../components/features-section/FeaturesSection";
import LandingSection from "../../components/landing-section/LandingSection";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <LandingSection />
      <FeaturesSection />
      <ExtenstionSection />
    </>
  );
};

export default Home;
