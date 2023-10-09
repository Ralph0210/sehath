'use client'

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import sideMission from "../../public/missionSide.png";
import study from "../../public/study.png";
import Image from 'next/image';

const Page = () => {
  return (
    <div style={{width: "730px"}}>
      <Carousel showStatus={false} autoPlay={true} infiniteLoop={true} interval={2000} showThumbs={false} stopOnHover={false} showIndicators={false}>
        <div>
          <Image src={study} width={730}/>
        </div>
        <div>
          <Image src={sideMission} width={730}/>
        </div>
      </Carousel>
    </div>
  );
};

export default Page;
