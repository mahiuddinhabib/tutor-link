import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ReviewForm = () => {
  const [review, setReview] = useState("");
  const [value, setValue] = useState(0);
  const [display, setDisplay] = useState(false);

  const handleSubmitReview = () => {
    console.log(value, review);
    setReview("");
    setDisplay(false);
    setValue(0);
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={1}
      p={3}
      mt={5}
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
      <Typography variant="h6">Rate this Course</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue: any) => {
          setValue(newValue);
          setDisplay(true);
        }}
        size="large"
        sx={{
          fontSize: "3rem",
          "& .MuiRating-icon": {
            // width: "80px",
            marginX: "20px",
          },
        }}
      />
      <Box width={"100%"} display={display ? "static" : "none"}>
        <TextField
          id="outlined-multiline-static"
          label="Review"
          multiline
          rows={3}
          sx={{ my: 1 }}
          onChange={(e) => setReview(e.target.value)}
          value={review}
          fullWidth
        />
        <Button variant="contained" fullWidth onClick={handleSubmitReview}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewForm;
