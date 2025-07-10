import { useSelector } from 'react-redux';
import HeroSection from './components/HeroSection';
import CTASection from './components/CTASection';
import FeaturesSection from './components/FeaturesSection';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className='mx-auto max-w-6xl px-4 py-12'>
      <div className='mx-auto max-w-4xl text-center'>
        <HeroSection />
        <CTASection username={username} />
        <FeaturesSection />
      </div>
    </div>
  );
}

export default Home;
