import React from 'react';

import Hero from './Hero';
import ReactSlick from './ReactSlick';

import styles, { layout } from '../style';

const Home = () => (
  <div>
    <div className={`bg-transparent ${styles.flexStart} w-full h-[100vh]`}>
      <div className={`${styles.boxWidth} mt-[30vh]`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-transparent ${layout.slickContainer} my-auto`}>
      <div className={`${styles.boxWidth}`}>
        <ReactSlick />
      </div>
    </div>

    <div className={`hidden lg:block bg-main-bg ${styles.bgSettings}`}>
      <img className='hidden w-full h-full' />
    </div>
    <div className={`block lg:hidden bg-main-bg-mobile ${styles.bgSettings}`}>
      <img className='hidden w-full h-full' />
    </div>
  </div>
);

export default Home;
