import React from 'react'
import Image from 'next/image'
import styles from './nav.module.css'
import Link from 'next/link'

const NavBar = () => {
    return (
        <div className={styles.navContainer}>
            <div className={styles.left}>
                <Image
                    className={styles.logo}
                    src="/translate.svg"
                    alt="logo"
                    width={21}
                    height={21}
                />
            </div>
            <div className={styles.middle}>
                <button className={styles.location}>Mesra</button>
            </div>
            <Link href="/user">
                <div className={styles.right}>
                    <Image
                        className={styles.user}
                        src='/user.svg'
                        width={24}
                        height={24}
                    />
                </div>
            </Link>
        </div>
    )
}

export default NavBar