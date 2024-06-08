import React, { useEffect, useState } from "react";
import useIsInViewport from "../hooks/useIsInViewport";
import { useAnimation, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Theme } from "../types/theme";

const IntroductionVariant = {
  visible: { opacity: 1, translateX: 20, transition: { duration: 1.5 } },
  hidden: { opacity: 0, translateX: -20 },
};

const Introduction = () => {
  const controls = useAnimation();

  const ref = React.useRef<HTMLDivElement>(null);
  const isInViewport = useIsInViewport(ref);

  const theme = useSelector((state: Theme) => {
    return state.theme.theme;
  });

  useEffect(() => {
    if (!ref.current) return;
    if (isInViewport) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInViewport, controls]);

  return (
    <div
      style={{
        height: "100vh",
        padding: "120px",
        position: "relative",
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <div style={{ position: "absolute", top: "35%" }}>
        <motion.h1
          variants={IntroductionVariant}
          initial="hidden"
          animate={controls}
          ref={ref}
          style={{
            marginBottom: "20px",
            color: theme === "light" ? "black" : "white",
          }}
        >
          <span id="hello" style={{ fontSize: "70px" }}>
            Hello!
          </span>
          <br />I am Alethea
        </motion.h1>
        <motion.h3
          variants={IntroductionVariant}
          initial="hidden"
          animate={controls}
          ref={ref}
          style={{ color: "gray" }}
        >
          I am a undergraduate studying at SMU.
        </motion.h3>
      </div>
    </div>
  );
};

export default Introduction;
