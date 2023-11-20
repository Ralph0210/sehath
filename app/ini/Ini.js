"use client";

import styles from "./Ini.module.css";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import leh from "../../public/leh.png";
import austin from "../../public/austin.png";
import { motion, useScroll } from "framer-motion";

function Ini() {
  const [active, setActive] = useState("L");

  const refLeh = useRef(null)
  const refAustin = useRef(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 }, // Start with opacity 0 and slight Y translation
    visible: { opacity: 1, y: 0 }, // Fade in and move up smoothly
  };

  const handleClick = () => {
    if (active === "L") {
      setActive("A");
    } else {
      setActive("L");
    }
  
  }


  return (
    <>
    <div className={styles.initiativeContainer}>
      <h2 className={styles.initiativesTitle}>Our initiatives</h2>
      <div className={styles.initiatives}>
        <div
          className={`${active === "L" ? styles.active : ""} ${
            styles.leftContainer
          }`}
          onClick={() => setActive("L")}
        >
          <Image src={leh} alt="leh" quality={100} style={{borderRadius: '5rem'}}/>
          <div
            className={`${active === "L" ? styles.activeLeft : ""} ${
              styles.leftOverlay
            }`}
          >
            {active === "L" ? (
              <motion.h2
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                The Leh Ladakh Mission
              </motion.h2>
            ) : (
              <h2>Leh Ladakh</h2>
            )}
            {active === "L" && (
              <motion.p
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3, delay: 0.8}}
              >
                In partnership with the Himalayan Health Project, we aim to
                address critical healthcare needs in the region of Leh, Ladakh,
                with a focus on oral hygiene, vision care, and women&#39;s health. <a href="/initiatives" style={{color:"white", textDecoration:"underline"}}>Read More</a>
              </motion.p>
            )}
          </div>
        </div>

        <div
          className={`${active === "A" ? styles.active : ""} ${
            styles.rightContainer
          }`}
          onClick={() => setActive("A")}
        >
          <Image src={austin} quality={100} alt="austin" style={{borderRadius: '5rem'}}/>
          <div
            className={`${active === "A" ? styles.activeRight : ""} ${
              styles.rightOverlay
            }`}
          >
            {active === "A" ? (
              <motion.h2
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                Austin
              </motion.h2>
            ) : (
              <h2>Austin</h2>
            )}
            {active === "A" && (
              <motion.p
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3, delay: 0.8}}
              >
                
The Austin Project at UT bridges the education-action gap in healthcare. Students provide global medical care to underserved communities, fostering responsibility and creating future healthcare leaders with a global impact. <a href="/initiatives" style={{color:"white", textDecoration:"underline"}}>Read More</a>
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </div>

    <div className={styles.mobileInitiativeContainer}>
      <h2 className={styles.initiativesTitle}>Our initiatives</h2>
      <div className={styles.initiatives}>
        <div
        ref={refLeh}
          className={`${active === "L" ? styles.active : ""} ${
            styles.leftContainer
          }`}
          onClick={() => setActive("L")}
        >
          <Image src={leh} className={`${active === "L" ? styles.activeImage : ""}`} alt="leh" quality={100} sizes="100vh" style={{height:"100%", objectFit:'cover'}}/>
          <div
            className={`${active === "L" ? styles.activeLeft : ""} ${
              styles.leftOverlay
            }`}
          ><div className={styles.dragIcon} onClick={handleClick}></div>
            {active === "L" ? (
              <motion.h2
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                The Leh Ladakh Mission
              </motion.h2>
            ) : (
              <motion.h2>Leh Ladakh</motion.h2>
            )}
            {active === "L" && (
              <motion.p
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3, delay: 0.8}}
              >
                In partnership with the Himalayan Health Project, we aim to
                address critical healthcare needs in the region of Leh, Ladakh,
                with a focus on oral hygiene, vision care, and women&#39;s health.
              </motion.p>
            )}
          </div>
        </div>

        <div
        ref={refAustin}
          className={`${active === "A"? styles.active : ""} ${
            styles.rightContainer
          }`}
          onClick={handleClick}
        >
          <Image src={austin} alt="austin" />
          <div
            className={`${active === "A"? styles.activeRight : ""} ${
              styles.rightOverlay
            }`}
          ><div className={styles.dragIcon} onClick={handleClick}></div>
            {active === "A"? (
              <motion.h2
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                Austin
              </motion.h2>
            ) : (
              <motion.h2>Austin</motion.h2>
            )}
            {active === "A" && (
              <motion.p
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3, delay: 0.8}}
              >
                In partnership with the Himalayan Health Project, we aim to
                address critical healthcare needs in the region of Leh, Ladakh,
                with a focus on oral hygiene, vision care, and women&#39;s health.
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Ini;
