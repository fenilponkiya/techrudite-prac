import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";

export const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  console.log(blogPosts);

  const toggle = () => {
    setShowAllBlogs((prevState) => !prevState);
  };
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_KEY}api/blog/`
        );
        setBlogPosts(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(blogPosts.data);
  return (
    <>
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Grid item>
          {" "}
          <Typography variant="h5" mb={2} fontWeight={700}>
            Blogs{" "}
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex", cursor: "pointer" }} onClick={toggle}>
          <Typography color="#3D5FDD">
            {showAllBlogs ? "view less" : "View All"}
          </Typography>{" "}
          <ArrowRightAltIcon sx={{ color: "#3D5FDD" }} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {blogPosts?.data
          ?.slice(0, showAllBlogs ? blogPosts?.data.length : 3)
          .map(
            ({
              id,
              image_url,
              short_description,
              name,
              writer_name,
              createdAt,
            }) => {
              const date = new Date(createdAt);
              const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
              };
              const formattedDate = date.toLocaleDateString("en-US", options);
              console.log(formattedDate);

              return (
                <Grid item size={{ xs: 12, md: 4 }}>
                  <Card sx={{ boxShadow: 0 }}>
                    <CardMedia
                      component="img"
                      height="170"
                      image={image_url}
                      sx={{
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                        objectFit: "cover",
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {name}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ color: "#606060" }}>
                          {formattedDate} by&nbsp;
                        </Typography>
                        <Typography color="#D0021B">{writer_name}</Typography>
                      </Box>

                      <Typography variant="body2" sx={{ color: "#606060" }}>
                        {short_description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            }
          )}
      </Grid>
    </>
  );
};
