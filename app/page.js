"use client";
import React, { useState } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Ini from "./ini/ini";

const page = () => {
  const [active, setActive] = useState("mission");
  return (
    <div>
      <Hero active={active} setActive={setActive} />
      <About active={active} setActive={setActive} />
      <Ini />
    </div>
  );
};

export default page;
