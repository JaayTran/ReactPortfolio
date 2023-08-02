import React from 'react';
import { styles } from '../styles';

import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { languages, tools } from '../constants';

const Tech = () => {
  return (
    <div>
      <p className={`${styles.sectionSubText} text-center`}>What I use</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Technologies.</h2>
      <br />
      <p className={`${styles.sectionSubText} text-center`}>Languages</p>
      <br />
      <div className="flex flex-row flex-wrap justify-center gap-10 ">
        {languages.map((languages) => (
          <div className="w-28 h-28" key={languages.name}>
            <BallCanvas icon={languages.icon} />
            <div className={'text-center'}>{languages.name}</div>
          </div>
        ))}{' '}
      </div>
      <br />
      <br />
      <p className={`${styles.sectionSubText} text-center`}>
        Tools and Frameworks
      </p>
      <br />
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {tools.map((tools) => (
          <div className="w-28 h-28" key={tools.name}>
            <BallCanvas icon={tools.icon} />
            <div className={'text-center'}>{tools.name}</div>
          </div>
        ))}{' '}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, '');
