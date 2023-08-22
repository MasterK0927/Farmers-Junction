import React from 'react';
import styles from './about.module.css';
import Image from 'next/image';
import Footer from '../../../components/footer/Footer';

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <h1>About Us</h1>
            </div>

            <div className={styles.p1}>
                <div className={styles.profile}>
                    <Image src='/keshav.jpg' alt='' width={30} height={30} className={styles.profilePhoto} />
                    <h2>Keshav</h2>
                    <p>Next JS Development</p>
                </div>

                <div className={styles.profile}>
                    <Image src='/harsha.jpg' alt='' width={30} height={30} className={styles.profilePhoto} />
                    <h2>Harsha</h2>
                    <p>Backend Development</p>
                </div>
            </div>
            <div className={styles.p1}>
                <div className={styles.profile}>
                    <Image src='/shouryaman.jpg' alt='' width={30} height={30} className={styles.profilePhoto} />
                    <h2>Shouryaman</h2>
                    <p>Machine Learning</p>
                </div>

                <div className={styles.profile}>
                    <Image src='/savit.jpg' alt='' width={30} height={30} className={styles.profilePhoto} />
                    <h2>Savit</h2>
                    <p>UI/UX</p>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
};

export default AboutPage;
