import React from 'react';

import styles from '../style.js';

const Hero = () => (
  <section
    id='Hero'
    className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row itemms-center py-[6px] px-4 mb-2'>
        <div className='flex flex-row items-center justify-between w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gray-50 ss:leading-[100px] leading-[75px]'>
            I AM THE TITLE
          </h1>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
