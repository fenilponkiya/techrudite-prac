import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Container, Divider, Typography } from "@mui/material";
import logo from "../images/logo.svg";
import axios from "axios";

export const Footer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchFooterDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_KEY}api/settings/fetch-frontend-details`
        );
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchFooterDetails();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <Box
      sx={{
        backgroundColor: "#E7F1F2",
        pb: 3,
        pt: 10,
        px: { xs: 2, sm: 4, md: 5 },
      }}
    >
      <Container>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography variant="body1" fontWeight={700} gutterBottom>
              Tagline will go here. Lorem ipsum dolor sit amet…
            </Typography>
            <Typography variant="body2">
              Inquiry Email : {data?.data?.inquiry_mail}
            </Typography>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ display: { xs: "none", md: "block" } }}
          />
          <Grid item container size={{ xs: 12, md: 5 }}>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Typography variant="caption" fontWeight={700} gutterBottom>
                Address
              </Typography>
              <Typography variant="body2" color="#606060">
                {data?.data?.address}
              </Typography>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Typography variant="caption" fontWeight={700} gutterBottom>
                Contacts
              </Typography>
              <Typography variant="body2" color="#606060">
                {data?.data?.contact_no}
              </Typography>
              <Typography variant="body2" color="#606060">
                {data?.data?.contact_mail}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          mt={4}
        >
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={6}
            spacing={2}
            justifyContent="space-around"
          >
            <Typography variant="body1">About</Typography>
            <Typography variant="body1">Blogs</Typography>
            <Typography variant="body1">Contact</Typography>
            <Typography variant="body1">Service</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Typography variant="body2">© 2022. All rights reserved</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
