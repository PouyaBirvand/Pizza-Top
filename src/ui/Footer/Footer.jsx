import FooterBrand from './components/FooterBrand';
import SocialLinks from './components/SocialLinks';
import QuickLinks from './components/QuickLinks';
import ContactInfo from './components/ContactInfo';
import FooterBottom from './components/FooterBottom';
import DeliveryInfoBar from './components/DeliveryInfoBar';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterBrand />
          <SocialLinks />
          <QuickLinks />
          <ContactInfo />
        </div>
        <FooterBottom />
      </div>
      <DeliveryInfoBar />
    </footer>
  );
}

export default Footer;
