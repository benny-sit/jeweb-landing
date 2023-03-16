import React from 'react'

export default function PricingSection() {
  return (
    <section aria-labelledby='home-pricing-title' className=' p-5  text-center max-w-7xl w-full mx-auto '>
      <h2 id='home-pricing-title' className='text-5xl font-semibold tracking-tight py-7'>מחירים</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 items-stretch place-items-center gap-7 justify-center w-full isolate py-8 '>
        {/* Card */}
        <div className='rounded-3xl border p-5 text-center w-full max-w-xs bg-white relative flex flex-col'>
          <div className='absolute -inset-2 border-gradient-mixed p-1 rounded-3xl md:-translate-x-3 md:translate-y-3 -z-10 opacity-70'>{/* Decorative Border */}</div>
          <h4 className='font-bold text-xl '>בסיסי</h4>
          <h3 className='text-xl font-semibold  py-6' dir='rtl'><span className='text-5xl'>200<span className='text-3xl font-light'>₪</span><span className='font-normal'>/</span></span><span> חודש</span></h3>
          <ul className='mt-1 grow'>
            <li className='hover:scale-105'>עיצוב ייחודי</li>
            <div className='divider my-1 '></div>
            <li className='hover:scale-105'>עיצוב מותאם לנייד</li>
            <div className='divider my-1'></div>
            <li className='hover:scale-105'>תחזוקה וטיפול באתר</li>
            <div className='divider my-1'></div>
            <li className='hover:scale-105'>קידום האתר במנועי חיפוש</li>
            <div className='divider my-1'></div>
            <li className='hover:scale-105'>כתובת דומיין אישית</li>
          </ul>
          <button className='btn btn-primary self-center mt-5 mb-2 rounded-md hover:text-white'>פרטים נוספים</button>
        </div>
        {/* Card */}
        <div className='rounded-3xl border p-5 text-center w-full max-w-xs bg-white relative flex flex-col'>
          <div className='absolute -inset-3 border-gradient-mixed p-1 rounded-3xl'>{/* Decorative Border */}</div>
          <h4 className='text-transparent font-bold text-xl bg-clip-text bg-gradient-to-b from-secondary to-primary '>משתלם</h4>
          <h3 className='text-xl font-semibold  py-6' dir='rtl'><span className='text-5xl'>250<span className='text-3xl font-light'>₪</span><span className='font-normal'>/</span></span><span> חודש</span></h3>
          <ul className='mt-1 grow'>
            <li className='hover:scale-105'>עיצוב ייחודי ברמה גבוהה</li>
            <div className='divider my-1 '></div>
            <li className='hover:scale-105'>עיצוב מותאם לנייד</li>
            <div className='divider my-1'></div>
            <li className='hover:scale-105'>תחזוקה וטיפול באתר</li>
            <div className='divider my-1'></div>
            <li className='hover:scale-105'>קידום האתר במנועי חיפוש</li>
            <div className='divider my-1'></div>
            <li className='hover:scale-105'>כתובת דומיין אישית</li>
            <div className='divider my-1'></div>
            <li className='hover:scale-105 font-semibold'>עד 5 עמודים</li>
          </ul>
          <button className='btn btn-primary self-center mt-5 mb-2 rounded-md hover:text-white'>פרטים נוספים</button>
        </div>
        {/* Card */}
        <div className='rounded-3xl border p-5 text-center w-full max-w-xs bg-white relative flex flex-col'>
          <div className='absolute -inset-2 border-gradient-mixed p-1 rounded-3xl md:translate-x-3 md:translate-y-3 -z-10 '>{/* Decorative Border */}</div> 
          <h4 className='text-transparent font-bold text-xl bg-clip-text bg-gradient-to-b from-[#FFD700] to-primary'>פרימיום</h4>
          <h3 className='text-xl font-semibold  py-6' dir='rtl'><span className='text-5xl'>400<span className='text-3xl font-light'>₪</span><span className='font-normal'>/</span></span><span> חודש</span></h3>
          <ul className='mt-1 grow'>
            <li className='hover:scale-105'>עיצוב ייחודי ברמה גבוהה</li>
            <div className='divider my-1 '></div>
            <li className='hover:scale-105'>עיצוב מותאם לנייד</li>
            <div className='divider my-1'></div>
            <li className='hover:scale-105'>תחזוקה וטיפול באתר</li>
            <div className='divider my-1'></div>
            <li className='hover:scale-105'>קידום האתר במנועי חיפוש</li>
            <div className='divider my-1'></div>
            <li className='hover:scale-105'>כתובת דומיין אישית</li>
            <div className='divider my-1'></div>
            <li className='hover:scale-105'>כתובת דומיין אישית</li>
            <div className='divider my-1'></div>
            <li className='hover:scale-105 font-semibold'>עד 5 עמודים</li>
            <div className='divider my-1'></div>
            <li className='hover:scale-105 font-semibold'>סליקת אשראי</li>
          </ul>
          <button className='btn btn-primary self-center mt-5 mb-2 rounded-md  hover:text-white'>פרטים נוספים</button>
        </div>
      </div>
    </section>
  )
}
