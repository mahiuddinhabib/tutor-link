import { Box, Button, Typography } from "@mui/material";
import React from "react";
import BannerImg from "../../assets/bannerImg.png";
import MathBG from "@/assets/Mathematics.png";
import BgVector from "@/assets/bg-vector.png";

const Banner = () => {
  return (
    <Box
      maxWidth="xl"
      mx={"auto"}
      mb={5}
      sx={{
        // position: "absolute",
        // backgroundColor: "yellow",
        width: "100%",
        height: "400px",
        backgroundImage: `url(${BannerImg.src})`,
        backgroundPosition: { xs: "center", sm: "right" },
        backgroundSize: { xs: "350px", sm: "450px", md: "600px" },
        backgroundRepeat: "no-repeat",
        // backgroundColor: `rgba(0,0,0, 0.6)`,
      }}
      //   style={{ backgroundImage: `url(${BannerImg.src})` }}
    >
      <Box
        height={"100%"}
        width={"100%"}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" },
          alignItems: "center",
          backgroundImage: { xs: "none", sm: `url(${MathBG.src})` },
          backgroundPosition: { xs: "center", sm: "left" },
          backgroundSize: { xs: "350px", sm: "450px", md: "600px" },
          backgroundRepeat: "no-repeat",
          backgroundColor: `rgba(0,0,0, 0.5)`,
        }}
      >
        <Box
          sx={{
            ml: { xs: "0px", sm: "5%", md: "18%" },
            // backgroundColor: `rgba(255,255,255, 0.6)`,
            // boxShadow: `0 0 20px 20px rgba(255,255,255,.6)`,
            // borderRadius: "50%",
            textAlign:{xs:"center", sm:"left"},
            py: 5,
            px: 3,
          }}
        >
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontSize: { xs: "1.5rem", sm: "1.7rem", md: "3rem" },
              fontWeight: "bolder",
              letterSpacing: ".3rem",
              // color: "blue",
              textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
            }}
          >
            TUTOR LINK
          </Typography>
          <p
            style={{
              color: "red",
              textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            itaque. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            itaque. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            itaque.
          </p>
          <Button
            variant="contained"
            sx={{
              boxShadow: "0px 0px 25px 1px blue",
            }}
          >
            Join us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
