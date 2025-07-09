import { HERO_CONFIG } from '../constants/feature';

function HeroText() {
  const { title, subtitle, description } = HERO_CONFIG;

  return (
    <div className='space-y-6'>
      <h1 className='text-4xl font-bold md:text-6xl lg:text-7xl'>
        <span className='bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700 bg-clip-text text-transparent dark:from-emerald-400 dark:via-emerald-300 dark:to-emerald-500'>
          {title}
        </span>
      </h1>

      <p className='text-xl font-medium text-slate-600 dark:text-slate-300 md:text-2xl'>
        {subtitle}
      </p>

      <p className='mx-auto max-w-2xl text-lg leading-relaxed text-slate-500 dark:text-slate-400 md:text-xl'>
        <span className='font-semibold text-emerald-600 dark:text-emerald-400'>
          {description.highlight}
        </span>
        <br />
        {description.text}
      </p>
    </div>
  );
}

export default HeroText;
