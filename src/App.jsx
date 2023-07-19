import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Loader from './components/layouts/loader';


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        )
      }
    </>
  )
}

export default App
