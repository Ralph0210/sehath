"use client";

import React, { Component, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import leh from "../../public/lehWide.jpg";
import austin from "../../public/austinWide.jpg";
import corner from "../../public/corner.png";
import lehScenic from "../../public/leh_mountain.png";
import flags from "../../public/flags.png";
import austin1 from '../../public/austin1.jpg'
import austin2 from '../../public/austin2.jpg'
import { scrollToElement } from "../utils/scroll";



import styles from "./page.module.css";
import { motion, useAnimation } from "framer-motion";

const Page = () => {
  const controls = useAnimation();

  const [active, setActive] = useState("leh");
  const fadeIn = {
    hidden: { opacity: 1, y: 80 }, // Start with opacity 0 and slight Y translation
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Fade in and move up smoothly
  };

  useEffect(() => {
    controls.start({ opacity: 0, x: 20 }); // Animate text out
    setTimeout(() => {
      controls.start({ opacity: 1, x: 0 }); // Animate text in
    }, 300); // Adjust the delay as needed
  }, [active]);
  return (
    <>
      <div className={styles.initiativePageCotainer}>
        <div className={styles.iniImageTitleContainer}>
          {active === "leh" ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={controls}
              exit={{ opacity: 0, x: 20 }}
            >
              <Image
              // unoptimized={true}
                className={styles.iniImage}
                quality={100}
                src={leh}
                sizes="100vh"
                priority
                // style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={controls}
              exit={{ opacity: 0, x: 20 }}
            >
              <Image
              // unoptimized={true}
                className={styles.iniImage}
                quality={100}
                src={austin}
                sizes="100vh"
                priority
                // style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </motion.div>
          )}

          <h1 className={styles.iniTitle}>Our Initiatives</h1>

          <motion.div
            className={styles.leftShape}
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Image
              src={corner}
              className={styles.cornerImage}
              sizes="100vw"
              alt="corner image"
              priority
            />
            <div className={styles.bottomPart}>
              <div className={styles.leftSquare}>
                <ul className={styles.aboutButton}>
                  <motion.li
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    className={`${active === "leh" ? styles.active : ""} `}
                    onClick={() => setActive("leh")}
                  >
                    Leh Ladakh
                  </motion.li>
                  <motion.li
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    className={active === "austin" ? styles.active : ""}
                    onClick={() => setActive("austin")}
                  >
                    Austin
                  </motion.li>
                </ul>
              </div>
              <Image
                src={corner}
                className={styles.cornerImage}
                sizes="100vw"
                alt="corner image"
                priority
              />
            </div>
          </motion.div>
        </div>

{active === "leh" ?  <div className={styles.meetCrewContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.text}>
              <h2>Ladakh Unveiled: Our Himalayan Healthcare Initiative</h2>
              <p style={{paddingBottom: "5rem"}}>

                Welcome to Sehath&#39;s Ladakh Initiative, where we are committed to
                making a meaningful impact on the health and well-being of the
                Ladakh region. Our focus is on oral health, vision care, and
                women&#39;s health. Explore how we are bringing awareness and
                positive change to this beautiful Himalayan region.
              </p>
              <h2>The Ladakh Mission</h2>
              <p>
                In May 2024, we are partnering with the Himalayan Health Project
                for a mission in Leh, Ladakh. This mission centers around two
                crucial areas: dental health and menstrual and breast health.
              </p>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <Image
              src={lehScenic}
              className={styles.scenicImage}
              sizes="100vw"
              alt="scenic image"
              style={{
                width: "60%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "5rem",
              }}
            />
            <p className={styles.scenicText}>Volunteers trek through the Ladakh mountains to deliver healthcare and hope.</p>
          </div>
        </div> : <div className={styles.meetCrewContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.text}>
              <h2>Our Austin Initiative</h2>
              <p style={{paddingBottom: "5rem"}}>
              Welcome to Sehath&apos;s&apos; Austin Initiatives, where we are dedicated to fostering positive change and well-being within our local community. Our mission centers around building a healthier, more connected Austin through various initiatives. Discover how we&#39;re creating awareness and making a difference right here in our vibrant city.
              </p>
              <h2>Current Initiatives</h2>
              <p>
              In collaboration with local partners and community members, we&#39;re actively engaged in several key initiatives.
              </p>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <Image
              src={austin2}
              className={styles.scenicImage}
              sizes="100vw"
              alt="scenic image"
              style={{
                width: "60%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "5rem",
              }}
            />
            <p className={styles.scenicText}>Blanton Art Museum on the University of Texas campus in Austin, Texas.</p>
          </div>
        </div>}
       
{active === "leh" ? <div className={styles.meetCrewContainer}>
          <div className={styles.leftContainer2}>
          <h2>Dental Health</h2>
            <div className={styles.text2}>
              <div><h3>Awareness Program: </h3><p>Our team educates young adults on oral hygiene, nutrition, and the harms of tobacco use using visual aids.</p></div>
              <div><h3>Diagnosis: </h3><p>Dentists assess patients&#39; dental health to determine treatment needs, with our team assisting with notes and administrative work.</p></div>
              <div><h3>Prevention Program: </h3><p>Dentists provide fluoride application and pit and fissure sealants to reduce dental caries, with our team assisting in these procedures.</p></div>
            </div>
          </div>
        </div>  : <div className={styles.meetCrewContainer}>
          <div className={styles.leftContainer2}>
          <h2>Dental Health</h2>
            <div className={styles.text2}>
              <div><h3>1. Health and Wellness Workshops:</h3><p>Through a series of workshops, we&#39;re educating Austin residents on essential health and wellness practices. From nutrition and exercise to mental health awareness, we&#39;re empowering individuals to lead healthier lives.</p></div>
              <div><h3>2. Medical Outreach Programs:</h3><p>Our medical outreach programs bring vital healthcare services to underserved areas of Austin. By providing medical check-ups, access to essential medications, and health education, we aim to bridge the healthcare gap in our community.</p></div>
              <div><h3>3. Educational Support:</h3><p>We&#39;re committed to supporting local schools and students in Austin. From providing school supplies to mentoring, our educational initiatives are helping to create a brighter future for Austin&#39;s youth.</p></div>
            </div>
          </div>
        </div> }
        
{active=== "leh" ? <div className={styles.meetCrewContainer}>
          <div className={styles.leftContainer2}>
          <h2>Menstrual and Breast Health</h2>
            <div className={styles.text3}>
              <div><p>Collaborating with Dr. Shazeen, we&#39;re planning interactive programs for young adults, focusing on puberty, menstrual awareness, and breast health.</p></div>
              <div><p>Dr. Shazeen&#39;s Notes provide details on the schools and villages we target, the number of students we aim to reach, and a rough cost breakdown for the project.</p></div>
            </div>
          </div>
        </div> : null}
        

{ active === 'leh' ? <div className={styles.meetCrewContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.text}>
              <h2>Get Involved</h2>
              <p style={{paddingBottom: "5rem"}}>
              Join us in making a difference in Ladakh. Whether you&#39;re interested in volunteering, supporting our mission financially, or simply learning more about what we do, there&#39;s a way for everyone to get involved.
              </p>

              <h2>Stay Informed</h2>
              <p style={{paddingBottom: "5rem"}}>
              Reach out to us with any questions or inquiries. We&#39;re eager to hear from you and discuss how you can contribute to our Ladakh Initiative.
              </p>

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
          <div className={styles.rightContainer}>
            <Image
              src={flags}
              className={styles.scenicImage}
              sizes="100vw"
              alt="scenic image"
              style={{
                width: "60%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "5rem",
              }}
            />
            <p className={styles.scenicText}>Himalayan Prayer Flags Dancing in the Wind</p>
          </div>
        </div> : <div className={styles.meetCrewContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.text}>
              <h2>Get Involved</h2>
              <p style={{paddingBottom: "5rem"}}>
              Join us in shaping a healthier and more connected Austin. Whether you&#39;re interested in volunteering, contributing to our mission, or learning more about what we do, there are numerous ways for you to be a part of this positive change.
              </p>

              <h2>Stay Informed</h2>
              <p style={{paddingBottom: "5rem"}}>
              Stay updated on our current projects and upcoming events by subscribing to our newsletter and following us on social media. Together, we can make a significant impact on the well-being of our Austin community.
              </p>

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
          <div className={styles.rightContainer}>
            <Image
              src={austin1}
              className={styles.scenicImage}
              sizes="100vw"
              alt="scenic image"
              style={{
                width: "60%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "5rem",
              }}
            />
            <p className={styles.scenicText}></p>
          </div>
        </div>}
       

      </div>
    </>
  );
};

export default Page;
