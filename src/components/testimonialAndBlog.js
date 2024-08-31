import { Box, Container } from "@mui/material";
import React from "react";
import { Blogs } from "./blogs";
import Testimonials from "./testimonials";

export const TestimonialAndBlog = () => {
  return (
    <Container>
      <Box my={10}>
        <Testimonials />
        <Blogs />
      </Box>
    </Container>
  );
};
