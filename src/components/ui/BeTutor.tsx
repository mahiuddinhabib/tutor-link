import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Tutor from "@/assets/Tutor.png";
import React from "react";

const BeTutor = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h4"
            sx={{
              mt: 5,
              display: { xs: "static", sm: "none" },
              textAlign: "center",
            }}
          >
            Join Our Team
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={Tutor}
              width={0}
              height={0}
              sizes="100vw"
              alt="image"
              style={{ width: "400px", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            // justifyContent: { xs: "center", sm: "flex-end" },
            alignItems: "center",
          }}
        >
          <Box
            sx={
              {
                // display: "flex",
                // justifyContent: { xs: "center", sm: "flex-end" },
                // alignItems: "center",
              }
            }
          >
            <Typography
              variant="h4"
              sx={{ mb: 3, display: { xs: "none", sm: "block" } }}
            >
              Join Our Team
            </Typography>
            <Typography mb={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit,
              nostrum dolorum laboriosam natus doloremque accusantium facilis
              quam enim ad, cum deleniti labore! Nostrum voluptatum iusto ea
              nesciunt, neque optio. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Beatae, nam.
            </Typography>
            <Box sx={{display:"flex", justifyContent:{xs:"center", sm:"flex-start"}}}>
              <Button variant="contained">Join Our Team</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default BeTutor;
