import Navbar from "@/component/navbar/Navbar";
import { Box } from "@mui/material";
import Footer from "@/component/footer/Footer";
import Hero from "@/component/Hero";


function HOme() {
  return (
    <Box
      sx={{
        direction: 'row',
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Navbar />
      <Hero/>
      <Footer />
    </Box>
  );
}

export default HOme;
