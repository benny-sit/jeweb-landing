import React from 'react'
import HeroLeft from './HeroLeft/HeroLeft'

export default function HomeHero() {
  return (
    <section className='max-w-7xl mx-auto w-full flex flex-wrap justify-between items-center px-3 h-screen isolate'>
        <div className='absolute top-0 right-20 left-20 bottom-40 gradient-hero-bg -z-10 rounded-b-3xl' />
        <div className='basis-[420px]'>
            <HeroLeft />
        </div>
        <div dir='rtl' className='basis-[450px] grow'>
          <h1 className='text-6xl font-semibold font-rubik tracking-tight'>
            בניית אתרים במחיר <span className='text-transparent text-7xl bg-clip-text bg-gradient-to-b from-secondary to-primary'>משתלם</span>
          </h1>
          <h4 className='text-lg mt-8 max-w-[500px]'>
            מהיום להחזיק אתר לא היה פשוט יותר, אנחנו מבצעים את כל תהליך בניית האתר - מהעיצוב, לתכנות ולתחזוקה. 
          </h4>
          <button className='btn btn-accent rounded-md mt-5 hover:outline-offset-2 outline-1 outline outline-accent transition-all duration-150'>
            צרו קשר
          </button>
        </div>
    </section>
  )
}
