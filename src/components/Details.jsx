import React, { useEffect, useState } from 'react'
import { check, medicine1, medicine2, milk } from '../assets/img';
import data from "../data";
import Carousel from './layouts/Carousel';


const Details = () => {
  const [trans, setTrans] = useState("");
  const lang = localStorage.getItem('lang');
  useEffect(() => {
    setTrans(lang);
  }, [lang]);

  return (

    <div className="pt-14 md:pt-24 w-[335px] sm:w-[500px] md:w-[650px] lg:w-[1000px] xl:w-[1150px] mx-auto">

      <h2 className='md:text-5xl text-[28px] font-Rajdhani font-semibold tracking-[4.8px] headingShadow text-white m-auto text-center pt-10'>{data && data.detailsPageTitle[`${trans}`]}</h2>

      <div className='lg:justify-between md:justify-center flex flex-wrap gap-10 lg:gap-20 mx-auto items-start md:item-center py-0  md:pt-6 lg:w-[1000px] xl:w-[1150px] md:w-[650px]'>

        <div className="card xl:w-[510px] lg:w-[440px] md:w-[650px] gap-0 flex flex-col">
          <div className="card_head flex flex-col md:flex-row items-center lg:justify-start md:justify-center gap-0">
            <img src={medicine1} alt="" className='w-28 h-28 md:-ml-8 -mb-3 md:mb-0' />
            <h3 className=' font-Proxima md:text-2xl text-xl font-normal lg:font-bold text-[#FFC1E5] detailsShadow text-center' >{data && data.detailsHead1title[`${trans}`]}</h3>
          </div>
          <p className=' font-Inter font-normal md:text-lg text-base lg:text-left text-center  text-white drop-shadow-7xl leading-7 md:leading-10'>{data && data.detailsHead1des[`${trans}`]}</p>
        </div>

        <div className="card xl:w-[510px] lg:w-[440px] md:w-[650px] gap-0 flex flex-col">
          <div className="card_head flex flex-col md:flex-row items-center lg:justify-start md:justify-center gap-0">
            <img src={medicine2} alt="" className='w-28 h-28 md:-ml-8 -mb-3 md:mb-0' />
            <h3 className=' font-Proxima md:text-2xl text-xl font-normal lg:font-bold text-[#FFC1E5] detailsShadow text-center' >{data && data.detailsHead2title[`${trans}`]}</h3>
          </div>
          <p className=' font-Inter font-normal md:text-lg text-base lg:text-left text-center  text-white drop-shadow-7xl leading-7 md:leading-10'>{data && data.detailsHead2des[`${trans}`]}</p>
        </div>

        <div className="card xl:w-[510px] lg:w-[440px] md:w-[650px] gap-0 flex flex-col">
          <div className="card_head flex flex-col md:flex-row items-center lg:justify-start md:justify-center gap-0">
            <img src={check} alt="" className='w-28 h-28 md:-ml-8 -mb-3 md:mb-0' />
            <h3 className=' font-Proxima md:text-2xl text-xl font-normal lg:font-bold text-[#FFC1E5] detailsShadow text-center' > {data && data.detailsHead3title[`${trans}`]} </h3>
          </div>
          <p className=' font-Inter font-normal md:text-lg text-base lg:text-left text-center  text-white drop-shadow-7xl leading-7 md:leading-10'> {data && data.detailsHead3des[`${trans}`]} </p>
        </div>

        <div className="card xl:w-[510px] lg:w-[440px] md:w-[650px] gap-0 flex flex-col">
          <div className="card_head flex flex-col md:flex-row items-center lg:justify-start md:justify-center gap-0">
            <img src={milk} alt="" className='w-28 h-28 md:-ml-[25px] -mb-3 md:mb-0' />
            <h3 className=' font-Proxima md:text-2xl text-xl font-normal lg:font-bold text-[#FFC1E5] detailsShadow md:text-left text-center' >{data && data.detailsHead4title[`${trans}`]}</h3>
          </div>
          <p className='font-Inter font-normal md:text-lg text-base lg:text-left text-center  text-white drop-shadow-7xl leading-7 md:leading-10'>{data && data.detailsHead4des[`${trans}`]} </p>
        </div>
        <div className="w-full mx-auto hidden lg:block xl:w-[1140px] mt-20">
          <div className="heading">
            <h2 className='text-5xl font-Rajdhani font-semibold tracking-[4.8px] headingShadow text-white m-auto text-center mb-10'>{data && data.detailssecTitle[`${trans}`]}</h2>
          </div>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Details;