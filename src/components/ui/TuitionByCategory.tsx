import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Link from "next/link";

const TuitionByCategory = () => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", mt: "40px" }}>
        Tuition by Category
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "space-between",
        }}
      >
        <Card
          sx={{ display: "flex", width: { xs: "100%", sm: "49%" }, mt: "2%" }}
        >
          <CardActionArea LinkComponent={Link} href={`/`}>
            <CardContent>
              <Typography
                component="div"
                variant="h5"
                textAlign="center"
                py={3}
              >
                Physics
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{ display: "flex", width: { xs: "100%", sm: "49%" }, mt: "2%" }}
        >
          <CardActionArea LinkComponent={Link} href={`/`}>
            <CardContent>
              <Typography
                component="div"
                variant="h5"
                textAlign="center"
                py={3}
              >
                Physics
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{ display: "flex", width: { xs: "100%", sm: "49%" }, mt: "2%" }}
        >
          <CardActionArea LinkComponent={Link} href={`/`}>
            <CardContent>
              <Typography
                component="div"
                variant="h5"
                textAlign="center"
                py={3}
              >
                Physics
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{ display: "flex", width: { xs: "100%", sm: "49%" }, mt: "2%" }}
        >
          <CardActionArea LinkComponent={Link} href={`/`}>
            <CardContent>
              <Typography
                component="div"
                variant="h5"
                textAlign="center"
                py={3}
              >
                Physics
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
};

export default TuitionByCategory;
