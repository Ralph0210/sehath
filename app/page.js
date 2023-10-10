"use client";
import React, { useState, useRef } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Ini from "./ini/Ini";
import Join from "./Join/Join";
import { useInView } from "framer-motion";

const page = () => {
  const buttonRef = useRef(null);
  const [active, setActive] = useState("mission");
  const [isInView, setIsInView] = useState(false);

  return (
    <div>
      <Hero active={active} setActive={setActive} heroRef={buttonRef} setIsInView={setIsInView}/>
      <About active={active} setActive={setActive} isInView={isInView}/>
      <Ini />
      <Join />
    </div>
  );
};

export default page;
