import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { links } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const LinkCard = ({ index, title, icon, linkurl }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <a href={linkurl} target="_blank">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </a>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        "I'm a full-stack developer with a Bachelors of Science in Computer
        Science from X University. Passionate about crafting exceptional user
        experiences, I thrive on solving complex problems and creating
        innovative web applications. From front-end design to back-end
        functionality, I enjoy every aspect of the development process. My
        dedication to continuous learning keeps me up-to-date with the latest
        technologies. Whether collaborating in a team or working independently,
        I approach every project with enthusiasm and attention to detail."
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {links.map((link, index) => (
          <LinkCard key={link.title} index={index} {...link} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
