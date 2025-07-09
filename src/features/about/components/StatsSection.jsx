import { memo } from 'react';

const StatItem = memo(({ stat }) => (
  <div>
    <div className='mb-2 text-4xl font-bold'>{stat.value}</div>
    <div className='text-emerald-100'>{stat.label}</div>
  </div>
));

StatItem.displayName = 'StatItem';

const StatsSection = memo(({ stats }) => {
  return (
    <div className='rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-8 text-center text-white'>
      <h2 className='mb-8 text-3xl font-bold'>Our Achievements</h2>

      <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
        {stats.map((stat) => (
          <StatItem key={stat.id} stat={stat} />
        ))}
      </div>
    </div>
  );
});

StatsSection.displayName = 'StatsSection';

export default StatsSection;
