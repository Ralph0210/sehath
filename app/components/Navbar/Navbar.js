"use client"
import React, {useEffect, useState} from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

function Navbar() {
    const [active, setActive] = useState(null);

    useEffect(() => {
        console.log(active)
    },[active])


  return (
    <div className={styles.nav}>
      <nav >
        <ul className={styles.ul}>
          <li className={`${styles.li} ${active === "home" ? styles.homeactive : ""}`} onClick={() => setActive("home")}>
            <Link href="/" className={styles.link}>Home</Link>
          </li>
          <li className={`${styles.li} ${active === "people" ? styles.peopleactive : ""}`} onClick={() => setActive("people")}>
            <Link href="/people" className={styles.link}>People</Link>
          </li>
          <li className={`${styles.li} ${active === "initiatives" ? styles.iniactive : ""}`} onClick={() => setActive("initiatives")}>
            <Link href="/initiatives" className={styles.link}>Initiatives</Link>
          </li>
          <li className={`${styles.li} ${active === "events" ? styles.eventsactive : ""}`} onClick={() => setActive("events")}>
            <Link href="/events" className={styles.link}>Events</Link>
          </li>
          <li className={`${styles.li} ${active === "donation" ? styles.donationactive : ""}`} onClick={() => setActive("donation")}>
            <Link href="/donation" className={styles.link}>Donation</Link>
          </li>
          <li className={`${styles.li} ${active === "contact_us" ? styles.conactive : ""}`} onClick={() => setActive("contact_us")}>
            <Link href="/contact_us" className={styles.link}>Contact Us</Link>
          </li>
          <div className={styles.animation}></div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
