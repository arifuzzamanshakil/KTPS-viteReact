import React, { useEffect, useState } from 'react';
import { medicine4 } from '../../assets/img';
import data from '../../data';

const AccordionBox = () => {

   const [trans, setTrans] = useState("");
   const lang = localStorage.getItem('lang');

   useEffect(() => {
      setTrans(lang);
   }, [lang]);


   return (
      <div className='pt-5'>
         <div className='flex flex-col gap-5'>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-8 justify-between'>
               <div className='flex items-center bg-[#FFFFFF1A] xl:w-[470px] lg:w-[400px] rounded-md h-[70px] lg:pr-5'>
                  <img src={medicine4} alt="" />
                  <p className='md:text-xl text-lg text-left -ml-5 text-white font-Inter font-normal drop-shadow-8xl'>{data && data.mediName1[`${trans}`]}</p>
               </div>

               <div className='flex items-center bg-[#FFFFFF1A] xl:w-[470px] lg:w-[400px] rounded-md h-[70px] lg:pr-5'>
                  <img src={medicine4} alt="" />
                  <p className='md:text-xl text-lg text-left -ml-5 text-white font-Inter font-normal drop-shadow-8xl'>{data && data.mediName2[`${trans}`]}</p>
               </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-5 lg:gap-8 justify-between'>
               <div className='flex items-center bg-[#FFFFFF1A] xl:w-[470px] lg:w-[400px] rounded-md h-[70px] lg:pr-5'>
                  <img src={medicine4} alt="" />
                  <p className='md:text-xl text-lg text-left -ml-5 text-white font-Inter font-normal drop-shadow-8xl'>{data && data.mediName3[`${trans}`]}</p>
               </div>

               <div className='flex items-center bg-[#FFFFFF1A] xl:w-[470px] lg:w-[400px] rounded-md h-[70px] lg:pr-5'>
                  <img src={medicine4} alt="" />
                  <p className='md:text-xl text-lg text-left -ml-5 text-white font-Inter font-normal drop-shadow-8xl'>{data && data.mediName4[`${trans}`]}</p>
               </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-5 lg:gap-8 justify-between'>
               <div className='flex items-center bg-[#FFFFFF1A] xl:w-[470px] lg:w-[400px] rounded-md h-[70px] lg:pr-5'>
                  <img src={medicine4} alt="" />
                  <p className='md:text-xl text-lg text-left -ml-5 text-white font-Inter font-normal drop-shadow-8xl'>{data && data.mediName5[`${trans}`]}</p>
               </div>

               <div className='flex items-center bg-[#FFFFFF1A] xl:w-[470px] lg:w-[400px] rounded-md h-[70px] lg:pr-5'>
                  <img src={medicine4} alt="" />
                  <p className='md:text-xl text-lg text-left -ml-5 text-white font-Inter font-normal drop-shadow-8xl'>{data && data.mediName6[`${trans}`]}</p>
               </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-5 lg:gap-8 justify-between'>
               <div className='flex items-center bg-[#FFFFFF1A] xl:w-[470px] lg:w-[400px] rounded-md h-[130px] pr-2 md:pr-5 md:h-[100px] lg:pr-5'>
                  <img src={medicine4} alt="" />
                  <p className='md:text-xl text-lg text-left  -ml-5 text-white font-Inter font-normal drop-shadow-8xl'>{data && data.mediName7[`${trans}`]}</p>
               </div>

               <div className='flex items-center bg-[#FFFFFF1A] xl:w-[470px] lg:w-[400px] rounded-md h-[130px] pr-2 md:pr-5 md:h-[100px] lg:pr-5'>
                  <img src={medicine4} alt="" />
                  <p className='md:text-xl text-lg text-left -ml-5 text-white font-Inter font-normal drop-shadow-8xl'>{data && data.mediName8[`${trans}`]}</p>
               </div>
            </div>

            <p className='text-lg pt-5 text-white font-Inter font-normal drop-shadow-8xl'>{data && data.mediName9[`${trans}`]}</p>

         </div>
      </div>
   );
};


export default AccordionBox;