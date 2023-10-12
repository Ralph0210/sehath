import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import titleImage from '../../public/new3.png'

const event = () => {
  return (
    <div className={styles.main}>
      <div className={styles.titleImage}>
        <div className={styles.titleImageContainer}>
          <Image src={titleImage} quality={100} alt="title" sizes='100vw' style={{width: '100%', height:'100vh', objectFit:'cover'}}/>
        </div>
        <h1 className={styles.title}>Events</h1>
      </div>

      <div className={styles.eventsContainer}>
        Come back soon!
      </div>
    </div>
  )
}

export default event