"use client";

import styles from "./Ini.module.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import leh from "../../public/leh.png";
import austin from "../../public/austin.png";
import { motion, useScroll, useMotionValueEvent  } from "framer-motion";

function Ini() {
  const [active, setActive] = useState("L");

  const { scrollYProgress } = useScroll()

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
          <Image src={leh} alt="leh" quality={100}/>
          <div className={styles.overlay}>
          <h2>The Leh Ladakh Mission</h2>
          {active==='L' && <p>In partnership with the Himalayan Health Project, we aim to address critical healthcare needs in the region of Leh, Ladakh, with a focus on oral hygiene, vision care, and women's health.</p>}
          </div>
        </div>
        <div
          className={`${active === "A" ? styles.active : ""} ${
            styles.rightContainer
          }`}
          onClick={() => setActive("A")}
        >
          <Image src={austin} alt="austin" />
          <div className={styles.overlay}>
          <h2>Austin</h2>
          {active==='A' && <p>In partnership with the Himalayan Health Project, we aim to address critical healthcare needs in the region of Leh, Ladakh, with a focus on oral hygiene, vision care, and women's health.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ini;
