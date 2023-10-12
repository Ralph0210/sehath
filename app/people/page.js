import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import titleImage from '../../public/new3.png'

const OfficerCard = ({name, position, image, description, contact}) => {
  return(
    <div className={styles.officerCard}>
      <Image src={image} alt={name} quality={100} sizes='100vw' style={{width: '22rem', height:'22rem', objectFit:'cover', borderRadius:'50%'}}/>
      <h3>{name}</h3>
      <p>{position}</p>
      <p>{description}</p>
      <p>{contact}</p>
    </div>
  )
}

const page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.titleImage}>
        <div className={styles.titleImageContainer}>
          <Image src={titleImage} quality={100} alt="title" sizes='100vw' style={{width: '100%', height:'100vh', objectFit:'cover'}}/>
        </div>
        <h1 className={styles.title}>Our Dedicated Crew</h1>
      </div>

      <div className={styles.meetCrewContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.text}>
            <h2>Meet Our Dedicated Crew</h2>
            <p>Meet the driving force behind Sehath&#39;s mission to bridge the global healthcare education-action gap and discover their unwavering commitment to serving underserved communities worldwide.</p>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <OfficerCard name="Dr. Seth T. H. Chan" position="Chief Medical Officer" image={titleImage} description="Dr. Seth T. H. Chan is the Chief Medical Officer of Sehath, a global healthcare education-action initiative that bridges the global healthcare education-action gap and discovers their unwavering commitment to serving underserved communities worldwide." contact="000000000000"/>
          <OfficerCard name="Dr. Seth T. H. Chan" position="Chief Medical Officer" image={titleImage} description="Dr. Seth T. H. Chan is the Chief Medical Officer of Sehath, a global healthcare education-action initiative that bridges the global healthcare education-action gap and discovers their unwavering commitment to serving underserved communities worldwide." contact="000000000000"/>
        </div>
      </div>

      <div className={styles.crewContainer}>
        <div>
        <OfficerCard name="Dr. Seth T. H. Chan" position="Chief Medical Officer" image={titleImage} description="Dr. Seth T. H. Chan is the Chief Medical Officer of Sehath, a global healthcare education-action initiative that bridges the global healthcare education-action gap and discovers their unwavering commitment to serving underserved communities worldwide." contact="000000000000"/>
        <OfficerCard name="Dr. Seth T. H. Chan" position="Chief Medical Officer" image={titleImage} description="Dr. Seth T. H. Chan is the Chief Medical Officer of Sehath, a global healthcare education-action initiative that bridges the global healthcare education-action gap and discovers their unwavering commitment to serving underserved communities worldwide." contact="000000000000"/>
        </div>
        <div>
        <OfficerCard name="Dr. Seth T. H. Chan" position="Chief Medical Officer" image={titleImage} description="Dr. Seth T. H. Chan is the Chief Medical Officer of Sehath, a global healthcare education-action initiative that bridges the global healthcare education-action
        gap and discovers their unwavering commitment to serving underserved communities worldwide." contact="000000000000"/>
        <OfficerCard name="Dr. Seth T. H. Chan" position="Chief Medical Officer" image={titleImage} description="Dr. Seth T. H. Chan is the Chief Medical Officer of Sehath, a global healthcare education-action initiative that bridges the global healthcare education-action
        gap and discovers their unwavering commitment to serving underserved communities worldwide." contact="000000000000"/>
        </div>
      </div>
    </div>
  )
}

export default page