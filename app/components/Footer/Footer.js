import styles from "./Footer.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import corner from "../../../public/corner.png";
import time from "../../../public/time.svg";
import location from "../../../public/location.svg";
import logo from "../../../public/logo.png";

function Footer() {
  return (
    <>
      <div className={styles.mobileGm}>
        <div className={styles.gmText}>
          <p>
            Join us on general meeting every <br></br>Thursday night to learn
            and grow!
          </p>
          <div className={styles.timeLocationContainer}>
            <div className={styles.timeLocation}>
              <Image src={time} alt="time" />
              <p>7pm - 8pm</p>
            </div>
            <div className={styles.timeLocation}>
              <Image src={location} alt="location" />
              <p>Burdine Hall</p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer" className={styles.footerContainer}>
        <div className={styles.footerLinks}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/people">People</Link>
            </li>
            <li>
              <Link href="/initiatives">Initiatives</Link>
            </li>
            <li>
              <div
                // onClick={() => scrollToElement("donation")}
                style={{ cursor: "pointer" }}
              >
                <Link href="/#donation">Donation</Link>
              </div>
            </li>
            <li>
              <div
                // onClick={() => scrollToElement("footer")}
                style={{ cursor: "pointer" }}
              >
                <Link href="/#footer">Contact Us</Link>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <a
                target="_blank"
                href="mailto:sehath.ut@gmail.com"
                onclick="window.location=another.html"
              >
                Email
              </a>
            </li>
            <li>
              <a target="_blank" href=" https://www.instagram.com/utsehath/">
                Instagram
              </a>
            </li>
            {/* <li>Hornslink</li> */}
          </ul>
        </div>
        <div className={styles.gm}>
          <div className={styles.top}>
            <Image className={styles.corner} src={corner} alt="corner" />
            <div className={styles.square}>
              <div className={styles.gmText}>
                <p>
                  Join us on general meeting every <br></br>Thursday night to
                  learn and grow!
                </p>
                <div className={styles.timeLocationContainer}>
                  <div className={styles.timeLocation}>
                    <Image src={time} alt="time" />
                    <p>7pm - 8pm</p>
                  </div>
                  <div className={styles.timeLocation}>
                    <Image src={location} alt="location" />
                    <p>Burdine Hall</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image className={styles.corner} src={corner} alt="corner" />
        </div>
        <div className={styles.line}></div>
        <Image
          className={styles.logo}
          src={logo}
          alt="logo"
          width={150}
          height={"auto"}
        />
        <p className={styles.copyright}>
          Copyright © 2023 Sehath @ UT. All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
