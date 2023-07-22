import React, { useEffect, useState } from 'react';

import { dash, dash2, dash3, dash4, dash5, unpack } from '../assets/img';
import data from '../data';
import AccordionBox from './layouts/AccordionBox';
import AccordionSecBox from './layouts/AccordionsecBox';


const Unpack = () => {
 const [trans, setTrans] = useState("");
 const lang = localStorage.getItem('lang');

 useEffect(() => {
  setTrans(lang);
 }, [lang]);


 return (
  <>
   <div className="pt-16 w-[335px] sm:w-[500px] md:w-[650px] xl:w-[1150px] lg:w-[1020px] mx-auto ">
    <div>
     <img src={data && data.unpackImg[`${trans}`]} alt="Lets unpack Your Party checklist" className="mx-auto" />
    </div>
    <div id='nalox' className='flex-col flex lg:gap-[60px] gap-3'>
     <div className="flex gap-8 flex-col items-center lg:flex-row lg:items-baseline">
      <div className=" absolute xl:mt-[100px] lg:mt-[108px] ml-7 hidden lg:block"><img src={dash} alt="" /></div>
      <div>
       <h2 className="border border-[#E5AEEE] rounded-[50%] w-[61px] h-[61px] text-white text-[40px] text-center font-Rajdhani font-semibold drop-shadow-10xl mt-8">1</h2>
      </div>
      <div className="lg:w-[1060px] border border-[#E5AEEE] bg-[#B158BF1A] rounded-[14px] p-5 lg:p-10 text-center lg:text-left">
       <h2 className="lg:text-[32px] text-2xl font-Rajdhani font-semibold tracking-[3.2px] drop-shadow-5xl text-white ">{data && data.unpackTitle1[`${trans}`]}</h2>
       <p className='lg:text-lg text-base text-white font-Inter md:font-medium font-normal drop-shadow-9xl pt-5 '>{data && data.unpackDes1[`${trans}`]}</p>
       <p className='lg:text-lg text-base text-white font-Inter font-normal md:font-medium drop-shadow-9xl pt-4 '>{data && data.unpackDes2[`${trans}`]} <a href="#" className="text-[#97E4FC] hover:text-white  underline"> {data && data.unpackDes3[`${trans}`]}</a> {data && data.unpackDes4[`${trans}`]}</p>
      </div>
     </div>

     <div id='nonuser' className="flex gap-8 flex-col items-center lg:flex-row lg:items-baseline">
      <div className=" absolute xl:mt-[105px]  lg:mt-[108px] ml-7 hidden lg:block"><img src={dash2} alt="" /></div>
      <div>
       <h2 className="border border-[#E5AEEE] rounded-[50%] w-[61px] h-[61px] text-white text-[40px] text-center font-Rajdhani font-semibold drop-shadow-10xl mt-8">2</h2>
      </div>
      <div className="lg:w-[1060px] border border-[#E5AEEE] bg-[#B158BF1A] rounded-[14px] p-5 lg:p-10 text-center lg:text-left">
       <h2 className="lg:text-[32px] text-2xl font-Rajdhani font-semibold tracking-[3.2px] drop-shadow-5xl text-white">{data && data.unpackTitle2[`${trans}`]}</h2>
       <p className='text-lg  text-white font-Inter font-normal md:font-medium drop-shadow-9xl pt-5 '>{data && data.unpackDes5[`${trans}`]}</p>
      </div>
     </div>

     <section id='testStrips' className='h-full' >
      <div className="flex gap-8  flex-col items-center lg:flex-row lg:items-baseline" >
       <div className=" absolute xl:mt-[105px] lg:mt-[110px] ml-7 hidden lg:block"><img src={dash3} alt="" /></div>
       <div>
        <h2 className="border border-[#E5AEEE] rounded-[50%] w-[61px] h-[61px] text-white text-[40px] text-center font-Rajdhani font-semibold drop-shadow-10xl mt-8">3</h2>
       </div>
       <div className="lg:w-[1060px] border  border-[#E5AEEE] bg-[#B158BF1A] rounded-[14px] p-5 lg:p-10 text-center lg:text-left">
        <h2 className="lg:text-[32px] text-2xl font-Rajdhani font-semibold tracking-[3.2px] drop-shadow-5xl text-white ">{data && data.unpackTitle3[`${trans}`]}</h2>
        <p className='text-lg  text-white font-Inter font-normal md:font-medium drop-shadow-9xl pt-5 '>{data && data.unpackDes6[`${trans}`]} <a href="#" className="text-[#97E4FC] hover:text-white underline">{data && data.unpackDes7[`${trans}`]}</a> {data && data.unpackDes8[`${trans}`]} <a href="#" className="text-[#97E4FC] hover:text-white underline">{data && data.unpackDes9[`${trans}`]} </a> {data && data.unpackDes10[`${trans}`]} <a href="#" className="text-[#97E4FC] hover:text-white underline">{data && data.unpackDes11[`${trans}`]} </a>  {data && data.unpackDes12[`${trans}`]}  <a href="#" className="text-[#97E4FC] hover:text-white underline">{data && data.unpackDes13[`${trans}`]} </a> </p>
       </div>
      </div>
     </section>

     <div className="flex gap-8 flex-col items-center lg:flex-row lg:items-baseline">
      <div className=" absolute mt-[105px] ml-7 hidden lg:block"><img src={dash4} alt="" /></div>
      <div>
       <h2 className="border border-[#E5AEEE] rounded-[50%] w-[61px] h-[61px] text-white text-[40px] text-center font-Rajdhani font-semibold drop-shadow-10xl mt-8">4</h2>
      </div>
      <div className="border border-[#E5AEEE] bg-[#B158BF1A] rounded-[14px] p-5 lg:p-10 text-center lg:text-left">
       <h2 className="lg:text-[32px] text-2xl font-Rajdhani font-semibold tracking-[3.2px] drop-shadow-5xl text-white">{data && data.unpackTitle4[`${trans}`]}</h2>

       <div id="overdose">
        <AccordionBox />
       </div>

      </div>
     </div>

     <div className="flex gap-8 flex-col items-center lg:flex-row lg:items-baseline">
      <div className=" absolute xl:mt-[105px] lg:mt-[115px] ml-7 hidden lg:block"><img src={dash5} alt="" /></div>
      <div>
       <h2 className="border border-[#E5AEEE] rounded-[50%] w-[61px] h-[61px] text-[#FFf] text-[40px] text-center font-Rajdhani font-semibold drop-shadow-10xl mt-8">5</h2>
      </div>
      <div className="lg:w-[1060px] border border-[#E5AEEE] bg-[#B158BF1A] rounded-[14px] p-5 lg:p-10 text-center lg:text-left">
       <h2 className="lg:text-[32px] text-2xl font-Rajdhani font-semibold tracking-[3.2px] drop-shadow-5xl text-white">{data && data.unpackTitle5[`${trans}`]}</h2>

       <div >
        <AccordionSecBox />
       </div>

      </div>
     </div>

     <div className="flex gap-8 flex-col items-center lg:flex-row lg:items-baseline">

      <div id='shopping'>
       <h2 className="border border-[#E5AEEE] rounded-[50%] w-[61px] h-[61px] text-[#FFf] text-[40px] text-center font-Rajdhani font-semibold drop-shadow-10xl mt-8">6</h2>
      </div>
      <div className="lg:w-[1060px] border border-[#E5AEEE] bg-[#B158BF1A] rounded-[14px] p-5 lg:p-10 text-center lg:text-left">
       <h2 className="lg:text-[32px] text-2xl font-Rajdhani font-semibold tracking-[3.2px] drop-shadow-5xl text-white">{data && data.unpackTitle6[`${trans}`]}</h2>
       <p className='text-lg  text-white font-Inter font-normal drop-shadow-9xl pt-5 '>{data && data.unpackDes6[`${trans}`]} <a href="#" className="text-[#97E4FC] hover:text-white underline">{data && data.unpackDes7[`${trans}`]}</a> {data && data.unpackDes14[`${trans}`]}</p>

      </div>
     </div>
    </div>
    <div className="pt-24 pb-8">
    <p className='md:w-auto mx-auto text-base text-center text-white font-Inter font-medium drop-shadow-9xl'> {data && data.power[`${trans}`]} </p>
   </div>
   </div>
  </>
 );
};


export default Unpack;