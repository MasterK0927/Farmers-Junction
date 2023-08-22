import React from 'react'
import styles from './pagesub.module.css'

const PageSub = ({text,content}) => {
  return (
    <div className={styles.pageSubBoxesContainer}>
        <span className={styles.pageSubBoxText}>
            {text}
        </span>
        <span className={styles.content}>
            {content}
        </span>
    </div>
  )
}

export default PageSub