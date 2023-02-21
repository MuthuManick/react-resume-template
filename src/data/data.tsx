import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
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
  title: 'Muthu manickam',
  description: "Personal profile of Muthu manickam",
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

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Muthu manickam.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Madurai based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Maestrowiz solutions</strong>
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p> */}
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
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
  description: `I am a Java full stack software engineer with 5+ years of experience`,
  aboutItems: [
    {label: 'Location', text: 'Madurai, India', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Cricket, Reading tech blogs', Icon: SparklesIcon},
    {label: 'Study', text: 'Cms college of Engineering, Namakkal', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Maestrowiz solutions', Icon: OfficeBuildingIcon},
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
        name: 'Tamil',
        level: 10,
      }
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'Javascript',
        level: 7,
      },
      {
        name: 'Jquery',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'node.js',
        level: 3,
      }
      ,
      {
        name: 'Spring & spring boot',
        level: 7,
      }
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'MySql',
        level: 9,
      },
      {
        name: 'MS-SQL',
        level: 5,
      },
      {
        name: 'MariaDb',
        level: 2,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'NBC News learn',
    description: 'NBC LEARN is the educational arm of NBC News, is dedicated to making the historic stories, images and primary source documents available on-demand to teachers, students and parents',
    url: 'https://muthumanickam.vercel.app/',
    image: porfolioImage1,
  },
  {
    title: 'Thales SPR',
    description: 'Thales SPR is a System performance reporting application.',
    url: 'https://muthumanickam.vercel.app/',
    image: porfolioImage2,
  },
  {
    title: 'Presence suite',
    description: 'Presence Suite All-In-One is an Enghouse Interactive solution, which provides a complete, easy-to-use and implement tool that promotes and improves Customer Engagement Centers operations.',
    url: 'https://muthumanickam.vercel.app/',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2016',
    location: 'CMS college of Engineering',
    title: 'Bachelor of Technology (IT)',
    content: <p></p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2021 - Present',
    location: 'Maestrowiz solutions, Madurai',
    title: 'Senior Software Engineer',
    content: (
      <p>
        Working in presence cc tools product, providing custom solutions to the customers based on their requirements.
        Technologies used - Java-8, Spring-boot, Spring-security, My-Sql, JPA, Web Socket.
      </p>
    ),
  },
  {
    date: 'July 2017 - June, 2019',
    location: 'Fourbends LLC., Madurai',
    title: 'Junior Software Engineer',
    content: (
      <p>
        Worked on NBC content integration in Blackboard Learn. 
        Integrated and worked on Video player in the NBC News Learn website. Worked on video 
        playlists by consuming SNAS API. Analyzed and debugged production issues in 
        JAVA applications and implemented fixes. echnologies used - Java, JSP, Spring, Javascript, Jquery, HTML, CSS.
      </p>
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
      name: 'John Doe',
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
      text: 'umuthu1008@gmail.com',
      href: 'mailto:umuthu1008@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Madurai, India',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/MuthuManick'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8404256/muthu'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/muthu-manickam/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/muthu__manickam.u/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/umuthu1008'},
];
