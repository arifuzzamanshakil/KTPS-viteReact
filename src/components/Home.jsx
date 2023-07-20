import React, { useEffect, useState } from 'react';
import Navbar from './layouts/Navbar';
import Header from './Header';
import Details from './Details';
import Checklist from './Checklist';
import Unpack from './Unpack';
import Footer from './layouts/Footer';
import Loader from './layouts/Loader';



const Home = () => {
   const [getLang, setLang] = useState();
   const [loading, setLoading] = useState(true);

   const handleLangData = (langData) => {
      setLang(langData);
   };
   const lang = localStorage.setItem('lang', getLang);

   useEffect(() => {
     
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }, []);

   return (
      <>
         {loading ? (
            <Loader />
         ) : (
            <div className="home">
               <Navbar onLangData={handleLangData} />
               <div className="">
                  <div className='header'>
                     <Header dataLn={getLang} />
                  </div>
                  <div className="main">
                     <div className='bgShadow'>
                        <section id='details'>
                           <Details />
                        </section>
                        <section id='checklist'>
                           <Checklist />
                        </section>
                        <section id='unpack'>
                           <Unpack />
                        </section>
                        <section id='footer'>
                           <Footer />
                        </section>
                     </div>
                  </div>
               </div>
            </div>
         )
         }
      </>
   );
};

export default Home;