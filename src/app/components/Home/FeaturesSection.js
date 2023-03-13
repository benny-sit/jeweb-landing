import Image from 'next/image'
import React from 'react'

// import responsive from '/home/features/responsive.svg'

export default function FeaturesSection() {
  return (
    <section aria-labelledby='feature-header' className='bg-secondary-var-50 text-center mt-10 pb-5 md:pb-10 px-5'>
      <h2 id="feature-header" className='text-5xl font-semibold tracking-tight py-8'>אנחנו מספקים <span className='text-transparent  bg-clip-text bg-gradient-to-t from-primary to-accent'>לכם</span></h2>
    <div className='flex max-w-7xl w-full justify-center items-center flex-wrap gap-6  mx-auto font-rubik'>
      <div className='feature-cell'>
        <div className='relative'>
          <div className='absolute w-full h-full top-0 gradient-feature-bg'/>
        <Image className='relative' src='/home/features/domain.svg' width={100} height={100}/>
        </div>
        <h6 className='font-semibold tracking-tight text-xl'>דומיינים מותאמים אישית</h6>
        <p>רישום דומיינים במיוחד לעסק שלכם</p>
      </div>
      <div className='feature-cell'>
        <div className='relative'>
          <div className='absolute w-full h-full top-0 gradient-feature-bg' />
        <Image className='relative' src='/home/features/responsive.svg' width={150} height={150}/>
        </div>
        <h6 className='font-semibold tracking-tight text-xl'>עיצוב רספונסיבי</h6>
        <p>עיצוב רספונסיבי אשר מותאם למכשירים השונים, גם לסמארטפונים וטאבלטים</p>
      </div>
      <div className='feature-cell'>
        <div className='relative'>
          <div className='absolute w-full h-full top-0 gradient-feature-bg' />
        <Image className='relative' src='/home/features/google_g.svg' width={80} height={80}/>
        </div>
        <h6 className='font-semibold tracking-tight text-xl'>קידום אתרים בגוגל</h6>
        <p>מספקים לכם אופטימיזציה הנותנת התאמה מלאה למנועי החיפוש השונים</p>
      </div>
    </div>

    </section>
  )
}
