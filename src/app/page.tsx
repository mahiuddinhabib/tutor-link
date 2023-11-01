import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Container, CssBaseline } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CssBaseline />
      <Container maxWidth="lg">
        {[...Array(20)].map((_, index) => (
          <p key={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            harum distinctio mollitia necessitatibus! Praesentium, deserunt ea
            iste voluptates dolorem natus, non modi ab molestias magnam quod
            iure nulla perferendis velit laborum. Voluptatem, pariatur harum!
            Provident ipsam nam doloribus iste possimus.
          </p>
        ))}
      </Container>
      <Footer />
    </main>
  );
}
