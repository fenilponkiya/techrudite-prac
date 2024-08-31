import React from "react";
import process from "../images/process.svg";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { processData } from "../utils/process";

const Process = () => {
  return (
    <Box my={5}>
      <Typography variant="h5" mb={2} fontWeight={700}>
        Our Process
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {processData.map(({ step, des }, index) => (
          <Grid item key={index}>
            <Box sx={{ position: "relative" }}>
              <img src={process} alt="Process" />

              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <Grid item>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "black",
                      fontWeight: "700",
                    }}
                  >
                    {step}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontSize: "subtitle2",
                      color: "#606060",
                    }}
                  >
                    {des}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Process;
