"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "../../../public/logo.png";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import Menu from "../Menu/Menu";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { scrollToElement } from '../../utils/scroll';



function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className={styles.logoContainer}>
        <Image
          src={logo}
          alt="logo"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className={styles.nav}>
        <nav>
          <ul className={styles.ul}>
            <li
              className={`${styles.li} ${
                pathname == "/" ? styles.homeactive : ""
              }`}
              onClick={() => setActive("home")}
            >
              <Link href="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li
              className={`${styles.li} ${
                pathname == "/people" ? styles.peopleactive : ""
              }`}
              onClick={() => setActive("people")}
            >
              <Link href="/people" className={styles.link}>
                People
              </Link>
            </li>
            <li
              className={`${styles.li} ${
                pathname == "/initiatives" ? styles.iniactive : ""
              }`}
              onClick={() => setActive("initiatives")}
            >
              <Link href="/initiatives" className={styles.link}>
                Initiatives
              </Link>
            </li>
            <li
              className={`${styles.li} ${
                pathname == "/events" ? styles.eventsactive : ""
              }`}
              onClick={() => setActive("events")}
            >
              <Link href="/events" className={styles.link}>
                Events
              </Link>
            </li>
            <li
              className={`${styles.li} ${styles.link}`}
              onClick={() => scrollToElement("donation")}
              style={{ cursor: "pointer" }}
            >
              <a href="/#donation" className={styles.link}>
              Donation
              </a>
            </li>
            <li
              className={`${styles.li} ${styles.link}`}
              onClick={() => scrollToElement("footer")}
              style={{ cursor: "pointer" }}
            >
              Contact Us
            </li>
            <div className={styles.animation}></div>

            <motion.li whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }} className={`${styles.li}`}>
              <motion.a
                target="-blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSePWZRsdPBlzB8T-2FO99-nZRwawLw4qEgNjHqjtJOpqIhsTw/viewform?usp=sf_link"
                className={styles.joinLink}
              >
                Join
              </motion.a>
            </motion.li>
          </ul>
        </nav>
      </div>

      <nav className={styles.mobileNav}>
        <HamburgerIcon isChecked={isChecked} setIsChecked={setIsChecked} />
        {isChecked && <Menu />}
      </nav>
    </>
  );
}

export default Navbar;
