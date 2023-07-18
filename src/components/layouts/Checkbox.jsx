import React, { useEffect, useState } from 'react';
import data from '../../data';

const Checkbox = () => {

   const [trans, setTrans] = useState("");
   const lang = localStorage.getItem('lang');
   useEffect(() => {
      setTrans(lang);
   }, [lang]);

   return (
      <>
         <div className='flex gap-12 flex-wrap mx-auto '>
            <div className="flex border border-[#E5AEEE] rounded-xl items-start lg:items-center sm:px-8 px-5 py-4 md:w-full xl:w-[550px] lg:w-[485px] gap-3 md:gap-5 lg:justify-center align-middle">
               <label className="checkbox mt-1 lg:mt-0">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
               </label>
               <p className=' font-Inter font-semibold md:text-xl text-base text-white drop-shadow-9xl'>{data && data.checkbox1[`${trans}`]}</p>
            </div>

            <div className="flex border border-[#E5AEEE] rounded-xl items-start lg:items-center sm:px-8 px-5 py-4 md:w-full xl:w-[550px] lg:w-[485px] gap-3 md:gap-5 lg:justify-center align-middle">
               <label className="checkbox mt-1 lg:mt-0">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
               </label>
               <p className=' font-Inter font-semibold md:text-xl text-base text-white drop-shadow-9xl'>{data && data.checkbox2[`${trans}`]}</p>
            </div>

            <div className="flex border border-[#E5AEEE] rounded-xl items-start lg:items-center sm:px-8 px-5 py-4 md:w-full xl:w-[550px] lg:w-[485px] gap-3 md:gap-5  lg:justify-center align-middle">
               <label className="checkbox mt-1 md:mt-0">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
               </label>
               <p className=' font-Inter font-semibold md:text-xl text-base text-white drop-shadow-9xl'>
               {data && data.checkbox3[`${trans}`]}
               </p>
            </div>

            <div className="flex border border-[#E5AEEE] rounded-xl items-start lg:items-center sm:px-8 px-5 py-4 md:w-full xl:w-[550px] lg:w-[485px] gap-3 md:gap-5 lg:justify-center align-middle">
               <label className="checkbox mt-1 md:mt-0">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
               </label>
               <p className=' font-Inter font-semibold md:text-xl text-base text-white drop-shadow-9xl'>
               {data && data.checkbox4[`${trans}`]}
               </p>
            </div>

            <div className="flex border border-[#E5AEEE] rounded-xl items-start lg:items-center sm:px-8 px-5 py-4 w-full gap-3 md:gap-5 md:justify-start justify-center align-middle ">
               <label className="checkbox mt-1 lg:mt-0">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
               </label>
               <p className=' font-Inter font-semibold md:text-xl text-base text-white drop-shadow-9xl'>
               {data && data.checkbox5[`${trans}`]}
               </p>
            </div>
         </div>
      </>
   );
};

export default Checkbox;