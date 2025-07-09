import { useSelector } from 'react-redux';
import HeroSection from './components/HeroSection';
import CTASection from './components/CTASection';
import FeaturesSection from './components/FeaturesSection';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className='flex min-h-screen items-center justify-center px-4'>
      <div className='mx-auto max-w-4xl text-center'>
        <HeroSection />
        <CTASection username={username} />
        <FeaturesSection />
      </div>
    </div>
  );
}

export default Home;
