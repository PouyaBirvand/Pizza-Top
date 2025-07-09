import { memo } from 'react';
import Card from './ui/Card';
import LordIcon from './ui/LordIcon';
import Section from './ui/Section';


const ValueCard = memo(({ value }) => (
  <Card className="text-center">
    <LordIcon
      src={value.icon.src}
      trigger={value.icon.trigger}
      colors={value.icon.colors}
      size={value.icon.size}
    />
    
    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
      {value.title}
    </h3>
    
    <p className="text-slate-600 dark:text-slate-400">
      {value.description}
    </p>
  </Card>
));

ValueCard.displayName = 'ValueCard';

const ValuesSection = memo(({ values }) => {
  return (
    <Section>
      <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-200 mb-12">
        Our Values
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value) => (
          <ValueCard key={value.id} value={value} />
        ))}
      </div>
    </Section>
  );
});

ValuesSection.displayName = 'ValuesSection';

export default ValuesSection;
