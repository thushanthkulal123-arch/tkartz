import { motion } from "framer-motion";

import backside from "../assets/backside.svg";
import leftFront from "../assets/left-front.svg";
import middleFront from "../assets/middle-front.svg";
import rightFront from "../assets/right-front.svg";
import cloud from "../assets/cloud.png";
import tkartz from "../assets/tkartz.svg";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1D8FE8] h-[420px]">
      {/* Cloud */}
      <img
        src={cloud}
        alt=""
        className="absolute top-6 right-24 w-[500px] opacity-90"
      />

      {/* TKARTZ */}
<div className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none">
  <motion.img
    src={tkartz}
    alt="TKARTZ"
    initial={{
      opacity: 0,
      y: 180,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
      amount: 0.3,
    }}
    transition={{
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="w-[88%]"
  />
</div>

      {/* Mountains Back */}
      <img
        src={backside}
        alt=""
        className="absolute bottom-0 left-0 w-full z-20"
      />

      {/* Left */}
      <img
        src={leftFront}
        alt=""
        className="absolute bottom-0 left-0 w-[30%] z-30"
      />

      {/* Middle */}
      <img
        src={middleFront}
        alt=""
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[42%] z-40"
      />

      {/* Right */}
      <img
        src={rightFront}
        alt=""
        className="absolute bottom-0 right-0 w-[30%] z-30"
      />

      {/* Copyright */}
      <p className="absolute bottom-4 right-6 text-white text-xs z-50">
        © 2026 TK ARTZ. All rights reserved.
      </p>

    </footer>
  );
}