import { memo } from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import LordIcon from './ui/LordIcon';

const StorySection = memo(({ storyData, qualityData }) => {
  return (
    <Section>
      <div className='grid items-center gap-12 md:grid-cols-2'>
        {/* Story Card */}
        <Card variant='elevated'>
          <h2 className='mb-6 flex items-center text-3xl font-bold text-slate-800 dark:text-slate-200'>
            <LordIcon
              src={storyData.icon.src}
              trigger={storyData.icon.trigger}
              colors={storyData.icon.colors}
              size={storyData.icon.size}
              style={{ marginRight: '12px', margin: '0 12px 0 0' }}
            />
            {storyData.title}
          </h2>

          {storyData.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-slate-600 dark:text-slate-400 ${
                index < storyData.paragraphs.length - 1 ? 'mb-4' : ''
              }`}
            >
              {paragraph}
            </p>
          ))}
        </Card>

        {/* Quality Card */}
        <div className='relative'>
          <Card variant='gradient'>
            <div className='h-full rounded-3xl bg-white p-8 dark:bg-slate-800'>
              <LordIcon
                src={qualityData.icon.src}
                trigger={qualityData.icon.trigger}
                delay={qualityData.icon.delay}
                colors={qualityData.icon.colors}
                size={qualityData.icon.size}
                style={{ margin: '0 auto 24px' }}
              />

              <h3 className='mb-4 text-center text-2xl font-bold text-slate-800 dark:text-slate-200'>
                {qualityData.title}
              </h3>

              <p className='text-center text-slate-600 dark:text-slate-400'>
                {qualityData.description}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
});

StorySection.displayName = 'StorySection';

export default StorySection;
