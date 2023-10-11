"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "../../../public/logo.png";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import Menu from "../Menu/Menu";

function Navbar() {
  const [active, setActive] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);

  return (
    <>
    <div className={styles.logoContainer}>
      <Image
        src={logo}
        alt="logo"
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
      /></div>
      <div className={styles.nav}>
        <nav>
          <ul className={styles.ul}>
            <li
              className={`${styles.li} ${
                active === "home" ? styles.homeactive : ""
              }`}
              onClick={() => setActive("home")}
            >
              <Link href="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li
              className={`${styles.li} ${
                active === "people" ? styles.peopleactive : ""
              }`}
              onClick={() => setActive("people")}
            >
              <Link href="/people" className={styles.link}>
                People
              </Link>
            </li>
            <li
              className={`${styles.li} ${
                active === "initiatives" ? styles.iniactive : ""
              }`}
              onClick={() => setActive("initiatives")}
            >
              <Link href="/initiatives" className={styles.link}>
                Initiatives
              </Link>
            </li>
            <li
              className={`${styles.li} ${
                active === "events" ? styles.eventsactive : ""
              }`}
              onClick={() => setActive("events")}
            >
              <Link href="/events" className={styles.link}>
                Events
              </Link>
            </li>
            <li
              className={`${styles.li} ${
                active === "donation" ? styles.donationactive : ""
              }`}
              onClick={() => setActive("donation")}
            >
              <Link href="/donation" className={styles.link}>
                Donation
              </Link>
            </li>
            <li
              className={`${styles.li} ${
                active === "contact_us" ? styles.conactive : ""
              }`}
              onClick={() => setActive("contact_us")}
            >
              <Link href="/contact_us" className={styles.link}>
                Contact Us
              </Link>
            </li>
            <div className={styles.animation}></div>
          </ul>
        </nav>
      </div>

      <nav className={styles.mobileNav}>
          <HamburgerIcon isChecked={isChecked} setIsChecked={setIsChecked}
          />
          {isChecked && <Menu />}
      </nav>
    </>
  );
}

export default Navbar;
