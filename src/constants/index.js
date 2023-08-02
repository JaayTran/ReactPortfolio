import {
  linkedin,
  resume,
  bluegithub,
  email,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  python,
  sql,
  mysql,
  graphql,
  expressjs,
  java,
  canfar,
  freelance,
  resumepdf,
  pos,
  robotboil,
  trianglefab,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const links = [
  {
    title: 'Resume',
    icon: resume,
    linkurl: resumepdf,
  },
  {
    title: 'Github',
    icon: bluegithub,
    linkurl: 'https://github.com/JaayTran/',
  },
  {
    title: 'Linkedin',
    icon: linkedin,
    linkurl: 'https://www.linkedin.com/in/jaaytran/',
  },
  {
    title: 'Contact Me',
    icon: email,
    linkurl: 'mailto:jimmy2301@gmail.com',
  },
];

const languages = [
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Python3',
    icon: python,
  },
  {
    name: 'HTML 5',
    icon: html,
  },

  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'GraphQL',
    icon: graphql,
  },
];

const tools = [
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'ExpressJS',
    icon: expressjs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Robot Boil House',
    icon: freelance,
    iconBg: '#383E56',
    date: 'April 2023 - Present',
    points: [
      'Developed a reservation management web app using the MERN stack (MongoDB, Express.js, React.js, Node.js) for a return client, delivering efficient and user-friendly software solution.',
      'Increased operational efficiency by providing real-time visual representation of reservations for each day, enabling the restaurant staff to optimize table occupancy and minimize wait times.',
      'Employed RESTful API principles to design and develop the backend endpoints, allowing for efficient data retrieval and manipulation.',
      'Utilized industry best practices and coding standards to ensure high-quality code, maintainable software, and scalability of the web app.',
      'Utilized Agile methodology to complete each iteration of the software, creating a report backlog and unit tests to track progress and ensure all requirements were completed and code was defect-free and well-tested.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Robot Boil House',
    icon: freelance,
    iconBg: '#383E56',
    date: 'August 2022 - March 2023',
    points: [
      'Designed and developed a fully integrated serverside POS system using MERN stack (MongoDB, Express.js, React.js, Node.js) as well as HTML, CSS, and JavaScript, for clients, streamlining sales tracking and order processing for increased efficiency and faster service.',
      'Successfully transitioned clients from outdated and expensive POS system to a modern digital POS, resulting in annual cost savings of $1000.',
      'Developed a user-friendly CRUD system that enabled authorized users to easily manage restaurant operations directly on the website, resulting in improved operational efficiency and client satisfaction.',
      'Implemented Continuous Integration (CI) and Continuous Deployment (CD) methodologies to streamline the unit testing and deployment process for software releases.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Triangle Fabrications',
    icon: freelance,
    iconBg: '#383E56',
    date: 'May 2022 - June 2022',
    points: [
      'Utilized MERN stack (MongoDB, Express.js, React.js, Node.js) as well as HTML, CSS, and JavaScript to develop an ecommerce website for the client, providing seamless user experience and efficient data storage.',
      'Integrated PayPal payment gateway and order tracking system, enabling secure payment processing and real-time updates for customers.',
      'Developed intuitive and easy-to-use CRUD interface for managing products and users, improving efficiency and reducing errors.',
      'Designed and built a comprehensive data representation model using Google Charts, providing intuitive and visual summaries of order and user data.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Robot Boil House',
    icon: freelance,
    iconBg: '#383E56',
    date: 'June 2021 - September 2021',
    points: [
      "Created a user-friendly website using WordPress to showcase the restaurant's menu, utilizing Microservice GloriaFoods to allow online ordering, and allow customers to make reservations",
      'Created an online presence resulting in the restaurant now averaging 6000 website views each month.',
      'The implementation of the online ordering system increased revenue by enabling the restaurant to claim 10% of gross sales made through pickup orders  back from Uber Eats.',
      "Designed an intuitive interface that empowered the restaurant's client to easily maintain and update the menu items, prices, and operational hours, enabling them to have full control over their online presence and ensuring accurate and up-to-date information for customers",
      'Optimized the website for search engine visibility and performance, utilizing SEO techniques and performance optimization strategies to enhance online discoverability and user experience.',
    ],
  },
  {
    title: 'Data Research Analyst Intern ',
    company_name: 'CANFAR',
    icon: canfar,
    iconBg: '#E6DEDD',
    date: 'Sept 2014 - June 2015',
    points: [
      'Performed database management by inputting information of donations and sponsor info from excel records into an SQL database.',
      'Compiled data with excel for weekly meetings and set up conference rooms.',
      'Interpreted data into visual maps to show which areas were reached or overlooked using Maptive.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Jimmy created helped me create an online presence for my store, allowing for another stream of revenue to come in through online orders.',
    name: 'Hong Zhu',
    designation: 'Restaurant Owner',
    company: 'Robot Boil House',
    image:
      'https://iptc.org/wp-content/uploads/2018/05/avatar-anonymous-300x300.png',
  },
  {
    testimonial:
      "Now I have a website where I'll be able to show off my projects and sell my 3D printed models.",
    name: 'Dat Huynh',
    designation: 'CEO',
    company: 'Triangle Fabrications',
    image:
      'https://iptc.org/wp-content/uploads/2018/05/avatar-anonymous-300x300.png',
  },
  {
    testimonial:
      'Jimmy allowed us to reclaim the 30% of revenue delivery apps were charging us for pickup orders',
    name: 'Andy Nguyen',
    designation: 'Restaurant Owner',
    company: 'U-Tea',
    image:
      'https://iptc.org/wp-content/uploads/2018/05/avatar-anonymous-300x300.png',
  },
];

const projects = [
  {
    name: 'React Portfolio Website',
    description: [
      '· React Web Page that shows off my resume in a stylish way with 3D models via ThreeJS.',
      '· Reduced largest contentful paint 50% from 1.2 seconds to .6 seconds by running web performance tests to identify opportunities to speed up the loading of the webpage.',
      '· Refactored for best practices by validating HTML and CSS using W3C Markup validation service.',
      '· Optimized design for 8+ screen sizes (desktop and mobile) using Responsively app, flexbox and media queries.',
      '· Optimized the website for search engine visibility and performance, utilizing SEO techniques and performance optimization strategies to enhance online discoverability and user experience.',
    ],
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'threejs',
        color: 'green-text-gradient',
      },
      {
        name: 'html',
        color: 'pink-text-gradient',
      },
      {
        name: 'css',
        color: 'orange-text-gradient',
      },
    ],
    image: 'https://www.flaticon.com/free-icon/github-logo_25231',
    source_code_link: 'https://jaaytran.github.io/ReactPortfolio/',
  },
  {
    name: 'Bill Splitting App',
    description: [
      '· Collaborated with a team of developers to design and develop a bill splitting app for Android devices using Java programming language.',
      '· Implemented multiple screens to provide a user-friendly experience for users, including tracking who owed how much and the ability to message friends and request payments.',
      '· Utilized PHP and MySQL to host the server that the application ran on, ensuring secure and reliable data management.',
      '· Reviewed design and code with team members during multiple meetings to ensure quality and bug free code was delivered during each iteration.',
      '· Utilized Agile methodology to complete iterations of the software, updating the report backlog and unit tests to track progress and ensure all requirements were met and all code was defect-free and well-tested.',
    ],

    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient',
      },
      {
        name: 'Android-Studio',
        color: 'green-text-gradient',
      },
    ],
    image: 'https://www.flaticon.com/free-icon/github-logo_25231',
    source_code_link: 'https://github.com/JaayTran/Bill-Splitting-App',
  },
  {
    name: 'OpenGL 3D Drone',
    description: [
      '· Developed a 3D drone application using OpenGL and Java that allows users to maneuver a helicopter drone in all three dimensions and tilt.',
      "· Incorporated collision detection to determine if the user's drone or enemy drones have collided with any objects in the scene.",
      '· Tested and debugged the application to ensure it runs smoothly and without errors.',
      "· Designed enemy drones to spawn in the scene and move towards the user's drone, creating a challenge for the player.",
      '· Added a shooting mechanic that allows the user to fire at enemy drones and destroy them.',
    ],
    tags: [
      {
        name: 'C',
        color: 'blue-text-gradient',
      },
      {
        name: 'OpenGL',
        color: 'green-text-gradient',
      },
    ],
    image: 'https://www.flaticon.com/free-icon/github-logo_25231',
    source_code_link: 'https://github.com/JaayTran/dat-website',
  },
];

export { links, tools, languages, experiences, testimonials, projects };
