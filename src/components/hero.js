import { Box } from "@mui/material";
import React from "react";
import HeroImage from "../images/hero.svg";
import Header from "./header";
import { HeroSideContent } from "./heroSideContent";

export const Hero = () => {
  return (
    <Box>
      <Header />
      <Box position={"relative"}>
        <img
          src={HeroImage}
          height={"100%"}
          width={"100%"}
          style={{ objectFit: "cover" }}
        ></img>
        <HeroSideContent />
      </Box>
    </Box>
  );
};
