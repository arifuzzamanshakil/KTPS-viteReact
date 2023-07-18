import React, { useEffect, useState } from 'react';
import data from '../data';
import Checkbox from './layouts/Checkbox';
import BtnBox from './layouts/BtnBox';

const Checklist = () => {
  const [trans, setTrans] = useState("");
  const lang = localStorage.getItem('lang');
  useEffect(() => {
    setTrans(lang);
  }, [lang]);

  return (
    <div className="h-full bg-cover bg-no-repeat bg-center pt-14 lg:pt-24 w-[335px] sm:w-[500px] md:w-[770px] lg:w-full  mx-auto">

      <div className="heading">
        <h2 className='md:text-5xl text-[28px] font-Rajdhani font-semibold tracking-[4.8px] drop-shadow-5xl text-white m-auto text-center pt-10 md:pt-24'>{data && data.checkPageTitle[`${trans}`]}</h2>
        
        <p className='md:text-xl text-base text-center text-white font-Inter font-medium drop-shadow-9xl pt-5 w-auto md:w-full mx-auto'>{data && data.CheckSubTitle[`${trans}`]}</p>
      </div>
      
      <div className='mx-auto xl:w-[1150px] lg:w-[1020px] py-20'>
        <Checkbox />
      </div>
      
      <div className='mx-auto xl:w-[1150px] lg:w-[1020px] py-10'>
        <BtnBox />
      </div>

    </div>
  );
};

export default Checklist;