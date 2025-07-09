import { HERO_CONFIG } from "../constants/feature";

function HeroText() {
  const { title, subtitle, description } = HERO_CONFIG;
  
  return (
    <div className="space-y-6">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
        <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700 dark:from-emerald-400 dark:via-emerald-300 dark:to-emerald-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium">
        {subtitle}
      </p>
      
      <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
          {description.highlight}
        </span>
        <br />
        {description.text}
      </p>
    </div>
  );
}

export default HeroText;
