import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '../style';

library.add(faChevronRight, faChevronLeft);

export const SlickArrow = props => {
  const { style, onClick, right, horizontal } = props;
  return (
    <div
      className={`${right ? 'left-[calc(100%_-_24px)]' : 'right-[calc(100%_-_24px)]'} ${styles.slickArrow}`}
      style={{ ...style }}
      onClick={onClick}>
      <div
        className={`${styles.flexCenter} w-[24px] h-[24px] ss:w-[40px] ss:h-[40px] lg:w-[52px] lg:h-[52px] rounded-full bg-btnGray hover:bg-btnHoverGray`}>
        <FontAwesomeIcon
          icon={`fa-solid ${right ? 'fa-chevron-right' : 'fa-chevron-left'} fa-xs ss:fa-sm lg:fa-lg`}
          color={'white'}
        />
      </div>
    </div>
  );
};
