import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import type { RootState } from './redux/store/index';
import Footer from './components/Footer/Footer';
import { FooterData } from './data/FooterData';
function App() {
  const isDark = useSelector((state:RootState) => state.mode.isDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);
  return (
    <>
    <div className="min-h-screen bg-white text-black01 dark:bg-darkNavy dark:text-white px-[8.20512821%] md:px-[3.83693046%] lg:px-[7.777777777777778%] font-inter">
       <Navbar/>
    
    <div className='pt-24'>
      <Outlet/>
    </div>
     <Footer links={FooterData} year={new Date().getFullYear().toString()}/>
    </div>
  
    </>
  )
}

export default App
