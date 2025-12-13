import { FC, memo } from 'react';

import { projects, SectionId, skills } from '../../../data/data';
import Section from '../../Layout/Section';
import ProjectCarousel from './ProjectCarousel';
import ResumeSection from './ResumeSection';
import { SkillGroup } from './Skills';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Projects}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Featured Projects">
          <p className="mb-6 text-sm text-neutral-600">
            Explore my latest projects showcasing expertise in game development, AI/ML, and distributed systems.
          </p>
          <ProjectCarousel projects={projects} />
        </ResumeSection>
        <ResumeSection title="Skills">
          <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
