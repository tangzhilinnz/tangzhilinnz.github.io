import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact}>
      <div className="flex flex-col items-center gap-y-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <EnvelopeIcon className="h-16 w-16 text-orange-500" />
          <h2 className="text-4xl font-bold text-white">{headerText}</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-300">{description}</p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({type, text, href}) => {
            const {Icon, srLabel} = ContactValueMap[type];
            return (
              <a
                className={classNames(
                  'group flex flex-col items-center gap-3 rounded-2xl bg-neutral-700 p-6 transition-all duration-300 hover:bg-neutral-600 hover:shadow-xl',
                  {'cursor-pointer': href, 'cursor-default': !href},
                )}
                href={href || undefined}
                key={srLabel}
                rel="noopener noreferrer"
                target="_blank">
                <div className="rounded-full bg-orange-500/10 p-4 transition-all group-hover:bg-orange-500/20">
                  <Icon aria-hidden="true" className="h-8 w-8 text-orange-500" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <dt className="text-xs font-medium uppercase tracking-wider text-neutral-400">{srLabel}</dt>
                  <dd className="text-center text-sm font-medium text-white">{text}</dd>
                </div>
              </a>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-4 text-center">
          <p className="text-sm text-neutral-400">
            Feel free to reach out through any of the channels above. I'm always open to discussing new opportunities!
          </p>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
