import {FC, memo} from 'react';

import {projects, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ProjectCarousel from './ProjectCarousel';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Projects}>
      {/* Projects Section */}
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-black">Check out some of my projects</h2>
        <ProjectCarousel projects={projects} />
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
