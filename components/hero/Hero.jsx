import React from 'react'
import HeroSubBoxes from '../heroSubBoxes/HeroSubBoxes'
import styles from './hero.module.css'
import Link from 'next/link'

const textData = [
    { id: 1, text: 'Predict The Crop' },
    { id: 2, text: 'Check For Disease' },
    { id: 3, text: 'Current Mandi Prices' },
]

const Hero = () => {
    return (
        <div className={styles.heroContainer}>
            <Link href="http://harsha12345.pythonanywhere.com/" className={styles.link}>
                <div className={styles.heroSubBoxesContainerOne}>
                    <HeroSubBoxes text={textData[0].text} />
                </div>
            </Link>
            <div className={styles.heroSubBoxesContainerTwo}>
                <HeroSubBoxes text={textData[1].text} />
            </div>
            <Link href="https://www.mandiprices.com/" className={styles.link}>
                <div className={styles.heroSubBoxesContainerThree}>
                    <HeroSubBoxes text={textData[2].text} />
                </div>
            </Link>
        </div>
    )
}

export default Hero