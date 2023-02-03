import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { info, info_lg } from '../assets';

library.add(faCalendar, faLocationDot);

const Info = () => {
  return (
    // <div className='w-full h-[75vh] ss:h-[50vh] md-[40vh] flex items-center justify-center px-8 '>
    //   <div className='flex items-center justify-center h-full w-full px-8 py-12 bg-white'>
    //     {/* <div className='grid grid-cols-3 gap-4 w-full h-full'>
    //       <div className='col-span-full text-center'>子冊 ＆ 鄭媞</div>
    //       <div className='col-span-full text-center'>誠摯地邀請您與家人</div>
    //       <div className='col-span-full text-center mb-4'>參加我們的婚禮</div>
    //       <div className='col-span-1 row-span-2 col-start-1 flex items-center justify-end px-4 pb-6'>
    //         <FontAwesomeIcon
    //           icon='fa-solid fa-calendar fa-2xl'
    //           color='black'
    //           title='日期'
    //         />
    //       </div>
    //       <div className='col-span-2 col-start-2'>
    //         <span className=''>國曆 112 年 4 月 30 日 </span>
    //         <span className='text-sm'>(中午 12:00 準時開桌)</span>
    //       </div>
    //       <div className='col-span-2 col-start-2 mb-4'>農曆 112 年 3 月 11 日</div>
    //       <div className='col-span-1 row-span-2 col-start-1 flex items-center justify-end px-4 pb-6'>
    //         <FontAwesomeIcon
    //           icon='fa-solid fa-location-dot'
    //           color='black'
    //           title='地點'
    //         />
    //       </div>
    //       <div className='col-span-2 col-start-2'>大中華國際美食館</div>
    //       <div className='col-span-2 col-start-2'>彰化縣和美鎮彰美路四段306號</div>
    //     </div> */}
    //     <img src={info} />
    //   </div>
    // </div>
    <div>
      <div className='block md:hidden w-full'>
        <div className='w-full flex items-center justify-center'>
          <img src={info} />
        </div>
      </div>
      <div className='hidden md:block w-full'>
        <div className='w-full flex items-center justify-center'>
          <img src={info_lg} />
        </div>
      </div>
    </div>
  );
};

export default Info;
