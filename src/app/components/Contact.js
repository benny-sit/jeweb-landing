'use client';

import Image from 'next/image';
import React, { useState } from 'react'

export default function Contact() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [displayMessage, setDisplayMessage] = useState('');
  const [isError, setIsError] = useState(false);

  async function formSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setDisplayMessage('');

    // const fd = new FormData(e.target);

    // console.log([...fd]);

    const data = {
      fullName:e.target.fullName.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data)
      })
      console.log(res, "RES");
      // console.log(await res.json());
      if(res.ok) {
        setDisplayMessage('המייל נשלח בהצלחה אנחנו ניצור איתך קשר! תודה.');
      } else {
        setIsError(true);
        setDisplayMessage('המייל לא נשלח אנא צור קשר בטלפון');
      }
    } catch (error) {
      setIsError(true);
      // console.log(error, "ERROR");
      setDisplayMessage('המייל לא נשלח אנא צור קשר בטלפון');
    } finally {
      setIsSubmitting(false);
    }

  }


  return (
    <section aria-labelledby='contact-us-title' className='max-w-7xl w-full mx-auto px-5 my-5 pt-20 pb-32 relative' id='contact-form'>
        <Image src={'/home/special/special3.svg'} alt="" width={1920} height={1080} className="absolute hidden sm:block w-4/5 rounded-3xl  opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
        <h2 id='contact-us-title' className='text-5xl font-semibold tracking-tight py-7 text-center text-transparent  bg-clip-text bg-gradient-to-b from-primary to-accent relative'>צור קשר</h2>
        <form className='max-w-2xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 items-center relative' dir='rtl' onSubmit={formSubmit}>
          <div>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>שם מלא</span>
              </label>
              <input type="text" className='input input-bordered w-full rounded' name='fullName' id='contact-full-name' required />
            </div>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>טלפון</span>
              </label>
              <input type="tel" className='input input-bordered w-full rounded' name='phone' id='contact-phone' dir='ltr' required/>
            </div>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>אימייל</span>
              </label>
              <input type="email" className='input input-bordered w-full rounded' name='email' id='contact-email' dir='ltr' required/>
            </div>
          </div>

          <div className='bg-secondary-var-50 self-stretch p-2 mt-2 sm:mt-7 rounded'>
            <textarea className='textarea textarea-bordered textarea-md w-full h-full rounded resize-none' id='contact-message' name='message' placeholder='ההודעה שלך'></textarea>
          </div>

          <div className='col-span-full'>
            <button type='submit' className='btn btn-accent rounded' disabled={isSubmitting}>שלח</button>
            {isSubmitting && ( <progress className="progress w-32 mr-3"></progress>)}
            <span className={`mr-1 ${isError ? 'text-error' : 'text-success'}`}>{displayMessage}</span>
          </div>
        </form>
    </section>
  )
}
