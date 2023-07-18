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
    
    <div className="h-full bg-cover bg-no-repeat bg-center pt-14 md:pt-24 w-[335px] sm:w-[500px] md:w-full mx-auto">
      
      <h2 className='md:text-5xl text-[28px] font-Rajdhani font-semibold tracking-[4.8px] drop-shadow-5xl text-white m-auto text-center pt-24'>{data && data.detailsPageTitle[`${trans}`]}</h2>

      <div className='justify-between flex flex-wrap gap-28 mx-auto items-start py-0 md:py-10 lg:w-[1020px] xl:w-[1150px] md:w-[770px]'>

        <div className="card xl:w-[500px] lg:w-[450px] md:w-[370px] gap-5 flex flex-col">
          <div className="card_head flex flex-col md:flex-row items-center gap-0">
            <img src={medicine1} alt="" className='w-28 h-28 md:-ml-8 -mb-3 md:mb-0' />
            <h3 className=' font-Proxima md:text-2xl text-xl font-normal lg:font-bold text-[#FFC1E5] drop-shadow-6xl text-center' >{data && data.detailsHead1title[`${trans}`]}</h3>
          </div>
          <p className=' font-Inter font-normal md:text-lg text-base md:text-left text-center  text-white drop-shadow-7xl leading-7 md:leading-10'>{data && data.detailsHead1des[`${trans}`]}</p>
        </div>

        <div className="card xl:w-[500px] lg:w-[450px] md:w-[370px] gap-5 flex flex-col">
          <div className="card_head flex flex-col md:flex-row items-center gap-0">
            <img src={medicine2} alt="" className='w-28 h-28 md:-ml-8 -mb-3 md:mb-0' />
            <h3 className=' font-Proxima md:text-2xl text-xl font-normal lg:font-bold text-[#FFC1E5] drop-shadow-6xl text-center' >{data && data.detailsHead2title[`${trans}`]}</h3>
          </div>
          <p className=' font-Inter font-normal md:text-lg text-base md:text-left text-center  text-white drop-shadow-7xl leading-7 md:leading-10'>{data && data.detailsHead2des[`${trans}`]}</p>
        </div>

        <div className="card xl:w-[500px] lg:w-[450px] md:w-[370px] gap-5 flex flex-col">
          <div className="card_head flex flex-col md:flex-row items-center gap-0">
            <img src={check} alt="" className='w-28 h-28 md:-ml-8 -mb-3 md:mb-0' />
            <h3 className=' font-Proxima md:text-2xl text-xl font-normal lg:font-bold text-[#FFC1E5] drop-shadow-6xl text-center' > {data && data.detailsHead3title[`${trans}`]} </h3>
          </div>
          <p className=' font-Inter font-normal md:text-lg text-base md:text-left text-center  text-white drop-shadow-7xl leading-7 md:leading-10'> {data && data.detailsHead3des[`${trans}`]} </p>
        </div>

        <div className="card xl:w-[500px] lg:w-[450px] md:w-[370px] gap-5 flex flex-col">
          <div className="card_head flex flex-col md:flex-row items-center gap-0">
            <img src={milk} alt="" className='w-28 h-28 md:-ml-[25px] -mb-3 md:mb-0' />
            <h3 className=' font-Proxima md:text-2xl text-xl font-normal lg:font-bold text-[#FFC1E5] drop-shadow-6xl md:text-left text-center' >{data && data.detailsHead4title[`${trans}`]}</h3>
          </div>
          <p className='font-Inter font-normal md:text-lg text-base md:text-left text-center  text-white drop-shadow-7xl leading-7 md:leading-10'>{data && data.detailsHead4des[`${trans}`]} </p>
        </div>
        <div className="w-full mx-auto hidden lg:block xl:w-[1140px] ">
          <div className="heading">
            <h2 className='text-5xl font-Rajdhani font-semibold tracking-[4.8px] drop-shadow-5xl text-white m-auto text-center pt-24 mb-10'>{data && data.detailssecTitle[`${trans}`]}</h2>
          </div>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Details;