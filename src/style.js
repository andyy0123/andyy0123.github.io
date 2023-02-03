const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',

  heading2: 'font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full',
  paragraph: 'font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',
  flexEnd: 'flex justify-center items-end',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'py-[20vh]',
  padding: 'sm:px-16 px-6 sm:py-12 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',

  logoSize: 'w-[36px] h-[36px] ss:w-[48px] ss:h-[48px] md:w-[64px] md:h-[64px]',

  bgSettings: 'absolute top-0 right-0 left-0 bottom-0 -z-40 bg-center bg-cover brightness-60 opacity-60',
  reactSlickVertical: 'p-5',
  reactSlickSettings: 'w-80',

  slickArrow: 'block absolute w-24px h-24px p-0 cursor-pointer top-[calc(50%_-_24px)]',
  slickImg: 'max-h-80 mx-auto',

  textInput:
    'bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-4 p-2.5',
  selectList:
    'block my-4 py-2.5 px-2 w-full text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer',
  question: 'block mb-2 text-base font-medium text-gray-900',
  textarea:
    'block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500',
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,

  slickContainer: `px-8 ss:px-12 h-[480px] flex items-center justify-center`,
  navbarContainer: `absolute top-0 w-full`,
};

export default styles;
