import React from 'react'
import SpecialRight from './SpecialRight/SpecialRight'

export default function SpecialSection() {
  return (
    <section aria-labelledby='special-title' className='mt-36 max-w-7xl w-full mx-auto flex flex-wrap p-5 pb-16 justify-center gap-8 '>
        <div dir='rtl' className='basis-[400px] ml-auto grow-[3] max-w-[600px]'>
            <h3 id='special-title' className='text-5xl font-semibold tracking-tight'>
              בונים את האתר במיוחד <span className='text-transparent  bg-clip-text bg-gradient-to-l from-primary to-accent'>עבורך</span>
            </h3>
            <h4 className='tracking-wide text-lg mt-5 leading-relaxed'>
                כל אחד מהלקוחות שלנו מקבל אתר בהתאמה אישית. אנחנו בונים אתרים לפי צרכי הלקוחות. אנחנו עושים את המקסימום בשביל שתיהיו מרוצים מהתוצאה.
            </h4>
        </div>
        <div className='basis-[350px] grow max-w-[550px]'>
          <SpecialRight />
        </div>
    </section>
  )
}
