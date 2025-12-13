import {ChevronUpIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <footer className="relative bg-neutral-900 px-4 pb-8 pt-16 sm:px-8 sm:pb-12 sm:pt-20">
    {/* Back to Top Button */}
    <div className="absolute inset-x-0 -top-6 flex justify-center">
      <a
        aria-label="Scroll to top"
        className="group rounded-full bg-gradient-to-r from-orange-500 to-orange-600 p-3 shadow-lg transition-all hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
      </a>
    </div>

    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col items-center gap-y-8">
        {/* Name/Branding */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">Zhilin Tang</h3>
          <p className="mt-2 text-sm text-neutral-400">Software Engineer | Graphics Programmer</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-x-6">
          <Socials />
        </div>

        {/* Divider */}
        <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

        {/* Copyright & Credits */}
        <div className="flex flex-col items-center gap-y-2 text-center">
          <p className="text-sm text-neutral-500">© {currentYear} Zhilin Tang. All rights reserved.</p>
          <p className="text-xs text-neutral-600">Built with React & Next.js • Deployed on GitHub Pages</p>
        </div>
      </div>
    </div>
  </footer>
));

Footer.displayName = 'Footer';
export default Footer;
