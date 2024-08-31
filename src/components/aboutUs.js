import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import AboutUs from "../images/aboutUsImage.svg";
import Grid from "@mui/material/Grid2";
import aboutUs from "../images/aboutUs.svg";

const Aboutus = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${aboutUs})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <Container>
        <Grid container alignItems={"center"} position={"absolute"} bottom={35}>
          <Grid item container size={{ xs: 12, sm: 5.5 }}>
            <Typography variant="h5" mb={2} fontWeight={700}>
              About Us
            </Typography>
            <Typography variant="subtitle2" mb={2} color="#606060">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
              sadipscing elitr
            </Typography>
            <Button
              sx={{
                background: "#FF6400",
                borderRadius: "16px",
                color: "white",
                fontSize: "0.7rem",
                fontWeight: 700,
              }}
            >
              About Us
            </Button>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={AboutUs}
                alt="About Us"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Aboutus;
