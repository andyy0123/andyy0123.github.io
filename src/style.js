const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',

  heading2: 'font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full',
  paragraph: 'font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',
  padding: 'sm:px-16 px-6 sm:py-12 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',

  logoSize: 'w-[36px] h-[36px] ss:w-[48px] ss:h-[48px] md:w-[64px] md:h-[64px]',

  bgSettings: 'absolute top-0 right-0 left-0 bottom-0 -z-40 bg-center bg-cover brightness-50',
  reactSlickVertical: 'p-5',
  reactSlickSettings: 'w-80',

  slickArrow: 'block absolute w-24px h-24px p-0 cursor-pointer top-[calc(50%_-_24px)]',
  slickImg: 'max-h-80 mx-auto',
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,

  slickContainer: `px-8 ss:px-12 h-[50vh] flex items-center`,
  navbarContainer: `absolute top-0 w-full`,
};

export default styles;
