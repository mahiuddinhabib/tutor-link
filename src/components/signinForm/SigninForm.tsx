"use client";

import {
  Avatar,
  Box,
  Button,
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
import { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas/login";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";

type FormValues = {
  email: string;
  password: string;
};

const SigninForm = () => {
const [userLogin] = useUserLoginMutation();
const router = useRouter();


  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      // console.log(data);
      const res = await userLogin({ ...data }).unwrap();
    //   console.log(res);
      if (res?.accessToken) {
        router.push("/");
      }
      storeUserInfo({ accessToken: res?.accessToken });
      console.log(res);
    } catch (err: any) {
      console.error(err.message);
    }
    // console.log(data);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      width={{ xs: "100vw", sm: "90vw", lg: "50vw" }}
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
              Sign In
            </Typography>
            <Box
              //   component="form"
              //   noValidate
              //   onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Form
                submitHandler={onSubmit}
                resolver={yupResolver(loginSchema)}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormInputText
                      required
                      // fullWidth
                      // id="email"
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      // autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormInputText
                      required
                      // fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      placeholder="Password"
                      // id="password"
                      // autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Form>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="#">Don&#39;t have an account? Sign up</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SigninForm;
