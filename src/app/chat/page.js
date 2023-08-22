import React from 'react'
import styles from './chat.module.css'
import ChatBot from '../../../components/chatbot/ChatBot'
import Footer from '../../../components/footer/Footer'

const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>ChatBot</h2>
                <div className={styles.chat}>
                    <ChatBot />
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default page