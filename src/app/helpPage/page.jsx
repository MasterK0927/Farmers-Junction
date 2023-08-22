import React from 'react'
import styles from './helpPage.module.css'
import PageSub from '../../../components/pageSub/PageSub'
import Footer from '../../../components/footer/Footer'

const textData = [
  { id: 1, text: 'Our Main Office', content: 'Hostel 10, BIT Mesra' },
  { id: 2, text: 'Phone Number', content: '9523626949, 7842751810, 6204864673, 9142434696' },
  { id: 3, text: 'Email', content: 'helpme@agro.com' },
]

const Help = () => {
  return (
    <div className={styles.main}>
      <div className={styles.helpContainer}>
        <span>
          <h2 className={styles.heading}>How can we help you?</h2>
        </span>
        <div className={styles.pageSubBoxesContainerOne}>
          <PageSub text={textData[0].text} content={textData[0].content} />
        </div>
        <div className={styles.pageSubBoxesContainerOne}>
          <PageSub text={textData[1].text} content={textData[1].content} />
        </div>
        <div className={styles.pageSubBoxesContainerOne}>
          <PageSub text={textData[2].text} content={textData[2].content} />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Help