"use client";

import styles from "./Ini.module.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import leh from "../../public/leh.png";
import austin from "../../public/austin.png";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Ini() {
  const [active, setActive] = useState("L");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 }, // Start with opacity 0 and slight Y translation
    visible: { opacity: 1, y: 0 }, // Fade in and move up smoothly
  };

  const { scrollYProgress } = useScroll();

  return (
    <div className={styles.initiativeContainer}>
      <h2 className={styles.initiativesTitle}>Our initiatives</h2>
      <div className={styles.initiatives}>
        <div
          className={`${active === "L" ? styles.active : ""} ${
            styles.leftContainer
          }`}
          onClick={() => setActive("L")}
        >
          <Image src={leh} alt="leh" quality={100} />
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
                with a focus on oral hygiene, vision care, and women's health.
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
          <Image src={austin} alt="austin" />
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
                In partnership with the Himalayan Health Project, we aim to
                address critical healthcare needs in the region of Leh, Ladakh,
                with a focus on oral hygiene, vision care, and women's health.
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ini;
