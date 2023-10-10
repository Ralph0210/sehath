"use client";
import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import Image from "next/image";
import study from "../../public/study.png";
import corner from "../../public/corner.png";
import sideMission from "../../public/missionSide.png";
import arrow from "../../public/arrow.svg";
import { motion, useAnimation } from "framer-motion";

function About({ ...props }) {
  const { active } = props;
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
    controls.start({ opacity: 0, x: -20 }); // Animate text out
    setTimeout(() => {
      switch (active) {
        case "mission":
          setTextToDisplay([
            "Global Medical Empowerment",
            "Empower UT students to bridge education-action gap through global medical care for underserved communities.",
            "'Global Medical Empowerment' encapsulates our commitment to fostering a transformative experience for UT students. It's about empowering you to bridge the education-action gap in global healthcare.",
          ]);
          break;
        case "approach":
          setTextToDisplay([
            "Awareness & Education",
            "Raise awareness, educate locally and globally, and make meaningful impacts in healthcare.",
            "Becoming a part of our community, you'll have the chance to amplify crucial healthcare issues, ignite change, and create a brighter, healthier future for underserved communities worldwide.",
          ]);
          break;
        case "vision":
          setTextToDisplay([
            "Healthcare Equity",
            "Create a world where healthcare reaches everyone, regardless of their circumstances.",
            "Becoming a part of our community, you'll have the chance to amplify crucial healthcare issues, ignite change, and create a brighter, healthier future for underserved communities worldwide.",
          ]);
          break;
        default:
          setTextToDisplay("Default Text");
      }
      controls.start({ opacity: 1, x: 0 }); // Animate text in
    }, 300); // Adjust the delay as needed
  }, [active]);

  return (
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

        <Image src={study} width={730} />

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
                  <motion.span whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}>
                    Join Us
                  </motion.span>
                  <span>or follow us on instagram</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Image src={sideMission} width={600} style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
}

export default About;
