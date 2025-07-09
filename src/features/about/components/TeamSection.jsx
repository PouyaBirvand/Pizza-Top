import { memo } from 'react';
import Card from './ui/Card';
import Section from './ui/Section';
import LordIcon from './ui/LordIcon';


const TeamMember = memo(({ member }) => (
  <Card variant="elevated" className="text-center">
    <LordIcon
      src={member.icon.src}
      trigger={member.icon.trigger}
      colors={member.icon.colors}
      size={member.icon.size}
    />
    
    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
      {member.name}
    </h3>
    
    <p className="text-emerald-600 dark:text-emerald-400 font-medium">
      {member.role}
    </p>
  </Card>
));

TeamMember.displayName = 'TeamMember';

const TeamSection = memo(({ team }) => {
  return (
    <Section>
      <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-200 mb-12">
        Meet Our Team
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </Section>
  );
});

TeamSection.displayName = 'TeamSection';

export default TeamSection;
