import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import titleImage from "../../public/new3.png";
import sidPic from "../../public/sid.jpg";
import alexaPic from "../../public/alexa.jpg";
import jonahPic from "../../public/jonah.jpg";
import emilioPic from "../../public/emilio.jpg";
import antonioPic from "../../public/antonio.jpg";
import mikiePic from '../../public/mikie.jpg'
import elisePic from '../../public/elise.jpg'


const OfficerCard = ({ name, position, image, description, contact }) => {
  return (
    <div className={styles.officerCard}>
      <Image
        src={image}
        alt={name}
        quality={100}
        sizes="100vw"
        style={{
          width: "22rem",
          height: "22rem",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
      <h3>{name}</h3>
      <p>{position}</p>
      <p>{description}</p>
      <p>{contact}</p>
    </div>
  );
};

const page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.titleImage}>
        <div className={styles.titleImageContainer}>
          <Image
            src={titleImage}
            quality={100}
            alt="title"
            sizes="100vw"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
        </div>
        <h1 className={styles.title}>Our Dedicated Crew</h1>
      </div>

      <div className={styles.meetCrewContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.text}>
            <h2>Meet Our Dedicated Crew</h2>
            <p>
              Meet the driving force behind Sehath&#39;s mission to bridge the
              global healthcare education-action gap and discover their
              unwavering commitment to serving underserved communities
              worldwide.
            </p>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <OfficerCard
            name="Sid Saha"
            position="President"
            image={sidPic}
            description="Our president is a BME student with a veered interest in finance. Sid began this org after his experience with the Himalayan Health Project, where he found himself moved by the people of Ladakh."
            contact=""
          />
          <OfficerCard
            name="ALEXA LOZANO"
            position="Vice President"
            image={alexaPic}
            description="Alexa is a BME student with a special interest in medical devices and an overall dedication to improve medical practices."
            contact=""
          />
        </div>
      </div>

      <div className={styles.crewContainer}>
        <div>
          <OfficerCard
            name="JONAH GLIETMAN"
            position="OPERATIONAL DIRECTOR"
            image={jonahPic}
            description="Studying mechanical engineering and computer science, addicted to doing good deeds."
            contact=""
          />
          <OfficerCard
            name="EMILIO GOVEA"
            position="SOCIAL CHAIR"
            image={emilioPic}
            description="Improving urban landscapes through the Urban Studies major, invested in UT Sehath because of his dedication to alleviating poverty stricken communities."
            contact=""
          />
        </div>
        <div>
          <OfficerCard
            name="ANTONIO GUERRA"
            position="FUNDRAISING DIRECTOR"
            image={antonioPic}
            description="Dedicated pre-med student with a special interest in kinesiology, Anthony loves to improve the quality of life for communities."
            contact=""
          />
          <OfficerCard
            name="MIKIE MORALES"
            position="TREASURER"
            image={mikiePic}
            description="Detail oriented student who is approaching med-school with a degree in sociology."
            contact=""
          />
        </div>
      </div>

      <div className={styles.crewContainer}>
        <div>
          <OfficerCard
            name="ELISE MCMANON"
            position="TREASURER"
            image={elisePic}
            description="Elise is a pre-med student who is committed to making a difference in underserved communities."
            contact=""
          />
        </div>
      </div>
    </div>
  );
};

export default page;
