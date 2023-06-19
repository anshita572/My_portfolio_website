import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    c,
    stubble,
    snake,
    disney,
    thapar,
    cbse,
    icse,
    github
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    // {
    //   id: "github",
    //   title: "GitHub",
    //   icon: github,
    //   url: "https://github.com/anshita572",
    // },
  ];
  
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Structures & Algorithms",
      icon: mobile,
    },
    {
      title: "Git & Github",
      icon: backend,
    },
    {
      title: "Database Management Systems",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: c,
    },
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    
  ];
  
  const experiences = [
    {
      title: "Bachelor of Engineering (B.E.) in Computer Engineering",
      company_name: "Thapar Institute of Engineering and Technology,Patiala",
      icon: thapar,
      iconBg: "white",
      date: "2020 - 2024",
      points: [
        "Current CGPA : 8.43",
        "Core Subjects : Data Structures and Algorithms,Operating Systems,Database Management System,Computer Networks,Software Engineering,Machine Learning",
        "Electives : Cloud Computing,Parallel and Distributed Computing,GPU Computing",
      ],
    },
    {
      title: "Higher Secondary Education",
      company_name: "Central Board of Secondary Education (CBSE)",
      icon: cbse,
      iconBg: "white",
  
      date: "2020",
      points: [
        "Class 12th Percentage : 91.2%",
        "Subjects : Physics,Chemistry,Mathematics,English,Physical Education",
      ],
    },
    {
      title: "Senior Secondary Education",
      company_name: " Indian Certificate of Secondary Education (ICSE)",
      icon: icse,
      iconBg: "white",
      date: "2018",
      points: [
        "Class 10th Percentage : 97.4%",
        "Academic Achievement : ICSE District Topper",
        "Subjects : English,Mathematics,Science,History,Civics & Geography,Economic Applications,Hindi,Punjabi",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
      name: "Stubb Venture",
      // href: "https://stubbventure.com/",
      // cursor:'pointer',
      linkUrl: "https://anshita572.github.io/stubble-management-project/",
      
      description:
        "An online web portal that aims to bridge the gap between farmers and factories and help control stubble burning. The platform provides an easier way for farmers to sell their stubble and for factories to purchase it",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "google sheets api",
          color: "pink-text-gradient",
        },
      ],
      image: stubble,
      source_code_link: "https://github.com/anshita572/stubble-management-project",
    },
    {
      name: "Clone - Disney Hotstar",
      linkUrl: "https://anshita572.github.io/Disney-Hotstar-clone/",
      description:
        "Frontend clone of Disney+Hotstar that mimics the design and layout of the original platform. It features a modern and sleek user interface which makes it easy for users to navigate and discover content",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: disney,
      source_code_link: "https://github.com/anshita572/Disney-Hotstar-clone",
    },
    {
      name: "Snake Mania",
      linkUrl: "https://anshita572.github.io/snake-game/",
      description:
        "An enjoyable and engaging game that tracks the current score and high score while featuring lively music and sound effects. This game is built using HTML, CSS, and JavaScript, offering an interactive experience",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: snake,
      source_code_link: "https://github.com/anshita572/snake-game",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };