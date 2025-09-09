import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from "./components/ServicesSection";
import SolutionsSection from './components/SolutionsSection';
import PartnerSection from './components/PartnerSection';
import ContactFormSection from './components/ContactFormSection';
import FooterSection from './components/FooterSection';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <ServicesSection />
      <PartnerSection />
      <ContactFormSection />
      <FooterSection />
    </div>
  );
}

export default App;
