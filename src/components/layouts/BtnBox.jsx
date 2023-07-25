import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import data from "../../data";

function BtnBox() {
   const [trans, setTrans] = useState("");
   const lang = localStorage.getItem('lang');
   useEffect(() => {
      setTrans(lang);
   }, [lang]);

 return (
  <div>

     <div className="flex justify-between items-center lg:items-start flex-col lg:flex-row gap-8 mx-auto">

      <div className="lg:w-[518px] lg:h-[285px] md:w-[650px] border border-[#E5AEEE] rounded-[14px] py-8 md:py-10 px-9 xl:px-[50px] bg-[#B158BF1A]">
       <h2 className='md:text-5xl text-[28px] font-Rajdhani font-semibold tracking-[2.8px] md:tracking-[4.8px] headingShadow text-white text-center'>{data && data.boxTitle[`${trans}`]}</h2>

       <div className="flex flex-wrap justify-center md:px-4 pt-5 gap-6 ">
        <a href="#testStrips" className="border border-[#97E4FC] rounded-lg bg-[#0C787CCC] hover:bg-[#99E6EB] hover:text-[#151818] py-[10px] md:py-[14px] px-6 text-lg md:text-xl font-semibold font-Inter text-white "> {data && data.boxBtn1[`${trans}`]} </a>

        <a href="#nalox" className="border border-[#97E4FC] rounded-lg bg-[#0C787CCC] hover:bg-[#99E6EB] hover:text-[#151818] py-[10px] md:py-[14px] px-6 text-lg md:text-xl font-semibold font-Inter text-white "> {data && data.boxBtn2[`${trans}`]} </a>

        <a href="#nonuser" className="border border-[#97E4FC] rounded-lg bg-[#0C787CCC] hover:bg-[#99E6EB] hover:text-[#151818] py-[10px] md:py-[14px] px-6 text-lg md:text-xl font-semibold font-Inter text-white "> {data && data.boxBtn3[`${trans}`]} </a>
       </div>

      </div>

      <div className="lg:w-[518px] lg:h-[285px] md:w-[650px] border border-[#E5AEEE] rounded-[14px] py-8 md:py-10 px-4 xl:px-[35px] bg-[#B158BF1A]">
       <h2 className='md:text-5xl text-[28px] font-Rajdhani font-semibold tracking-[2.8px] md:tracking-[4.8px] headingShadow text-white m-auto text-center'>{data && data.boxTitle2[`${trans}`]}</h2>
       <p className='text-base md:text-lg text-center text-white font-Inter font-normal drop-shadow-9xl pt-5'> {data && data.boxPara[`${trans}`]} </p>

       <div className="flex flex-wrap justify-center px-4 pt-8 gap-7 ">
        <a href="#" className="border border-[#97E4FC] rounded-lg bg-[#0C787CCC] hover:bg-[#99E6EB] hover:text-[#151818] py-[10px] px-6 text-base font-semibold font-Inter text-white flex items-center gap-2"> <FaFacebookF /> {data && data.boxBtn4[`${trans}`]} </a>

        <a href="#" className="border border-[#97E4FC] rounded-lg bg-[#0C787CCC] hover:bg-[#99E6EB] hover:text-[#151818] py-[10px] px-6 text-base font-semibold font-Inter text-white flex items-center gap-2"> <FaInstagram /> {data && data.boxBtn4[`${trans}`]} </a>

       </div>


      </div>
     </div>
  
  </div>
 );
};

export default BtnBox;