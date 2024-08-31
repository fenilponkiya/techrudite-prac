import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const HeroSideContent = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: { xs: "18%", sm: "30%" },
        left: "40px",
        zIndex: 1,
      }}
    >
      <Grid container>
        <Grid item size={12}>
          <Typography
            fontSize={{ xs: "20px", sm: "35px" }}
            sx={{ fontWeight: "700", textTransform: "uppercase" }}
          >
            How much
            <br /> could you save?
          </Typography>
        </Grid>
        <Grid item container size={12} mb={{ xs: 1, sm: 2 }}>
          <Grid item size={{ xs: 8, sm: 4 }}>
            <Typography variant="subtitle2" sx={{ lineHeight: "normal" }}>
              Answer the questions below to get a fixed price quotation for us
              to take your accountancy hassles away from you.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          spacing={2}
          mb={{ xs: 0, sm: 2 }}
          item
          container
          size={{ xs: 6, sm: 3 }}
          sx={{
            backgroundColor: "white",
            borderRadius: "0.5rem",
            justifyContent: "center",
            textAlign: "center",
            p: 1,
            py: 2,
          }}
        >
          <Grid item>
            <Typography sx={{ fontWeight: 600 }}>
              Is your turnover expected to be more than £85k?
            </Typography>
          </Grid>
          <Grid container>
            <Grid item>
              <Button
                sx={{
                  background: "#FF6400",
                  borderRadius: "16px",
                  color: "white",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                }}
              >
                Yes{" "}
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{
                  background: "#FF6400",
                  borderRadius: "16px",
                  color: "white",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                }}
              >
                No{" "}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item size={12}>
          <Typography variant="caption">Takes less than 30 seconds </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
