import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useState} from 'react';

import {ProjectItem} from '../../../data/dataDef';
import GithubIcon from '../../Icon/GithubIcon';

const ProjectCard: FC<{project: ProjectItem}> = memo(({project}) => {
  const {title, image, description, githubUrl, liveUrl, technologies, highlights} = project;
  const [showHighlights, setShowHighlights] = useState(false);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
      {/* Project Image */}
      <div className="relative h-72 w-full overflow-hidden bg-neutral-200">
        <Image
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Title */}
        <h3 className="mb-3 text-2xl font-bold text-neutral-900">{title}</h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-600">{description}</p>

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <span
              className="rounded-full bg-gradient-to-r from-orange-400 to-orange-500 px-3 py-1 text-xs font-medium text-white shadow-sm"
              key={idx}>
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights Toggle */}
        {highlights.length > 0 && (
          <div className="mb-4">
            <button
              className={classNames(
                'flex w-full items-center justify-between rounded-lg border-2 border-neutral-200 px-4 py-2 text-left text-sm font-semibold text-neutral-700 transition-all hover:border-orange-400 hover:bg-orange-50',
                {'border-orange-400 bg-orange-50': showHighlights},
              )}
              onClick={() => setShowHighlights(!showHighlights)}>
              <span>{showHighlights ? 'Hide Details' : 'Show Details'}</span>
              {showHighlights ? (
                <ChevronUpIcon className="h-5 w-5 text-orange-500" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-orange-500" />
              )}
            </button>

            {/* Highlights Content */}
            <div
              className={classNames(
                'overflow-hidden transition-all duration-300',
                showHighlights ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
              )}>
              <ul className="mt-3 space-y-2 rounded-lg bg-neutral-50 p-4">
                {highlights.map((highlight, idx) => (
                  <li className="flex items-start text-sm text-neutral-700" key={idx}>
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 hover:shadow-lg"
            href={githubUrl}
            rel="noopener noreferrer"
            target="_blank">
            <GithubIcon className="h-5 w-5" />
            <span>View Code</span>
          </a>
          {liveUrl && (
            <a
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-orange-500 bg-white px-4 py-2.5 text-sm font-semibold text-orange-600 transition-all hover:bg-orange-500 hover:text-white hover:shadow-lg"
              href={liveUrl}
              rel="noopener noreferrer"
              target="_blank">
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;
