"use client";

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <header className='fixed top-0 w-full z-40 isolate'>
    <nav className={`max-w-7xl flex gap-3 items-center mx-auto w-full p-3 rounded-b-xl  ${scrollPosition > 0 && 'backdrop-blur-md bg-secondary-var-100/20'} relative transition-all `} >
        <button className='btn btn-ghost block sm:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          { isMenuOpen? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30}/>}
        </button>
        <button className='btn btn-accent rounded-md px-5'>{"צרו קשר"}</button>
        <ul className='sm:flex hidden gap-2 items-center self-stretch '>
            <li className='btn btn-ghost rounded-md'><Link href="/" aria-label='About page'>אודות</Link></li>
            <li className='btn btn-ghost rounded-md'><Link href="/" aria-label='Support page'>תמיכה</Link></li>
            <li className='btn btn-ghost rounded-md'><Link href="/" aria-label='Packages page'>חבילות</Link></li>
            <li className='btn btn-ghost rounded-md'><Link href="/" aria-label='Home page'>דף הבית</Link></li>
        </ul>
        <Link href="/" className='p-1 ml-auto'>
          <img className='h-10' src='/jewebLogo.svg' />
        </Link>
        <div className={`absolute w-1/2 bottom-0 h-px bg-secondary-var-200 left-1/2 -translate-x-1/2 transition-all ${scrollPosition > 0 && 'scale-x-0'}`}></div>
    </nav>
    <ul className={`absolute h-screen w-56 bg-secondary-var-50 border-l-2 right-0 top-0 menu transition-all duration-300 sm:translate-x-full ${isMenuOpen ? 'translate-x-0': 'translate-x-full'}`} dir='rtl'>
        <Link href="/" className='p-2 mt-2 ml-auto' aria-label='Home page'>
          <img className='h-10' src='/jewebLogo.svg' alt='Jeweb Logo' height={40}/>
        </Link>
      <li className='mt-10'><Link href="/" aria-label='Home page'>דף הבית</Link></li>
      <li><Link href="/"  aria-label='Packages page'>חבילות</Link></li>
      <li><Link href="/"  aria-label='About page'>אודות</Link></li>
      <li><Link href="/"  aria-label='Support page'>תמיכה</Link></li>
    </ul>
    </header>
  )
}
