import { useServicesQuery } from "@/redux/api/serviceApi";
import React from "react";
import ClickableCard from "../ClickableCard";
import { Box, Grid } from "@mui/material";

const AllServices = () => {
  const { data, isLoading } = useServicesQuery({});
  console.log(data);
  return (
    <Box>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Services</h1>
      <Grid container spacing={4}>
        {data?.services?.map((service:any) => (
          <Grid item xs={12} sm={6} md={4}
            key={service?.id}
            sx={{display:"flex", justifyContent:"center"}}
            // justifyContent={"center"}
            // alignItems={"center"}
          >
            <ClickableCard key={service?.id} service={service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllServices;
