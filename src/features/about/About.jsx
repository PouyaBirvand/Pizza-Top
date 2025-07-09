import { memo } from 'react';
import { useAbout } from './hooks/useAbout';
import AboutHero from './components/AboutHero';
import StorySection from './components/StorySection';
import ValuesSection from './components/ValuesSection';
import TeamSection from './components/TeamSection';
import StatsSection from './components/StatsSection';
import { ABOUT_DATA } from './constants/aboutData';

const About = memo(() => {
  const { hero, story, quality, values, team } = ABOUT_DATA;
  const { stats } = useAbout();

  return (
    <div className='mx-auto max-w-6xl px-4 py-12'>
      <AboutHero data={hero} />
      <StorySection storyData={story} qualityData={quality} />
      <ValuesSection values={values} />
      <TeamSection team={team} />

      <StatsSection stats={stats} />
    </div>
  );
});

About.displayName = 'About';

export default About;
