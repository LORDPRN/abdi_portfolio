import {
  uiux,
  games,
  digitalart,
  webdev,
  html,
  css,
  javascript,
  reactjs,
  csharp,
  python,
  spline,
  blender,
  figma,
  photoshop,
  illustrator,
  unity,
  git,
  meta,
  uao,
  sig,
  solinglosas,
  aame,
  carrent,
  arbre,
  ardu,
  casuality,
  jobit,
  tripguide,
  flutter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "cv",
    title: "CV",
    url: "https://drive.google.com/file/d/1Q6TX8z2cUhdJMVjl4A0ungPJ1anDvWvu/view?usp=sharing",
  },
];

const services = [
  {
    title: "Web & Mobile Developer",
    icon: webdev,
  },
  {
    title: "UI/UX Designer",
    icon: uiux,
  },
  {
    title: "Videogames Developer",
    icon: games,
  },
  {
    title: "Digital Artist",
    icon: digitalart,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  { name: "Flutter", icon: flutter },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Spline",
    icon: spline,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Adobe PS",
    icon: photoshop,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "unity",
    icon: unity,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Solinglo S.A.S",
    icon: solinglosas,
    iconBg: "#fff",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Website development for the company SOLUCIONES INTEGRALES DE INGENIERÍA Y LOGÍSTICA S.A.S. usign Wordpress.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Universidad Autónoma de Occidente",
    icon: uao,
    iconBg: "#fff",
    date: "June 2022 - March 2023",
    points: [
      "Redesigned and implemented the CRIS VIVO platform's user interface to align with institutional design patterns and usability standards.",
      "Utilized the MPIu+a methodology to ensure a user-centered approach, enhancing usability and accessibility.",
      "Collaborated with cross-functional stakeholders to analyze user needs and system requirements.",
      "Prototyped, evaluated, and deployed high-fidelity UI designs, ensuring iterative improvements based on feedback.",
      "Integrated the platform on Microsoft Azure for testing and final deployment, achieving a 'Good' usability rating through heuristic evaluation and user testing.",
    ],
  },

  {
    title: "Quality Assurance & Front-End",
    company_name: "SIG Systems Inc",
    icon: sig,
    iconBg: "#111",
    date: "July 2023 - March 2024",
    points: [
      "Collaborated with cross-functional teams including Project Manager, IT Manager, developers, and clients to align quality standards.",
      "Developed and maintained comprehensive test documentation, including test plans, test cases, and bug reports.",
      "Designed and developed a Web-based dashboard application using Figma and Laravel (PHP) to streamline repetitive IT tasks and track technician performance and site status.",
      "Participated in agile Scrum processes, contributing to sprint planning, stand-ups, and retrospectives.",
      "Ensured quality by identifying, documenting, and tracking software issues to resolution.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "SIG Systems Inc",
    icon: sig,
    iconBg: "#111",
    date: "March 2024 - Present",

    points: [
      "Developed a camera monitoring app with Flutter, BLoC, and WebRTC, enabling cross-app communication and seamless streaming.",
      "Integrated Dahua and Hikvision APIs for alert extraction, IVS event handling, and front-end actions.",
      "Built a video playback system with HLS, .m3u8 files, and dynamic timelines for smooth navigation and interaction.",
      "Created a responsive front-end with HTML, CSS, and JavaScript, featuring fullscreen toggles, drag-and-drop layouts, SD/HD, and PTZ controls.",
      "Applied clean architecture, Gitflow, and Scrum methodologies to deliver scalable, high-quality solutions.",
      "Collaborated with backend teams to integrate and optimize streaming services.",
      "Documented workflows and used Azure DevOps for task tracking, version control, and code reviews.",
    ],
  },
  {
    title: "I'm open to Work",
    company_name: "Excited to start a new journey",
    icon: aame,
    iconBg: "#fff",
    date: "Present",
    points: [
      "I'm able to design High - Fidelity Web Prototypes easy to use.",
      "I can develop Websites and Web Apps for your company.",
      "Creating transmedia narratives such as videogames, comics or interactive videos are also among my strengths.",
      "My working methodology includes collaborating with cross-functional teams.",
      "My approach is user-centered, focusing on the needs and preferences.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CRIS UAO | High fidelity",
    description:
      "Design for CRIS UAO UI, targeting the users needs to facilitate and manage research content.",
    tags: [
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
      {
        name: "Adobe PS",
        color: "blue-text-gradient",
      },
      {
        name: "Usability Tests",
        color: "green-text-gradient",
      },
    ],
    image: ardu,
    source_code_link:
      "https://www.figma.com/proto/ofiOvljDfs5LYOJVyAbban/VIVO-UAO?node-id=373-3385&starting-point-node-id=373%3A3385&scaling=scale-down-width&hide-ui=1",
  },
  {
    name: "CRIS UAO",
    description:
      "'CRIS UAO' is an UI redesign according to the Autónoma de Occidente standars and patterns, in order to improve usability and UX.",
    tags: [
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Git",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://youtu.be/wvozyYr3qCE",
  },
  {
    name: "Ariabaku Station",
    description:
      "'Ariabaku Station' is an Endless runner videogame about 'Leo', You have to run as far as you can to escape from the ghost station.",
    tags: [
      {
        name: "C-Sharp",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe Ps",
        color: "green-text-gradient",
      },
      {
        name: "Unity",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://youtu.be/uDwfJdPum3Q",
  },
];

export { services, technologies, experiences, testimonials, projects };
