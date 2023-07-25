import React, { useEffect, useRef, useState } from 'react';
import data from '../../data';
import HamBug from './HamBug';
import Close from './Close';

export const Navbar = (props) => {
  const defaultLanguage = "en";
  const [lang, setLanguage] = useState(sessionStorage.getItem('lang') || defaultLanguage);
  const navRef = useRef();
  

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  // Call the parent component's onLangData function whenever the language changes
  useEffect(() => {
    props.onLangData(lang);
  }, [lang, props]);

  const [trans, setTrans] = useState("");

  useEffect(() => {
    setTrans(lang);
  }, [lang]);

  // Toggle function to switch between languages
  const toggleLanguage = () => {
    const newLang = lang === "en" ? "es" : "en";
    setLanguage(newLang);
    sessionStorage.setItem('lang', newLang); // Store the language in localStorage
  };



  const [navbarBackground, setNavbarBackground] = useState('#2B0756');

  const changeNavbarBackgroundOnScroll = () => {
    const mobileScreenSize = 768; // Change this value as needed for your responsive design
    if (window.innerWidth < mobileScreenSize) {
      const scrollThreshold = 100; // Adjust this value as needed for the scroll threshold where the background color should change
      if (window.scrollY > scrollThreshold) {
        setNavbarBackground('#2B0756'); // Change the background color to your desired color
      } else {
        setNavbarBackground('transparent');
      }
    } else {
      setNavbarBackground('#2B0756'); // Set the default background color for larger screens
    }
  };

  useEffect(() => {
    // Call the function to change the navbar background color on scroll
    window.addEventListener('scroll', changeNavbarBackgroundOnScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', changeNavbarBackgroundOnScroll);
    };
  }, []);

  return (
    <div className='px-0 fixed z-30 w-screen'>
      <div className='bg-[#130524]  text-center'>
        <p className='text-sm h-[34px] py-1 md:text-lg backdrop-blur-[13.5px] text-white tracking-[1.4px] md:tracking-[1.8px] md:ml-[65px]'>{data && data.topnav[`${trans}`]}<strong> <a href="tel:911">{data && data.topnavCall[`${trans}`]}</a></strong></p>
      </div>
      <div className="items-center px-4 md:px-0  md:bg-[#2B0756] bg-none py-2 md:py-0 " style={{ backgroundColor: navbarBackground }} >
        <div className='flex items-center justify-between mx-auto xl:w-[1160px] lg:w-[1000px] sm:w-full lg:px-0 sm:px-8 xl:px-0 w-[340px]'>
          <div className='languageSec'>
            <div className="w-[34px] md:w-[110px] text-xl md:text-2xl font-normal text-[#FFC1E5] hover:text-white hover:ease-in duration-75 border-none overflow-hidden">
              <button onClick={toggleLanguage} className='langShadow'> {/*Use toggleLanguage function here  */}
                {lang === "en" ? "Español" : "English"}
              </button>
            </div>
          </div>

          <a href='/' className='cursor-pointer w-[160px] md:w-auto md:h-auto'>
            <img src={data && data.logoImg[`${trans}`]} alt="Logo" />
          </a>

          <div className="navHeader p-0">
            <nav ref={navRef} className="flex flex-col left-0 fixed -top-full h-full w-full items-center justify-center duration-[1s] gap-12 bg-no-repeat bg-right bg-cover md:bg-center">

              <div className="absolute top-5 md:top-14 px-4 flex items-center justify-between mx-auto xl:w-[1160px] lg:w-[1000px] sm:w-full lg:px-0 sm:px-8 xl:px-0 w-[340px]">
                <div className='text-white'>
                  <div className="w-[34px] md:w-[110px] text-xl md:text-2xl  font-normal text-[#FFC1E5] overflow-hidden  hover:text-white hover:ease-in duration-75 border-none">
                    <button onClick={toggleLanguage} className='langShadow'> {/*Use toggleLanguage function here  */}
                      {lang === "en" ? "Español" : "English"}
                    </button>
                  </div>
                </div>

                {/* logo */}
                <a href='/' className='cursor-pointer w-[160px] h-[30px] md:w-auto md:h-auto'>
                  <img src={data && data.logoImg[`${trans}`]} alt="Logo" />
                </a>

                <button className="nav-btn nav-close-btn cursor-pointer" onClick={showNavbar} >
                  <Close />  {/* close button  */}
                </button>

              </div>

              <ul className="navList text-center absolute md:relative top-24 mb-16 w-[335px] sm:w-auto">
                <li className='py-6'>
                  <a className="text-[#FFEB00] tracking-[1.92px] nav-link text-2xl md:text-[32px] font-Rajdhani font-medium" href="#details" onClick={showNavbar}> {data && data.navItem1[`${trans}`]} </a>
                </li>
                <li className='py-6'>
                  <a className="text-[#FFEB00] tracking-[1.92px] nav-link text-2xl md:text-[32px] font-Rajdhani font-medium" href="#checklist" onClick={showNavbar}> {data && data.navItem2[`${trans}`]} </a>
                </li>
                <li className='py-6'>
                  <a className="text-[#FFEB00] tracking-[1.92px] nav-link text-2xl md:text-[32px] font-Rajdhani font-medium" href="#unpack" onClick={showNavbar}> {data && data.navItem3[`${trans}`]} </a>
                </li>
              </ul>
              <button className="rescueBtn mt-12 border border-[#E5AEEE] hover:border-[#97E4FC] border-solid rounded-[10px] py-[14px] px-10 font-Rajdhani font-bold text-[20px] text-[#FFC1E5] hover:text-[#97E4FC]  absolute bottom-10 md:bottom-0 md:relative mx-auto">{data && data.navBtn[`${trans}`]} </button>
            </nav>
            <button className="cursor-pointer" onClick={showNavbar} >
              <HamBug /> {/* humbugger button  */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
