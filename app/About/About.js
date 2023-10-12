"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./About.module.css";
import Image from "next/image";
import study from "../../public/study.jpg";
import corner from "../../public/corner.png";
import sideMission from "../../public/missionSide.png";
import dental from '../../public/dental.jpg'
import kid from '../../public/kid.jpg'
import arrow from "../../public/arrow.svg";
import surgery from '../../public/surgery.jpg'
import awareness from '../../public/awareness.jpg'
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { scrollToElement } from "../utils/scroll";

function About({ ...props }) {
  const { active, setActive, isInView } = props;
  const [textToDisplay, setTextToDisplay] = useState([]);
  const controls = useAnimation();

  const expand = {
    hidden: { opacity: 1, height: "2rem" }, // Start with opacity 0 and slight Y translation
    visible: { opacity: 1, height: "15rem", transition: { duration: 1 } }, // Fade in and move up smoothly
  };

  const fadeIn = {
    hidden: { opacity: 1, y: 80 }, // Start with opacity 0 and slight Y translation
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Fade in and move up smoothly
  };

  useEffect(() => {
    controls.start({ opacity: 0, x: 20 }); // Animate text out
    setTimeout(() => {
      switch (active) {
        case "mission":
          setTextToDisplay([
            "Global Medical Empowerment",
            "Empower UT students to bridge education-action gap through global medical care for underserved communities.",
            "'Global Medical Empowerment' encapsulates our commitment to fostering a transformative experience for UT students. It's about empowering you to bridge the education-action gap in global healthcare.",
            study,
            dental
          ]);
          break;
        case "approach":
          setTextToDisplay([
            "Awareness & Education",
            "Raise awareness, educate locally and globally, and make meaningful impacts in healthcare.",
            "Becoming a part of our community, you'll have the chance to amplify crucial healthcare issues, ignite change, and create a brighter, healthier future for underserved communities worldwide.",
            awareness,
            sideMission
          ]);
          break;
        case "vision":
          setTextToDisplay([
            "Healthcare Equity",
            "Create a world where healthcare reaches everyone, regardless of their circumstances.",
            "Becoming a part of our community, you'll have the chance to amplify crucial healthcare issues, ignite change, and create a brighter, healthier future for underserved communities worldwide.",
            kid,
            surgery
          ]);
          break;
        default:
          setTextToDisplay("Default Text");
      }
      controls.start({ opacity: 1, x: 0 }); // Animate text in
    }, 300); // Adjust the delay as needed
  }, [active]);

  return (
    <>
    <div className={styles.tabletabout}>
        <ul className={styles.aboutButtonTablet}>
      <div className={`${active === "mission" ? styles.active : ""} `}>
            <li
              onClick={() => setActive("mission")}
            >
              Mission
            </li>
            <div></div>
            </div>

            <div className={active === "approach" ? styles.active : ""}>
            <li
              onClick={() => setActive("approach")}
            >
              Approach
            </li>
            <div></div>
            </div>

            <div  className={active === "vision" ? styles.active : ""}>
            <li
              onClick={() => setActive("vision")}
            >
              Vision
            </li>
            <div></div>
            </div>
          </ul></div>

    <div className={styles.aboutContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.about}>
          <motion.h2 initial={{ opacity: 0, x: -20 }} animate={controls}>
            {textToDisplay[0]}
          </motion.h2>
          <motion.div
            className={styles.line}
            variants={expand}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "easeOut", duration: 1 }}
          ></motion.div>
          <motion.p initial={{ opacity: 0, x: -20 }} animate={controls}>
            {textToDisplay[1]}
          </motion.p>
        </div>
        <div className={styles.buttonImage}>
          <AnimatePresence>
          {isInView && (<ul className={styles.aboutButton}>
            <motion.li
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className={`${active === "mission" ? styles.active : ""} `}
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -80 }}
              transition={{ type: "spring" }}
              onClick={() => setActive("mission")}
            >
              Mission
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className={active === "approach" ? styles.active : ""}
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -80 }}
              transition={{ type: "spring", delay: 0.3}}
              onClick={() => setActive("approach")}
            >
              Approach
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className={active === "vision" ? styles.active : ""}
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -80 }}
              transition={{ type: "spring", delay: 0.5}}
              onClick={() => setActive("vision")}
            >
              Vision
            </motion.li>
          </ul>)}</AnimatePresence>
          <Image src={textToDisplay[3]} sizes="100vw"
        // Make the image display full width
        style={{
          borderRadius: '5rem',
          width: '90%',
          height: 'auto',
        }} />
        </div>

        <div className={styles.join}>
          <motion.p initial={{ opacity: 0, x: -20 }} animate={controls}>
            {textToDisplay[2]}
          </motion.p>

          <motion.div
            className={styles.rightShape}
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Image src={corner} className={styles.toprightCornerImage} />
            <div className={styles.bottomPart}>
              <Image
                src={corner}
                className={styles.rightCornerImage}
                sizes="100vw"
                alt="corner image"
                priority
              />
              <div className={styles.rightSquare}>
                <div className={styles.joinUs} style={{ cursor: "pointer" }}>
                  <motion.span
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => scrollToElement("donation")}
                  >
                    Join Us
                  </motion.span>
                  <span>or follow us on <a target="-blank" style={{color:"#542A00"}} href="https://www.instagram.com/utsehath/">instagram</a></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Image src={textToDisplay[4]} width={600} style={{ objectFit: "contain", borderRadius:"5rem" }} />
      </div>
    </div>
    <div className={styles.mobileAboutContainer}>
    <ul className={styles.aboutButton}>
      <div className={`${active === "mission" ? styles.active : ""} `}>
            <li
              onClick={() => setActive("mission")}
            >
              Mission
            </li>
            <div></div>
            </div>

            <div className={active === "approach" ? styles.active : ""}>
            <li
              onClick={() => setActive("approach")}
            >
              Approach
            </li>
            <div></div>
            </div>

            <div  className={active === "vision" ? styles.active : ""}>
            <li
              onClick={() => setActive("vision")}
            >
              Vision
            </li>
            <div></div>
            </div>
          </ul>
          <div className={styles.about}>
          <motion.h2 initial={{ opacity: 0, x: -20 }} animate={controls}>
            {textToDisplay[0]}
          </motion.h2>

          <div className={styles.imageDiv}>
          <Image src={textToDisplay[3]} sizes="100vh"
        // Make the image display full width
        style={{
          height: '100%',
        }} />
        </div>

          <motion.p initial={{ opacity: 0, x: -20 }} animate={controls}>
            {textToDisplay[1]}
          </motion.p>
          <div className={styles.mobileTextDivider}></div>
          <div className={styles.join}>
          <motion.p initial={{ opacity: 0, x: -20 }} animate={controls}>
            {textToDisplay[2]}
          </motion.p>
          <div className={styles.joinUs} style={{ cursor: "pointer" }}>
                  <motion.span
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => scrollToElement("donation")}
                  >
                    Join Us
                  </motion.span>
                  <span>or follow us on instagram</span>
                </div>
        </div>
        </div>
    </div>
    </>
  );
}

export default About;
