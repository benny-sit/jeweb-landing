import './globals.css'

import { Rubik } from 'next/font/google'
import Navbar from './components/Navbar'

const rubik = Rubik({ 
    variable: '--font-rubik',
    display: 'swap',
})

export const metadata = {
  title: 'Jeweb | Home',
  description: 'A landing page for Jeweb',
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" data-theme="corporate" className={rubik.variable}>
      <body className='font-rubik bg-secondary-var-50/50 min-h-[200vh] '>
        <Navbar />
        {children}
        
      </body>
    </html>
  )
}
