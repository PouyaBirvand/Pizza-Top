import { FEATURES_DATA } from '../constants/feature';
import FeatureCard from './FeatureCard';

function FeaturesSection() {
  return (
    <section>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {FEATURES_DATA.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
