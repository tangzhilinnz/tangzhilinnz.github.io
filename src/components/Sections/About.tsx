import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-6', {'md:grid-cols-4 md:gap-x-8': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl md:h-72 md:w-72 lg:h-80 lg:w-80">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-3">
            <h2 className="text-2xl font-bold text-white md:text-3xl">About me</h2>
            <div className="prose prose-sm text-gray-300 sm:prose-base">{description}</div>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon, href}, idx) => {
              const content = (
                <>
                  {Icon && (
                    <Icon className={href ? 'h-5 w-5 text-white group-hover:text-orange-500' : 'h-5 w-5 text-white'} />
                  )}
                  <span className="text-sm font-bold text-white">{label}:</span>
                  <span className={href ? 'text-sm text-gray-300 group-hover:underline' : 'text-sm text-gray-300'}>
                    {text}
                  </span>
                </>
              );

              return (
                <li className="col-span-1 flex items-start gap-x-2" key={idx}>
                  {href ? (
                    <a
                      className="group flex cursor-pointer items-start gap-x-2 transition-all hover:text-orange-500"
                      download={label === 'Transcript' ? 'Zhilin_Tang_Transcript.pdf' : undefined}
                      href={href}>
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
