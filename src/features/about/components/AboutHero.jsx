import { memo } from 'react';
import Section from './ui/Section';
import LordIcon from './ui/LordIcon';

const AboutHero = memo(({ data }) => {
  const { icon, title, description } = data;

  return (
    <Section className='text-center'>
      <LordIcon
        src={icon.src}
        trigger={icon.trigger}
        delay={icon.delay}
        colors={icon.colors}
        size={icon.size}
        style={{ margin: '0 auto 24px' }}
      />

      <h1 className='mb-6 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-4xl font-bold text-transparent dark:from-emerald-400 dark:to-emerald-600 md:text-5xl'>
        {title}
      </h1>

      <p className='mx-auto max-w-3xl text-xl text-slate-600 dark:text-slate-300'>
        {description}
      </p>
    </Section>
  );
});

AboutHero.displayName = 'AboutHero';

export default AboutHero;
