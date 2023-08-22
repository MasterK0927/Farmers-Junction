import React from 'react'
import styles from './help.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Help = () => {
    return (
        <div className={styles.helpContainer}>
            <div className={styles.leftContainer}>
                <Image
                    src="/logo.svg"
                    className={styles.logo}
                    width={114}
                    height={36}
                />
                <div className={styles.helpButtonContainer}>
                    <button className={styles.helpButton}>
                        <Link href="/helpPage" className={styles.link}>
                            <Image
                                src="/headset.svg"
                                className={styles.helpImage}
                                width={27}
                                height={24}
                            />
                            <span className={styles.helpText}>Help</span>
                        </Link>
                    </button>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <Link href="/chat">
                    <Image
                        className={styles.chatbot}
                        src="/chtabot.svg"
                        width={80}
                        height={86}
                    />
                </Link>
            </div>
        </div>
    )
}

export default Help