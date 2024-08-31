import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";

import { Controller, useForm } from "react-hook-form";
import axios from "axios";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const API_BASE_URL = process.env.REACT_APP_API_KEY;
  console.log(API_BASE_URL);
  const postData = async (endpoint, data) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_KEY}${endpoint}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const onSubmit = async (data) => {
    try {
      const response = await postData("api/contact/send", data);
      console.log("API response:", response);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <Box my={10}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="subtitle2" width={"50%"} mx="auto">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua
        </Typography>
        <Grid
          container
          justifyContent="center"
          spacing={2}
          px={{ xs: 0, md: 30 }}
        >
          {/* Left Column */}
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2} flexDirection={"column"}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="standard"
                  {...register("fname", {
                    required: "First name is required",
                    minLength: {
                      value: 2,
                      message: "First name must be at least 2 characters",
                    },
                  })}
                  error={!!errors.fname}
                  helperText={errors.fname?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="standard"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControl
                  variant="standard"
                  fullWidth
                  error={!!errors.budget}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Budget
                  </InputLabel>
                  <Select
                    {...register("budget", {
                      required: "Please select a budget",
                    })}
                    label="Budget"
                  >
                    <MenuItem value={5000}>5000</MenuItem>
                    <MenuItem value={10000}>10000</MenuItem>
                    <MenuItem value={15000}>15000</MenuItem>
                  </Select>
                  {errors?.budget && (
                    <Typography variant="caption" color="error">
                      {errors.budget.message}
                    </Typography>
                  )}
                </FormControl> */}
                <FormControl
                  variant="standard"
                  fullWidth
                  error={!!errors.budget}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Budget
                  </InputLabel>
                  <Controller
                    name="budget"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Please select a budget" }}
                    render={({ field }) => (
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        {...field}
                        label="Budget"
                      >
                        <MenuItem value={5000}>5000</MenuItem>
                        <MenuItem value={10000}>10000</MenuItem>
                        <MenuItem value={15000}>15000</MenuItem>
                      </Select>
                    )}
                  />
                  {errors.budget && (
                    <Typography variant="caption" color="error">
                      {errors.budget.message}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2} flexDirection={"column"}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="standard"
                  {...register("lname", {
                    required: "Last name is required",
                    minLength: {
                      value: 2,
                      message: "Last name must be at least 2 characters",
                    },
                  })}
                  error={!!errors.lname}
                  helperText={errors.lname?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone"
                  type="number"
                  variant="standard"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone number must be 10 digits",
                    },
                  })}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  variant="standard"
                  {...register("description", {
                    required: "Description is required",
                    minLength: {
                      value: 10,
                      message: "Description must be at least 10 characters",
                    },
                  })}
                  error={!!errors.description}
                  helperText={errors.description?.message}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              background: "#FF6400",
              borderRadius: "16px",
              color: "white",
              fontSize: "0.7rem",
              fontWeight: 700,
            }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};
