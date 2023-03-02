import React from 'react'
import styles from './heroLeft.module.css'

export default function HeroLeft() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mousePositionTracker} />
      <div className={styles.mousePositionTracker} />
      <div className={styles.mousePositionTracker} />
      <div className={styles.mousePositionTracker} />
      <div className={styles.mousePositionTracker} />
      <div className={styles.mousePositionTracker} />
      <div className={styles.mousePositionTracker} />
      <div className={styles.mousePositionTracker} />
      <div className={styles.mousePositionTracker} />
      <div className={styles.card}>
        <div className={styles.topButtons}>
          <div></div><div></div><div></div>
        </div>
        <div className={styles.scrollBar}></div>
        {/* <div className={styles.cardContent}>
          <div className={styles.sideNav} />
        </div> */}
        <div className={styles.square}><div></div><div></div></div>
        <div className={`${styles.square} ${styles.secondSquare}`}><div></div><div></div></div>
      </div>
    </div>
  )
}
