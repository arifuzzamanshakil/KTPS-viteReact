import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { bottle, medicine3, people } from '../../assets/img';
import data from '../../data';

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,

    fade: true,
  };

  const [trans, setTrans] = useState("");
  const lang = localStorage.getItem('lang');
  useEffect(() => {
    setTrans(lang);
  }, [lang]);

  return (
    <>
      <Slider {...settings}>
        <div>
          <div className='flex bg-[#B158BF1A] border border-[#E5AEEE] rounded-[14px] gap-10 items-center py-[50px] px-[120px] text-white h-[320px]'>
            <img src={medicine3} alt="" className="w-[150px]" />
            <p className='text-lg font-Inter font-normal paraShadows'>{data && data.carousel1Title[`${trans}`]}</p>
          </div>
        </div>
        <div>
          <div className='flex bg-[#B158BF1A] border border-[#E5AEEE] rounded-[14px] gap-10 items-center py-[50px] px-[120px] text-white h-[320px]'>
            <img src={bottle} alt="" className="w-[150px]" />
            <p className='text-lg font-Inter font-normal paraShadows'>{data && data.carousel2Title[`${trans}`]}</p>
          </div>
        </div>
        <div>
          <div className='flex bg-[#B158BF1A] border border-[#E5AEEE] rounded-[14px] gap-10 items-center py-[50px] px-[120px] text-white h-[320px]'>
            <img src={people} alt="" className="w-[150px]" />
            <p className='text-lg font-Inter font-normal paraShadows'>{data && data.carousel3Title[`${trans}`]}</p>
          </div>
        </div>

      </Slider>


    </>
  );
};

export default Carousel;