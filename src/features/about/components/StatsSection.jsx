import { memo } from 'react';

const StatItem = memo(({ stat }) => (
  <div>
    <div className="text-4xl font-bold mb-2">{stat.value}</div>
    <div className="text-emerald-100">{stat.label}</div>
  </div>
));

StatItem.displayName = 'StatItem';

const StatsSection = memo(({ stats }) => {
  return (
    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-8 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <StatItem key={stat.id} stat={stat} />
        ))}
      </div>
    </div>
  );
});

StatsSection.displayName = 'StatsSection';

export default StatsSection;
