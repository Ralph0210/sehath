"use client";

import React, { useState, useEffect } from "react";
import styles from "./Join.module.css";
import { motion } from "framer-motion";
import gift from "../../public/gift.svg";
import network from "../../public/network.svg";
import award from "../../public/award.svg";
import Image from "next/image";
import arrow from "../../public/arrow.svg";

function Join() {
  const [active, setActive] = useState("join");
  useEffect(() => {
    console.log(active);
  }, [active]);

  const expand = {
    hidden: { opacity: 1, width: "0%" },
    visible: { opacity: 1, width: "70%" },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.joinContainer}>
      <h1 className={styles.joinTitle}>Join Us</h1>
      <div>
        <ul className={styles.joinWay}>
          <motion.li
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setActive("join")}
            className={active === "join" ? styles.active : ""}
          >
            Become a member
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setActive("donation")}
            className={active === "donation" ? styles.active : ""}
          >
            Donation
          </motion.li>
        </ul>
      </div>
      {active === "join" ? (
        <div className={styles.member}>
          <div className={styles.joinForm}>
            <div className={styles.leftContainer}>
              <p>
                Are you passionate about making a positive impact in global
                healthcare and serving underserved communities? <br></br>Join us
                at Sehath and become a part of a dedicated community of
                changemakers.
              </p>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.benefits}>
                <Image src={gift} alt="gift" width={30} height={30} />
                <motion.p
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Free T-Shirt
                </motion.p>
              </div>
              <div className={styles.lineContainer2}>
                <div className={styles.space}></div>
                <motion.div
                  variants={expand}
                  initial="hidden"
                  whileInView="visible"
                  className={styles.line}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </div>
              <div className={styles.benefits}>
                <Image src={network} alt="network" width={30} height={30} />
                <motion.p
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  Network and Connect
                </motion.p>
              </div>
              <div className={styles.lineContainer2}>
                <div className={styles.space}></div>
                <motion.div
                  variants={expand}
                  initial="hidden"
                  whileInView="visible"
                  className={styles.line}
                  transition={{ duration: 0.8, delay: 0.3 }}
                ></motion.div>
              </div>
              <div className={styles.benefits}>
                <Image src={award} alt="award" width={30} height={30} />
                <motion.p
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  The Leh Ladakh mission
                </motion.p>
              </div>
              <div className={styles.lineContainer2}>
                <div className={styles.space}></div>
                <motion.div
                  variants={expand}
                  initial="hidden"
                  whileInView="visible"
                  className={styles.line}
                  transition={{ duration: 1.2, delay: 0.6 }}
                ></motion.div>
              </div>
            </div>
          </div>
          <motion.a
            className={styles.signUp}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            target="-blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSePWZRsdPBlzB8T-2FO99-nZRwawLw4qEgNjHqjtJOpqIhsTw/viewform?usp=sf_link"
          >
            <span>Membership Sign Up</span>
            <Image src={arrow} alt="arrow" width={30} height={30} />
          </motion.a>
        </div>
      ) : null}
    </div>
  );
}

export default Join;
