import React, { useEffect, useState } from 'react';
import data from '../../data';
import { clock, ensure, insert } from '../../assets/img';

const AccordionsecBox = () => {
   const [trans, setTrans] = useState();
   const lang = localStorage.getItem('lang');

   useEffect(() => {
      setTrans(lang);
   }, [lang]);

   return (
      <>
         <div className='pt-5'>
            <p className='text-lg text-white font-Inter font-normal drop-shadow-8xl'>{data && data.naloxPara1[`${trans}`]}</p>

            <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-8 xl:gap-12 pb-6 -mt-2">

               <div>
                  <img src={ensure} alt="" className='mx-auto' />
                  <p className='text-lg -mt-3 text-white text-center font-Inter font-normal drop-shadow-8xl'>{data && data.naloxPara2[`${trans}`]}</p>
               </div>
               <div>
                  <img src={insert} alt="" className='mx-auto' />
                  <p className='text-lg -mt-8 text-white text-center font-Inter font-normal drop-shadow-8xl'>{data && data.naloxPara3[`${trans}`]}</p>
               </div>
               <div>
                  <img src={clock} alt="" className='mx-auto' />
                  <p className='text-lg -mt-8 text-white text-center font-Inter font-normal drop-shadow-8xl'>{data && data.naloxPara4[`${trans}`]}</p>
               </div>

            </div>

            <p className='text-lg text-white font-Inter font-normal drop-shadow-8xl'>{data && data.naloxPara5[`${trans}`]} <a href="#" className="text-[#97E4FC] hover:text-white  underline"> {data && data.naloxPara6[`${trans}`]}</a></p>


         </div>
      </>
   );
};

export default AccordionsecBox;