import { memo } from 'react';
import { useTheme } from './hooks/useTheme';
import { SunIcon, MoonIcon } from './index';

// Icon configuration - Open/Closed Principle
const THEME_CONFIG = {
  dark: {
    icon: SunIcon,
    label: 'Switch to light mode',
    iconColor: 'text-yellow-500'
  },
  light: {
    icon: MoonIcon,
    label: 'Switch to dark mode',
    iconColor: 'text-slate-700'
  }
};

const ThemeToggle = memo(() => {
  const { theme, toggleTheme } = useTheme();
  const config = THEME_CONFIG[theme];
  const IconComponent = config.icon;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-all duration-200 transform hover:scale-110"
      aria-label="Toggle theme"
      title={config.label}
      type="button"
    >
      <IconComponent className={`w-6 h-6 ${config.iconColor}`} />
    </button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
