import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg'; // gif
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Zhilin (Jason) Tang Resume',
  description: 'Zhilin (Jason) Tang personal resume website',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Zhilin (Jason) Tang.`,
  description: (
    <>
      <div className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Chicago based <strong className="text-stone-100">C++ Software Engineer</strong>, currently studying at{' '}
        <strong className="text-stone-100">DePaul University</strong> learning Real-Time Software and Game Systems.
      </div>
      <div className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing <strong className="text-stone-100">🥏 Frisbee</strong>,
        <strong className="text-stone-100">🎱 Pool</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Chicago</strong>.
      </div>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      {/* An alternative way to achieve the same result is by using the HTML entity &nbsp;, but using {' '} is often more convenient and common in JSX.  */}
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        With <strong className="text-stone-100">four years</strong> of experience in the parallel computing and AI
        industry, I have developed a strong proficiency in <strong className="text-stone-100">C/C++</strong>, and{' '}
        <strong className="text-stone-100">Python</strong> programming, focusing on designing, developing, testing, and
        debugging high-quality software solutions.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing <strong className="text-stone-100">🥏 Frisbee</strong>,
        <strong className="text-stone-100">🎱 Pool</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Chicago</strong>.
      </p>
    </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Chicago, IL', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    {label: 'Interests', text: '🥏Frisbee, 🥾Hiking', Icon: SparklesIcon},
    {label: 'Study', text: 'DePaul University', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Chinese',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'OpenGL',
    description: 'Learning framework',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7286215957738401793/',
    image: porfolioImage1,
  },
  {
    title: 'DirectX 11',
    description: 'shaders, graphics programming, and rendering techniques',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7311612089268125697/',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2024 – Jun 2026',
    location: 'DePaul University (Chicago, IL) ',
    title: 'Master of Science in Software Engineering',
    content: (
      <p>System & Architectural Design, Computer Graphics, Game Systems & Engine Development, Real-Time Systems</p>
    ),
  },
  {
    date: 'Apr 2019 – Nov 2019',
    location: 'Waikato Institute of Technology (New Zealand) ',
    title: 'Graduate Diploma in Applied Information Technology – Software Engineering',
    content: <p>Data Structures & Algorithms, Linear Algebra, Computer Math, Object-oriented Programming</p>,
  },
  {
    date: 'Sep 2006 – Jul 2010',
    location: 'Chengdu University of Information Technology (China)',
    title: 'Bachelor of Engineering in Microelectronics',
    content: <p>Embedded & Real-Time Systems, Circuit Design, Chip Architecture</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2021 – Aug 2024',
    location: 'Chengdu Denglin Technology Co., Ltd',
    title: 'C/C++ Software Development Engineer',
    content: (
      <ul className="prose-sm list-disc pl-5">
        {/* <li className="mb-2">
          Developed low-level parallel algorithms in CUDA for the company's deep learning framework, enhancing AI model
          inference and training performance.
        </li>
        <li className="mb-2">
          Designed and implemented a unit test framework for AI algorithm libraries, including cuDNN and cuBLAS, on the
          company’s devices, significantly improving the robustness, accessibility, and efficiency of application unit
          testing.
        </li>
        <li className="mb-2">
          Migrated PyTorch to the company platform, addressing challenges in compilation, linking, execution, unit
          testing, and third-party library compatibility. Customized and optimized the framework for better performance.
        </li> */}
      </ul>
    ),
  },
  {
    date: 'Aug 2020 – Jan 2021',
    location: 'Wind River Software Technology (Chengdu) Co., Ltd',
    title: 'Linux C Developer & Tester',
    content: (
      <ul className="prose-sm list-disc pl-5">
        {/* <li className="mb-2">
          Tested software for VxWorks RTOS system, ensuring compliance with Boeing’s aviation safety certification
          standards for embedded systems.
        </li>
        <li className="mb-2">
          Refactored software features and developed unit tests to meet verification standards, utilizing tools such as
          Wassp, Simics
        </li> */}
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'aaa',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'tangzhilinnz@gmail.com',
      href: 'mailto:tangzhilinnz@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Chicago IL, USA',
      href: 'https://maps.app.goo.gl/tohMQEtJA7bQRkt87',
    },
    {
      type: ContactType.Github,
      text: 'github.com/tangzhilinnz',
      href: 'https://github.com/tangzhilinnz',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
