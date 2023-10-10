"use client";
import React, { useState } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Ini from "./ini/Ini";
import Join from "./Join/Join";

const page = () => {
  const [active, setActive] = useState("mission");
  return (
    <div>
      <Hero active={active} setActive={setActive} />
      <About active={active} setActive={setActive} />
      <Ini />
      <Join />
    </div>
  );
};

export default page;
