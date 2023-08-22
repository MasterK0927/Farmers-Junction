import React from 'react'
import styles from './herosub.module.css'

const HeroSubBoxes = ({text}) => {
  return (
    <div className={styles.heroSubBoxesContainer}>
        <span className={styles.heroSubBoxText}>
            {text}
        </span>
    </div>
  )
}

export default HeroSubBoxes