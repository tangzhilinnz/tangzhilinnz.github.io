import {ChevronRightIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, memo} from 'react';

import {ProjectItem} from '../../../data/dataDef';

const ProjectCard: FC<{project: ProjectItem}> = memo(({project}) => {
  const {title, image, description, githubUrl, liveUrl, technologies, highlights} = project;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
      {/* Project Image - Larger */}
      <div className="relative h-96 w-full overflow-hidden">
        <Image alt={title} className="object-cover" layout="fill" src={image} />
      </div>

      {/* Project Content - Always Visible */}
      <div className="flex flex-1 flex-col p-6">
        {/* Title */}
        <h3 className="mb-2 text-2xl font-bold text-gray-900">{title}</h3>

        {/* Description */}
        <p className="mb-4 text-sm text-gray-600">{description}</p>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="mb-4">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800"
                  key={`tech-${idx}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <div className="mb-4">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Key Features</h4>
            <ul className="space-y-1">
              {highlights.map((highlight, idx) => (
                <li className="flex items-start text-xs text-gray-700" key={`highlight-${idx}`}>
                  <ChevronRightIcon className="mr-1 mt-0.5 h-3 w-3 flex-shrink-0 text-orange-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="mt-auto flex gap-3">
          {githubUrl && (
            <a
              className="flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700"
              href={githubUrl}
              rel="noopener noreferrer"
              target="_blank">
              GitHub →
            </a>
          )}
          {liveUrl && (
            <a
              className="flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700"
              href={liveUrl}
              rel="noopener noreferrer"
              target="_blank">
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;
