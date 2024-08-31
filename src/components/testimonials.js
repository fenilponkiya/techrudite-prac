import { Box, CardContent, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";

const Testimonials = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" mb={2} fontWeight={700}>
        Testimonials{" "}
      </Typography>
      <Grid container justifyContent={"center"} spacing={8}>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <Grid container alignItems={"center"}>
              <Grid item mr={2} pt={2} pl={2}>
                <Avatar aria-label="recipe">R</Avatar>
              </Grid>
              <Grid item>
                <Typography fontWeight={"bold"}>Josh brollins</Typography>
              </Grid>
            </Grid>
            <CardContent sx={{ color: "#5E5E5E", fontSize: 12 }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <Grid container alignItems={"center"}>
              <Grid item mr={2} pt={2} pl={2}>
                <Avatar aria-label="recipe">R</Avatar>
              </Grid>
              <Grid item>
                <Typography fontWeight={"bold"}>Josh brollins</Typography>
              </Grid>
            </Grid>
            <CardContent sx={{ color: "#5E5E5E", fontSize: 12 }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Testimonials;
