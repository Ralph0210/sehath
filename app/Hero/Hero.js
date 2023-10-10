"use client";

import styles from "./Hero.module.css";
import Image from "next/image";
import hero from "../../public/new2.png";
import corner from "../../public/corner.png";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from 'react';

export default function Hero({...props}) {

  const {active, setActive, setIsInView}  = props
  const ref = useRef(null)
  const inView  = useInView(ref);

  useEffect(() => {
    console.log(inView)
  },[inView])

  setIsInView(!inView);

  const fadeIn = {
    hidden: { opacity: 1, y: 80 }, // Start with opacity 0 and slight Y translation
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Fade in and move up smoothly
  };

  return (
    <>
      <div className={styles.heroContainer}>
        <Image
          src={hero}
          className={styles.heroImage}
          sizes="100vw"
          alt="hero image"
          priority
        />
        <div className={styles.heroText}>
          <h1 className={styles.h1}>Bridges Health Worldwide</h1>
          <p className={styles.p}>Empowering UT for Global Health Equity</p>
        </div>

        <motion.div
          className={styles.leftShape}
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Image
            src={corner}
            className={styles.cornerImage}
            sizes="100vw"
            alt="corner image"
            priority
          />
          <div className={styles.bottomPart}>
            <div className={styles.leftSquare}><ul className={styles.aboutButton} ref={ref}>
                <motion.li whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }} className={`${active === 'mission' ? styles.active : ''} `} onClick={() => setActive('mission')}>Mission</motion.li>
                <motion.li whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }} className={active === 'approach' ? styles.active : ''} onClick={() => setActive('approach')}>Approach</motion.li>
                <motion.li whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }} className={active === 'vision' ? styles.active : ''} onClick={() => setActive('vision')}>Vision</motion.li>
              </ul>
            </div>
            <Image
              src={corner}
              className={styles.cornerImage}
              sizes="100vw"
              alt="corner image"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className={styles.rightShape}
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Image src={corner} className={styles.rightCornerImage} />
          <div className={styles.bottomPart}>
            <Image
              src={corner}
              className={styles.rightCornerImage}
              sizes="100vw"
              alt="corner image"
              priority
            />
            <div className={styles.rightSquare}>We are a student-led organization dedicated to improve global healthcare.</div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
