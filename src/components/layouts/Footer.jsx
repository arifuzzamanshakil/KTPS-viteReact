import React, { useEffect, useState } from 'react';
import data from '../../data';

const Footer = () => {
   const [trans, setTrans] = useState();
   const lang = localStorage.getItem('lang');

   useEffect(() => {
      setTrans(lang);
   }, [lang]);
   
   return (
      <>
         <div className=''>
            <div className="power pt-36 pb-8">
               <p className='w-[335px] md:w-auto mx-auto text-base text-center text-white font-Inter font-medium drop-shadow-9xl'> {data && data.power[`${trans}`]} </p>
            </div>
            <div className="footerBg py-2">
               <h2 className="w-auto mx-auto md:w-auto gap-2 flex flex-col justify-center lg:flex-row text-sm md:text-lg font-Proxima font-bold text-center text-white tracking-[1.4px] md:tracking-[1.8px]">{data && data.footer[`${trans}`]} <a href="#" className="underline text-[#FFC1E5] ">{data && data.footerLink[`${trans}`]} </a></h2>
            </div>
         </div>
      </>
   );
};

export default Footer;