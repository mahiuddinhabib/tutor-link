"use client";

import { useSingleServiceQuery } from "@/redux/api/serviceApi";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Image from "next/image";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import CommonImg from "@/assets/common-card-img.jpeg";
import CommonProfileImg from "@/assets/profile.png";
import CustomAccordions from "@/components/ui/CustomAccordions";
import ReviewRating from "@/components/ui/ReviewRating";
import ReviewForm from "@/components/ui/ReviewForm";

const ServiceDetailPage = ({ params }: { params: { serviceId: string } }) => {
  const serviceId = params.serviceId;
  const { data, isLoading } = useSingleServiceQuery(serviceId);
  console.log(data);

  return (
    <>
      <Navbar />
      <CssBaseline />
      <Container maxWidth="lg" sx={{ my: 3 }}>
        <Grid container spacing={2} position={"relative"}>
          <Grid item xs={12} sm={5}>
            <Card
              sx={{
                maxWidth: 400,
              }}
            >
              <CardMedia>
                <Box
                  sx={{
                    border: "1px solid",
                    borderColor: (theme) =>
                      theme.palette.mode === "dark" ? "grey.800" : "grey.300",
                    borderRadius: "50%",
                  }}
                >
                  <Image
                    src={CommonImg}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="card image"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" mb={2}>
                  $ 200 Only
                </Typography>
                {/* <CardActions> */}
                <Button size="large" variant="contained" sx={{ width: "100%" }}>
                  Book
                </Button>
                {/* </CardActions> */}
                <Stack spacing={2} mt={3}>
                  <p>
                    <CalendarMonthIcon />
                    paragraph 1
                  </p>
                  <p>paragraph 2</p>
                  <p>paragraph 3</p>
                  <p>paragraph 4</p>
                  <p>paragraph 5</p>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box>
              <Typography variant="h5">Basic XYZ by Tutor1</Typography>
              <Typography variant="body1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos vel sunt molestiae officiis porro quia suscipit
                fugit ratione dolorum magnam!
              </Typography>
              <Typography variant="h6" sx={{ mt: 5 }}>
                Tuition Conducted By
              </Typography>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box m={2}>
                    <Image
                      src={CommonImg}
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="card image"
                      style={{ width: 100, height: 100, borderRadius: "50%" }}
                    />
                  </Box>
                </CardMedia>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h6">
                    Mr. Tutor
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <p>MSc (Physics), University of Dhaka</p>
                    <p>BSc (Physics) University of Dhaka</p>
                    <p>Rating: 4.9/5</p>
                  </Typography>
                </CardContent>
              </Card>
              <Typography variant="h6" sx={{ mt: 5 }}>
                Lorem ipsum dolor sit
              </Typography>
              <Grid
                container
                sx={{
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#101010" : "grey.100",
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                  border: "1px solid",
                  borderColor: (theme) =>
                    theme.palette.mode === "dark" ? "grey.800" : "grey.300",
                  borderRadius: 1,
                }}
              >
                <Grid item xs={6}>
                  <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
                    <CalendarMonthIcon
                      fontSize="large"
                      sx={{ display: "inline" }}
                    />
                    <Typography variant="subtitle2" sx={{ ml: 2 }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
                    <CalendarMonthIcon
                      fontSize="large"
                      sx={{ display: "inline" }}
                    />
                    <Typography variant="subtitle2" sx={{ ml: 2 }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
                    <CalendarMonthIcon
                      fontSize="large"
                      sx={{ display: "inline" }}
                    />
                    <Typography variant="subtitle2" sx={{ ml: 2 }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
                    <CalendarMonthIcon
                      fontSize="large"
                      sx={{ display: "inline" }}
                    />
                    <Typography variant="subtitle2" sx={{ ml: 2 }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Typography variant="h6" sx={{ mt: 5 }}>
                Perquisite for this course
              </Typography>
              <Box
                sx={{
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#101010" : "grey.100",
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                  border: "1px solid",
                  borderColor: (theme) =>
                    theme.palette.mode === "dark" ? "grey.800" : "grey.300",
                  borderRadius: 1,
                }}
              >
                <Stack spacing={2} p={2}>
                  <p>paragraph 4</p>
                  <p>paragraph 5</p>
                </Stack>
              </Box>
              <Typography variant="h6" sx={{ mt: 5 }}>
                Frequently Ask Questions
              </Typography>
              <CustomAccordions />
              <Typography variant="h6" sx={{ mt: 5 }}>
                Review and Ratings
              </Typography>
              <ReviewRating />
              <ReviewForm />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ServiceDetailPage;
