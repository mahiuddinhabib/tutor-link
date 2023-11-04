import { Box, Rating, Stack, Typography } from "@mui/material";
import CommonProfileImg from "@/assets/profile.png";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";

const ReviewRating = () => {
  return (
    <Stack spacing={3} mt={3}>
      {[...Array(4)].map((_, index) => (
        <Box
          key={index}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            mr={2}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              src={CommonProfileImg}
              width={0}
              height={0}
              sizes="100vw"
              alt="card image"
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
            <Typography
              variant="subtitle2"
              textAlign={"center"}
              width={"max-content"}
              mt={1}
            >
              Lorem Ipsum
            </Typography>
          </Box>

          <Box>
            <Rating
              name="simple-controlled"
              value={3}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
              readOnly
              size="small"
            />
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
              voluptates. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Dolorum, voluptates. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Dolorum, voluptates.
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default ReviewRating;
