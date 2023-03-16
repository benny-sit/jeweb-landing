import React from 'react'

export default function TargetSection() {
  return (
    <section aria-labelledby='target-title' className='max-w-7xl w-full mx-auto flex flex-row-reverse flex-wrap justify-center items-center px-5 mt-5 gap-2'>
        <div dir='rtl' className='basis-[450px] ml-auto'>
            <h3 id='target-title' className='text-5xl font-semibold tracking-tight'>
                ה<span className='text-transparent  bg-clip-text bg-gradient-to-r from-primary to-accent'>מטרה</span> שלנו
            </h3>
            <h4 className='tracking-wide text-lg mt-5 leading-relaxed'>
                אנחנו באים במטרה לעזור לקהילות השונות בארץ וגם למגזר הפרטי - לקבל יותר חשיפה ופירסום דרך ערוצי התקשורת השונים באמצעות יצירה ותחזוק של דפי אינטרנט אשר ממומשים בטכנולוגיות החדשות ביותר בשוק.
            </h4>
        </div>
        <div className='basis-[350px] grow mt-10 max-w-[700px]'>
          <div className='p-10 rounded-3xl bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%] animate-move-bg-slow relative group'>
            <div className='absolute bg-secondary-var-50/40  inset-0 rounded-3xl'/>
            <img src='/home/target/accentWebBg.svg' className='w-1/5 aspect-auto absolute -top-[10%] group-hover:translate-x-5 group-hover:translate-y-5 transition-transform'  alt=''/>
            <img src='/home/target/primaryWebBg.svg' className='w-1/3 aspect-auto absolute -bottom-[10%] left-1/3 -translate-x-1/2 group-hover:-translate-y-5 transition-transform'  alt=''/>
            <img src='/home/target/secondaryWebBg.svg' className='w-1/4 aspect-auto absolute -top-[5%] -right-[2%] group-hover:-translate-x-5 group-hover:translate-y-5 transition-transform'  alt=''/>
            <img src='/home/target/targetBg.svg' className='w-full aspect-video max-w-2xl rounded-3xl shadow-xl transition-shadow mx-auto relative' alt='Website Mockup'/>
          </div>
        </div>
    </section>
  )
}
