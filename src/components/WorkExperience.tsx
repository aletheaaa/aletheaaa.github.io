import React, { useEffect, useRef } from "react";
import useIsInViewport from "../hooks/useIsInViewport";
import { useAnimation, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Theme } from "../types/theme";
import WorkExperienceItem from "./WorkExperienceItem";
import useVisibility from "../hooks/useVisibility";

const ExperienceVariant = {
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  hidden: { x: "70%", opacity: 0 },
};

const ExperienceTableVariant = {
  visible: { opacity: 1, transition: { duration: 2 } },
  hidden: { opacity: 0 },
};

const ExperienceItemVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hidden: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const WorkExperience: React.FC = () => {
  const targetRef = useVisibility("WORKEXPERIENCE");

  const theme = useSelector((state: Theme) => state.theme.theme);

  const HeaderControls = useAnimation();
  const HeaderRef = useRef<HTMLDivElement>(null);
  const HeaderIsInViewport = useIsInViewport(HeaderRef);

  useEffect(() => {
    if (!HeaderRef.current) return;
    if (HeaderIsInViewport) {
      HeaderControls.start("visible");
    } else {
      HeaderControls.start("hidden");
    }
  }, [HeaderIsInViewport, HeaderControls]);

  const ExperienceTableControls = useAnimation();
  const ExperienceTableRef = useRef<HTMLDivElement>(null);
  const ExperienceTableIsInViewport = useIsInViewport(ExperienceTableRef);
  useEffect(() => {
    if (!ExperienceTableRef.current) return;
    if (ExperienceTableIsInViewport) {
      ExperienceTableControls.start("visible");
    } else {
      ExperienceTableControls.start("hidden");
    }
  }, [ExperienceTableIsInViewport, ExperienceTableControls]);

  return (
    <div
      id="experience"
      style={{
        padding: "30px 0",
        backgroundColor: theme === "light" ? "white" : "black",
      }}
      ref={targetRef}
    >
      <h2
        style={{
          textAlign: "center",
          padding: "20px 0",
          color: theme === "light" ? "black" : "white",
        }}
      >
        Past Work Experience
      </h2>
      <motion.div
        variants={ExperienceVariant}
        initial="hidden"
        animate={HeaderControls}
        ref={HeaderRef}
        style={{
          border: theme === "light" ? "1px black solid" : "1px white solid",
          width: "15%",
          margin: "auto",
          position: "relative",
          top: "-10px",
        }}
      ></motion.div>
      <motion.div
        style={{
          color: theme === "light" ? "black" : "white",
        }}
        ref={ExperienceTableRef}
        variants={ExperienceTableVariant}
        initial="hidden"
        animate={ExperienceTableControls}
      >
        <motion.div
          ref={ExperienceTableRef}
          id="experienceList"
          initial="hidden"
          animate={ExperienceTableControls}
          variants={{
            visible: {
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.1,
              },
            },
            hidden: {
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
        >
          <motion.div variants={ExperienceItemVariant}>
            <WorkExperienceItem id="jpMorgan" />
          </motion.div>
          <motion.div variants={ExperienceItemVariant}>
            <WorkExperienceItem id="zenera" />
          </motion.div>
          <motion.div variants={ExperienceItemVariant}>
            <WorkExperienceItem id="smuAF" />
          </motion.div>
          <motion.div variants={ExperienceItemVariant}>
            <WorkExperienceItem id="smuCT" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WorkExperience;
