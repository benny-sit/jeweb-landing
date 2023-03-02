import React from 'react'

export default function TargetSection() {
  return (
    <section className='max-w-7xl w-full mx-auto flex flex-row-reverse flex-wrap justify-between items-center px-5 mt-5 gap-2'>
        <div dir='rtl' className='basis-[450px] '>
            <h3 className='text-5xl font-semibold tracking-tight'>
                ה<span className='text-transparent  bg-clip-text bg-gradient-to-r from-primary to-accent'>מטרה</span> שלנו
            </h3>
            <h5 className='tracking-wide text-lg mt-5'>
                אנחנו באים במטרה לעזור לקהילות השונות בארץ וגם לאנשים פרטיים - לקבל יותר חשיפה ופירסום דרך ערוצי התקשורת השונים באמצעות יצירה ותחזוק של דפי אינטרנט אשר ממומשים בטכנולוגיות החדשות ביותר בשוק.
            </h5>
        </div>
        <div className='basis-[350px] grow mt-7'>
          <div className='p-10 rounded-3xl bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%] animate-move-bg-slow relative group'>
            <div className='absolute bg-secondary-var-50/40  inset-0 rounded-3xl'/>
            <img src='/home/target/accentWebBg.svg' className='w-1/5 aspect-auto absolute -top-[10%] group-hover:translate-x-5 group-hover:translate-y-5 transition-transform' />
            <img src='/home/target/primaryWebBg.svg' className='w-1/3 aspect-auto absolute -bottom-[10%] left-1/3 -translate-x-1/2 group-hover:-translate-y-5 transition-transform' />
            <img src='/home/target/secondaryWebBg.svg' className='w-1/4 aspect-auto absolute -top-[5%] -right-[2%] group-hover:-translate-x-5 group-hover:translate-y-5 transition-transform' />
            <img src='/home/target/targetBg.svg' className='w-full aspect-video max-w-2xl rounded-3xl shadow-xl hover:shadow-2xl transition-shadow mx-auto relative'/>
          </div>
        </div>
    </section>
  )
}
