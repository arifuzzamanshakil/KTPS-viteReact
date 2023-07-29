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
         <div className='footerBg'>
            <div className="py-2">
               <h2 className="w-auto mx-auto md:w-auto gap-2 flex flex-col justify-center lg:flex-row text-sm md:text-lg font-Proxima font-bold text-center text-white tracking-[1.4px] md:tracking-[1.8px]"><span>{data && data.footer[`${trans}`]} <a href="tel:911" className='text-white hover:text-[#FF5AC0]'>{data && data.topnavCall[`${trans}`]}</a > {data && data.footerem[`${trans}`]}</span><a href="#" className="underline hover:text-[#97E4FC] hover:paraShadows detailsShadow text-[#FFC1E5]">{data && data.footerLink[`${trans}`]}</a> </h2>
            </div>
         </div>
      </>
   );
};

export default Footer;