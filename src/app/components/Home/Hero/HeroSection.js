import React from 'react'
import HeroLeft from './HeroLeft/HeroLeft'

export default function HeroSection() {
  return (
    <section aria-labelledby='hero-title' className='max-w-7xl mx-auto w-full flex flex-wrap justify-center items-center p-5 h-screen isolate'>
        <div className='absolute top-0 right-20 left-20 bottom-40 gradient-hero-bg -z-10 rounded-b-3xl' />
        <div className='basis-[420px] grow max-w-[450px]'>
            <HeroLeft />
        </div>
        <div dir='rtl' className='basis-[450px] grow-[2]'>
          <h1 id="hero-title" className='text-6xl font-semibold font-rubik tracking-tight'>
            בניית אתרים במחיר <span className='text-transparent text-7xl bg-clip-text bg-gradient-to-b from-secondary to-primary'>משתלם</span>
          </h1>
          <p className='text-lg mt-8 max-w-[500px] tracking-wide leading-loose'>
            מהיום להחזיק אתר לא היה פשוט יותר, אנחנו מבצעים את כל תהליך בניית האתר - מהעיצוב, לתכנות ולתחזוקה. 
          </p>
          <button className='btn btn-accent rounded-md mt-5 hover:outline-offset-2 outline-1 outline outline-accent transition-all duration-150'>
            צרו קשר
          </button>
        </div>
    </section>
  )
}
