import React from 'react';

import styles from '../style.js';

const Hero = () => (
  <section
    id='Hero'
    className={`flex flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 pl-20`}>
      <div className='hidden sm:block'>
      <h1 className='font-poppins font-Solitreo ss:text-[64px] text-[52px] text-gray-50 ss:leading-[100px] leading-[75px]'>
        Andy & Titi's Wedding
      </h1>
      </div>
      <div className='block sm:hidden'>
      <h1 className='font-poppins font-Solitreo ss:text-[72px] text-[52px] text-gray-50 ss:leading-[100px] leading-[75px]'>
        Andy & Titi's
      </h1>
      <h1 className='font-poppins font-Solitreo ss:text-[72px] text-[52px] text-gray-50 ss:leading-[100px] leading-[75px] pl-32'>
        Wedding
      </h1>
      </div>
    </div>
    <div className={`flex-1 flex-col xl:px-0 sm:px-16 pl-20 pt-4`}>
      <a
        href='#form'
        className='flex items-center justify-center px-10 text-black bg-white rounded-3xl h-10 w-fit py-[6px]'>
        填寫婚禮表單
      </a>
    </div>
  </section>
);

export default Hero;
