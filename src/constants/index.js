import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  canfar,
  freelance,
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

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: creator,
  },
];

const technologies = [
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
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Freelance Developer',
    company_name: 'Self-Employed',
    icon: freelance,
    iconBg: '#383E56',
    date: 'June 2021 - Present',
    points: [
      'Collaborated with clients to develop customized software solutions that met their unique business needs, resulting in increased efficiency and productivity.',
      'Developed responsive and user-friendly websites using HTML, CSS, and JavaScript, resulting in increased traffic and improved search engine rankings.',
      'Built and maintained custom MERN stack eCommerce websites as well as used platforms such as WordPress and microservices like GloriaFood, resulting in increased sales and revenue for clients.',
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
    name: 'POS System',
    description: [
      '· Developed a fully integrated serverside POS system for clients, streamlining sales tracking and order processing for increased efficiency and faster service.',
      '· Successfully transitioned clients from outdated and expensive POS system to a modern digital POS, resulting in annual cost savings of $3000.',
      '· Developed a user-friendly CRUD system that enabled authorized users to easily manage restaurant operations directly on the website, resulting in improved operational efficiency and client satisfaction..',
    ],
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'expressjs',
        color: 'pink-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'orange-text-gradient',
      },
    ],
    image: pos,
    source_code_link: 'https://github.com/JaayTran/pos',
  },
  {
    name: 'Robot Boil House Site',
    description: [
      "· Created online presence restaurant by providing an ecommerce website for client's restaurant via WordPress.",
      '· Reclaimed 30% of order fees taken by food apps such as UberEats by integrating online ordering system through microservice GloriaFood.',
      '· Improved efficiency of workers by allowing reservations to be made through website instead of taken over the phone.',
    ],

    tags: [
      {
        name: 'wordpress',
        color: 'blue-text-gradient',
      },
      {
        name: 'gloriafoods',
        color: 'green-text-gradient',
      },
      {
        name: 'elementor',
        color: 'pink-text-gradient',
      },
    ],
    image: robotboil,
    source_code_link: 'https://robotboilhouse.com/',
  },
  {
    name: 'Triangle Fabrications',
    description: [
      '· Utilized MERN stack (MongoDB, Express.js, React.js, Node.js) to develop an ecommerce website for the client, providing seamless user experience and efficient data storage.',
      '· Integrated PayPal payment gateway and order tracking system, enabling secure payment processing and real-time updates for customers.',
      '· Developed intuitive and easy-to-use CRUD interface for managing products and users, improving efficiency and reducing errors.',
      '· Designed and built a comprehensive data representation model using Google Charts, providing intuitive and visual summaries of order and user data.rs.',
    ],
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'expressjs',
        color: 'pink-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'orange-text-gradient',
      },
    ],
    image: trianglefab,
    source_code_link: 'https://github.com/JaayTran/dat-website',
  },
];

export { services, technologies, experiences, testimonials, projects };
