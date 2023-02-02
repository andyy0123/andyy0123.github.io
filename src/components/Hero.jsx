import React from 'react';

import styles from '../style.js';

const Hero = () => (
  <section
    id='Hero'
    className={`flex flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 mb-2'>
        <div className='flex flex-row items-center justify-between w-full'>
          <h1 className='flex-1 font-poppins font-Solitreo ss:text-[72px] text-[52px] text-gray-50 ss:leading-[100px] leading-[75px]'>
            Andy & Titi's Wedding
          </h1>
        </div>
      </div>
    </div>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-10`}>
    <a
            href='#form'
            className='flex items-center justify-center px-10 text-black bg-white rounded-3xl h-10 w-fit py-[6px]'>
            填寫婚禮表單
          </a>
    </div>
  </section>
);

export default Hero;
