"use client";

import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import React from "react";
import Link from "next/link";
import Form from "../forms/Form";
import { FormInputText } from "../forms/FormInputText";

const SignupForm = () => {
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      width={{xs:"100vw", sm:"90vw", lg:"50vw"}}
      mx="auto"
    >
      <Grid container>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={5}
          sx={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={7} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              //   component="form"
              //   noValidate
              //   onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Form
                submitHandler={
                  onSubmit
                } /* resolver={yupResolver(loginSchema)} */
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormInputText
                      name="firstName"
                      label="First Name"
                      placeholder="Your First Name"
                      // id="firstName"
                      required
                      // fullWidth
                      // autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormInputText
                      // fullWidth
                      // id="lastName"
                      label="Last Name"
                      name="lastName"
                      // autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormInputText
                      required
                      // fullWidth
                      // id="email"
                      label="Email Address"
                      name="email"
                      // autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormInputText
                      required
                      // fullWidth
                      name="password"
                      label="Password"
                      // type="password"
                      // id="password"
                      // autoComplete="new-password"
                    />
                  </Grid>
                  {/* <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid> */}
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </Form>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="#">Already have an account? Sign in</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignupForm;
