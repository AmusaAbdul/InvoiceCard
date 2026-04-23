import React, { useState, useEffect } from 'react';
import ProfileImage from '../assets/HeaderPicture.jpeg';


const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });


  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  return (
    <div className='flex justify-between p-4 bg-slate-800 sm:flex-col'>
      <div className='rounded-[0px_10px_10px_0px] flex justify-center items-center w-10 h-10 bg-slate-500'>💎</div>
      <div className='flex sm:flex-col items-center gap-4'>
          <button onClick={() => setDarkMode(!darkMode)} className='h-10 cursor-pointer'> {darkMode ? "☀️" : "🌙"}</button>
          <hr className='hidden sm:block w-full border-slate-600' />
            <button className=''>
              <img className='rounded-full h-10 w-10 object-cover' src={ProfileImage} alt="Profile Picture" />
            </button>
        </div>
    </div>
  )
}

export default Header
