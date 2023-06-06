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
    arduino,
    blender,
    figma,
    photoshop,
    illustrator,
    unity,
    git,
    meta,
    uao,
    solinglosas,
    aame,
    carrent,
    arbre,
    ardu,
    casuality,
    jobit,
    tripguide,
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
      title: "CV 📄",
      url: "https://drive.google.com/file/d/1yRlz--YS4EIsz3DfRnFBADi4PW_ZrssR/view?usp=sharing"
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: webdev,
    },
    {
      title: "UI/UX Designer",
      icon: uiux,
    },
    {
      title: "Games",
      icon: games,
    },
    {
      title: "Digital Artist",
      icon: digitalart,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Arduino",
      icon: arduino,
    },
    {
      name: "Blender",
      icon: blender,
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
      title: "Web Developer",
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
        "VIVO implementation and User Interface update according to the institution's standards and design patterns.",
        "Analyze users context in order to identify requirements.",
        "Design the multimedia system based on the identified requirements.",
        "Implement the multimedia system, taking into account the design made.",
        "Evaluate the implementation of the multimedia system carried out",
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
        "My approach is user-centered, focusing on the needs and preferences."
      ],
    },
    /* {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }, */
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
        }
        ,
      ],
      image: carrent,
      source_code_link: "https://youtu.be/wvozyYr3qCE",
    },
    {
      name: "Image Classificator",
      description:
        "'Image Classificator' is a demostration of artificial intelligence application in mobile and embedded devices.",
      tags: [
        {
          name: "Arduino",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Proteus",
          color: "blue-text-gradient",
        },
      ],
      image: ardu,
      source_code_link: "https://youtube.com/shorts/aKbzTUFaCas?feature=share",
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