import React, { useEffect, useRef, useState } from 'react';
import { closeButton, hamburger, logo } from '../../assets/img';
import data from '../../data';
import HamBug from './HamBug';
import Close from './Close';

export const Navbar = (props) => {
  const [lang, setLanguage] = useState("en");
  // navbarToggle functionality
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  props.onLangData(lang);

  const [trans, setTrans] = useState("");

  const language = localStorage.getItem('lang');

  useEffect(() => {
    setTrans(language);
  }, [language]);

  // Toggle function to switch between languages
  const toggleLanguage = () => {
    const newLang = lang === "en" ? "es" : "en";
    setLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <div className='px-0 fixed z-30'>
      <p className='text-sm h-[34px] text-center py-1 md:text-lg bg-[#130524] backdrop-blur-[13.5px] text-white tracking-[1.4px] md:tracking-[1.8px] w-screen pl-10'>IF THIS IS AN EMERGENCY - <strong>CALL 911</strong></p>
      <div className='items-center px-4 pt-6 md:bg-[#2B0756] bg-none md:pt-0'>
        <div className='flex items-center justify-between mx-auto xl:w-[1160px] lg:w-[1024px] sm:w-full lg:px-0 sm:px-8 xl:px-0 w-[340px]'>
          <div className='languageSec'>
            <div className="w-[35px] md:w-[110px] text-xl md:text-2xl lang font-normal text-[#FFC1E5] hover:text-white hover:ease-in duration-75 drop-shadow-6xl border-none overflow-hidden">
              <button onClick={toggleLanguage}> {/*Use toggleLanguage function here  */}
                {lang === "en" ? "Español" : "English"}
              </button>
            </div>
          </div>

          <a href='/' className='cursor-pointer w-[160px] md:w-[386px] md:h-[66px]'>
            <img src={data && data.logoImg[`${trans}`]} alt="Logo" />
          </a>

          <div className="header p-0">
            <nav ref={navRef} className="flex flex-col left-0 fixed -top-full h-full w-full items-center justify-center duration-[1s] gap-12 bg-no-repeat bg-right bg-cover md:bg-center">

              <div className="absolute top-5 md:top-14 px-0 md:px-0 flex items-center justify-between w-[335px] lg:w-[1150px]">
                <div className='text-white'>
                  <div className="w-[35px] md:w-[110px] text-xl md:text-2xl lang font-normal text-[#FFC1E5] overflow-hidden  hover:text-white hover:ease-in duration-75 drop-shadow-6xl hover:drop-shadow-6xl border-none">
                    <button onClick={toggleLanguage} > {/*Use toggleLanguage function here  */}
                      {lang === "en" ? "Español" : "English"}
                    </button>
                  </div>
                </div>

                {/* logo */}
                <a href='/' className='cursor-pointer w-[160px] h-[30px] md:w-[386px] md:h-[66px]'>
                  <img src={data && data.logoImg[`${trans}`]} alt="Logo" />
                </a>

                <button className="nav-btn nav-close-btn cursor-pointer" onClick={showNavbar} >
                  <Close/>  {/* close button  */}
                </button>

              </div>

              <ul className="navList text-center absolute md:relative top-24 mb-16 w-[335px] sm:w-auto">
                <li className='py-5'>
                  <a className="text-[#FFEB00] tracking-[1.92px] nav-link text-2xl md:text-[32px] font-Rajdhani font-medium" href="#details" onClick={showNavbar}> {data && data.navItem1[`${trans}`]} </a>
                </li>
                <li className='py-5'>
                  <a className="text-[#FFEB00] tracking-[1.92px] nav-link text-2xl md:text-[32px] font-Rajdhani font-medium" href="#checklist" onClick={showNavbar}> {data && data.navItem2[`${trans}`]} </a>
                </li>
                <li className='py-5'>
                  <a className="text-[#FFEB00] tracking-[1.92px] nav-link text-2xl md:text-[32px] font-Rajdhani font-medium" href="#unpack" onClick={showNavbar}> {data && data.navItem3[`${trans}`]} </a>
                </li>
              </ul>
              <button className="rescueBtn mt-12 border border-[#E5AEEE] hover:border-[#97E4FC] border-solid rounded-[10px] py-[14px] px-10 font-Rajdhani font-bold text-[20px] text-[#FFC1E5] hover:text-[#97E4FC] drop-shadow-6xl  hover:drop-shadow-8xl absolute bottom-10 md:bottom-0 md:relative mx-auto">{data && data.navBtn[`${trans}`]} </button>
            </nav>
            <button className="nav-btn text-gray-500 cursor-pointer" onClick={showNavbar} >
              <HamBug /> {/* humbugger button  */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
