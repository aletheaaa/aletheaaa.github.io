import React, { useEffect, useState } from "react";
import useIsInViewport from "../hooks/useIsInViewport";
import { useAnimation, motion } from "framer-motion";

const IntroductionVariant = {
  visible: { opacity: 1, translateX: 20, transition: { duration: 1.5 } },
  hidden: { opacity: 0, translateX: -20 },
};

const Introduction = () => {
  const controls = useAnimation();

  const ref = React.useRef<HTMLDivElement>(null);
  const isInViewport = useIsInViewport(ref);

  useEffect(() => {
    if (!ref.current) return;
    if (isInViewport) {
      controls.start("visible");
    } else {
      controls.start("hidden")
    }
  }, [isInViewport, controls]);

  return (
    <div style={{ height: "120vh", padding: "120px", position: "relative" }}>
      <div style={{ position: "absolute", top:"35%" }}>
        <motion.h1
          variants={IntroductionVariant}
          initial="hidden"
          animate={controls}
          ref={ref}
          style={{ marginBottom: "20px" }}
        >
          Hi, I am Alethea.
        </motion.h1>
        <motion.h3
          variants={IntroductionVariant}
          initial="hidden"
          animate={controls}
          ref={ref}
        >I am a undergraduate studying at SMU.</motion.h3>
      </div>
    </div>
  );
};

export default Introduction;
