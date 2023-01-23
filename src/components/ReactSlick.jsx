import React from 'react';
import Slider from 'react-slick';

import { photosArr } from '../assets';
import { ORIENTATION } from '../constants';
import { SlickArrow } from './SlickArrow';
import styles from '../style';

const ReactSlick = () => {
  const randomOrientation = Math.floor(Math.random() * 10) % 2 ? ORIENTATION.horizontal : ORIENTATION.vertical;
  const isHorizontal = randomOrientation === ORIENTATION.horizontal;
  const settings = {
    dots: false,
    className: isHorizontal ? 'px-8' : 'px-4',
    infinite: true,
    speed: 500,
    slidesToShow: isHorizontal ? 3 : 4,
    slidesToScroll: isHorizontal ? 3 : 4,
    initialSlide: Math.floor(Math.random() * photosArr.filter(photo => photo.orientation === randomOrientation).length),
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: isHorizontal ? 2 : 3,
          slidesToScroll: isHorizontal ? 2 : 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: isHorizontal ? 1 : 2,
          slidesToScroll: isHorizontal ? 1 : 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: (
      <SlickArrow
        right={true}
        horizontal={isHorizontal}
      />
    ),
    prevArrow: (
      <SlickArrow
        right={false}
        horizontal={isHorizontal}
      />
    ),
  };
  return (
    <div className='block h-full'>
      <Slider {...settings}>
        {photosArr
          .filter(photo => photo.orientation === randomOrientation)
          .map((photo, index) => (
            <div
              key={index}
              className={`${randomOrientation ? styles.reactSlickVertical : ''}`}>
              <img
                src={`${photo.src}`}
                alt={`${photo.description}`}
                className={`${styles.slickImg}`}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default ReactSlick;
