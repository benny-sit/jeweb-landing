'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from './specialRight.module.css'


export default function SpecialRight() {
    const sectionRef = useRef(null);
    const observerRef = useRef(null);
    const [isSeen, setIsSeen] = useState(false);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setIsSeen(true);
                    observerRef.current.disconnect();
                }
            })
        },{
            threshold: 1,
        })

        if (sectionRef.current) observerRef.current.observe(sectionRef.current)

        return () => {
            if (sectionRef.current) observerRef.current.unobserve(sectionRef.current);
            observerRef.current.disconnect();
        }
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
