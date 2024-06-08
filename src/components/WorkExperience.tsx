import React, { useCallback, useEffect, useRef } from "react";
import useIsInViewport from "../hooks/useIsInViewport";
import { useAnimation, motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Theme } from "../types/theme";

const ProjectListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  font-size: 20px;
  display: block;
`;

const WorkExperience = () => {
  const theme = useSelector((state: Theme) => {
    return state.theme.theme;
  });

  return (
    <div
      id="experience"
      style={{
        padding: "75px 0",
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <motion.h2
        initial="hidden"
        style={{
          textAlign: "center",
          padding: "20px 0",
          color: theme === "light" ? "black" : "white",
        }}
      >
        Past Work Experience
      </motion.h2>
      <div
        style={{
          border: theme == "light" ? "1px black solid" : "1px white solid",
          width: "15%",
          margin: "auto",
          position: "relative",
          top: "-10px",
        }}
      ></div>
    </div>
  );
};

export default WorkExperience;
