'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from './specialRight.module.css'


export default function SpecialRight() {
    const sectionRef = useRef(null);
    const [isSeen, setIsSeen] = useState(false);
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIsSeen(true);
                observer.disconnect();
            }
        })
    }, {
        threshold: 1,
    })

    useEffect(() => {
        if (sectionRef.current) observer.observe(sectionRef.current)
    }, [sectionRef])

  return (
    <div className={styles.wrapper} ref={sectionRef}>
        <div className={`${styles.cards} ${isSeen && styles.play}`}>
            <div className={styles.first}></div>
            <div className={styles.second}></div>
            <div className={styles.polyfill}></div>
            <div className={styles.polyfill}></div>
        </div>
    </div>
  )
}
