import React, { useEffect, useState } from 'react';
import { arrow, headerImg } from '../assets/img';
import data from '../data';


const Header = (props) => {
  const [trans, setTrans] = useState("");
  const lang = localStorage.getItem('lang');
  useEffect(() => {
    setTrans(lang);
  }, [lang]);

  return (

    <div className=" w-full heroSec bg-cover bg-no-repeat bg-center ">
      <div className=' h-screen justify-center flex items-center py-20 lg:pt-10 mx-auto'>

        <div className='text-center z-10 pt-2'>
          <div className="justify-center flex mx-auto sm:pt-14">
            <div className='triangle absolute bg-no-repeat bg-center w-[480px] h-[350px]  lg:h-[570px] lg:w-[785px] md:mt-16 lg:mt-16 md:w-[660px] md:h-[480px] sm:w-[590px] sm:h-[430px] bg-cover mx-auto md:px-0'>
            </div>
          </div>

          <div className='justify-center flex items-center'>
            <img src={data && data.headerImg[`${trans}`]} alt="You Are On The List" className='w-[335px] sm:w-auto lg:w-[1150px] h-auto -mt-8 md:mt-20 sm:pt-16 md:pt-0'/>
          </div>
          <div className="flex justify-center pt-6 pb-4 md:pb-10 lg:pb-16 md:pt-10 lg:pt-14">
            <p className="text-base md:text-xl md:leading-[34px] text-white text-center font-Inter font-medium lg:w-[750px] md:w-[550px] sm:w-[440px] w-[335px] drop-shadow-9xl">{data && data.headerTitle[`${trans}`]} </p>
          </div>

          <div className="w-[200px] mx-auto pt-4 md:pt-0 sm:pt-6">
            <a href="#details" className="text-lg text-[#97E4FC] hover:text-[#C9F2FF] font-normal font-Inter drop-shadow-11xl cursor-pointer">{data && data.headerBtn[`${trans}`]} <img src={arrow} alt='arrow' className="w-auto duration-[10s] transition-all pt-6 animate-bounce m-auto"/> </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;