import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import threadDesign from "../images/threadDesign.svg";
import { serviceData } from "../utils/service";

const Service = () => {
  return (
    <>
      <Typography variant="h5" fontWeight={600}>
        Services
      </Typography>

      <Grid
        container
        justifyContent={"center"}
        textAlign={"center"}
        spacing={5}
        my={10}
        sx={{
          backgroundImage: `url(${threadDesign})`,
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        {serviceData.map(({ path, title, desc }, index) => {
          return (
            <Grid item size={{ sm: 4 }} key={index}>
              <img src={path} style={{ marginBottom: "10px" }} />
              <Typography sx={{ mb: 2, fontWeight: 700 }}>{title}</Typography>
              <Typography variant="subtitle2" sx={{ color: "#606060", mx: 5 }}>
                {desc}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default Service;
