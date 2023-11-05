"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import AllServices from "@/components/services/AllServices";
import Banner from "@/components/ui/Banner";
import BeTutor from "@/components/ui/BeTutor";
import { useServicesQuery } from "@/redux/api/serviceApi";
import { Container, CssBaseline } from "@mui/material";

export default function Home() {
  // const { data, isLoading } = useServicesQuery({});
  // console.log(data);
  return (
    <main>
      <Navbar />
      <CssBaseline />
        <Banner/>
      <Container maxWidth="lg">
        <AllServices />
        <BeTutor/>
       {/*  {[...Array(20)].map((_, index) => (
          <p key={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            harum distinctio mollitia necessitatibus! Praesentium, deserunt ea
            iste voluptates dolorem natus, non modi ab molestias magnam quod
            iure nulla perferendis velit laborum. Voluptatem, pariatur harum!
            Provident ipsam nam doloribus iste possimus.
          </p>
        ))} */}
      </Container>
      <Footer />
    </main>
  );
}
