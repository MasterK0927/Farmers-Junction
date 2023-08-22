'use client'
import Image from 'next/image'
import React from 'react'
import styles from './footer.module.css'
import { useRouter } from 'next/navigation'

const Footer = () => {

    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    const goHome = () => {
        router.push('/');
    };

    const goAbout = () => {
        router.push('/about');
    };

    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.about} onClick={goAbout}>
                    <Image
                        src="/about.svg"
                        width={20}
                        height={20}
                        alt=''
                    />
                </div>
                <div className={styles.home} onClick={goHome}>
                    <Image
                        src="/home.svg"
                        width={21}
                        height={20}
                        alt=''
                    />
                </div>
                <div className={styles.back} onClick={goBack}>
                    <Image
                        src="/back.svg"
                        width={20}
                        height={20}
                        alt=''
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer