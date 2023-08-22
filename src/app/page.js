import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Hero from '../../components/hero/Hero'
import Help from '../../components/help/Help'
import Footer from '../../components/footer/Footer'
import styles from './page.module.css'
import ChatBot from '../../components/chatbot/ChatBot'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Help />
      <Footer />
    </>
  )
}

export default HomePage