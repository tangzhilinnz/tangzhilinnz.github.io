import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  // CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
// Project images
import mazeProjectImage from '../images/projects/maze_solver.gif';
import lighthouseProjectImage from '../images/projects/dx11_lighthouse.gif';
import openglProjectImage from '../images/projects/opengl_oit.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  ProjectItem,
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
  Projects: 'projects',
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
    { label: 'Location', text: 'Chicago, IL', Icon: MapIcon },
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    { label: 'Nationality', text: 'Chinese', Icon: FlagIcon },
    { label: 'Interests', text: '🥏Frisbee, 🥾Hiking', Icon: SparklesIcon },
    { label: 'Study', text: 'DePaul University', Icon: AcademicCapIcon },
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
 * Project section
 */
export const projects: ProjectItem[] = [
  {
    title: 'High-Performance Multi-threaded Maze Solver',
    image: mazeProjectImage,
    description:
      'Advanced C++17 maze solving algorithms optimized for high-end multicore CPUs (i9-14900KF). Features parallel pruning, bidirectional search, and collaborative DFS with intelligent thread synchronization for maximum throughput.',
    githubUrl: 'https://github.com/tangzhilinnz/MULTI_CPP_MAZE',
    liveUrl: 'https://tangzhilinnz.github.io/maze_visualization/',
    technologies: ['C++17', 'Multithreading', 'Parallel Algorithms', 'Performance Optimization', 'CMake'],
    highlights: [
      'Implemented parallel pruning strategy with bidirectional search, dynamically reducing search space in real-time',
      'Built collaborative bidirectional DFS with global state sharing to eliminate redundant work across threads',
      'Optimized for i9-14900KF using C++17 multi-threading library, minimizing synchronization overhead',
      'Achieved massive parallel throughput on server platforms while maintaining versatility for workstations',
      'Created interactive visualization showing all algorithms in action with live performance comparison',
    ],
  },
  {
    title: 'DirectX 11 Lighthouse Scene',
    image: lighthouseProjectImage,
    description:
      'Award-winning DirectX 11 lighthouse scene developed for GAM470 at DePaul University. Features advanced rendering techniques including dynamic skybox, multiple light sources, realistic water effects, atmospheric fog, mirror reflections, and height-map terrain with texture interpolation.',
    githubUrl: 'https://github.com/tangzhilinnz/DX11-Learning-Framework',
    liveUrl: 'https://www.linkedin.com/posts/tangzhilin_final-project-showcase-dx11-lighthouse-activity-7311612089268125697-0FYR',
    technologies: ['C++', 'DirectX 11', 'HLSL', 'Graphics Programming', 'Shader Development'],
    highlights: [
      'Implemented stunning water effects with realistic wave simulation (featured in future course curriculum)',
      'Developed dynamic skybox system with multiple light sources and atmospheric fog rendering',
      'Created mirror reflections and realistic moving boat with physics-based animation',
      'Built rugged height-map terrain with multi-texture interpolation for visual variety',
      'Received high praise from instructor for advanced shader programming and rendering quality',
    ],
  },
  {
    title: 'OpenGL Learning Framework',
    image: openglProjectImage,
    description:
      'A comprehensive learning framework advancing from beginner to mastery in OpenGL. Features implementation of advanced rendering techniques including Weighted Blended Order-Independent Transparency (OIT) and texture filtering optimizations, systematically organizing study materials and code for streamlined learning.',
    githubUrl: 'https://github.com/tangzhilinnz/OpenGL_L',
    liveUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7286215957738401793/',
    technologies: ['C++', 'OpenGL', 'GLSL', 'Computer Graphics', 'CMake'],
    highlights: [
      'Implemented Weighted Blended OIT algorithm achieving smooth transparency in single render pass without depth sorting',
      'Developed custom learning framework from scratch to systematically organize graphics programming concepts',
      'Built anisotropic filtering demo showing significant visual quality improvements over trilinear filtering at oblique angles',
      'Created interactive demos showcasing real-time transparency rendering with accurate color blending across multiple layers',
      'Structured codebase enabling practical experimentation with advanced rendering techniques',
    ],
    date: '2024',
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
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/tangzhilinnz' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/tangzhilin/' },
];
