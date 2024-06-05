import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";



const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/hero3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: "500px", md: "600px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        padding: "0 20px",
        position: "relative",
        overflow: "hidden",
        '::before': {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          color: "#FF4081",
          fontWeight: "bold",
          zIndex: 2,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          fontSize: { xs: "2.5rem", md: "3.5rem" },
        }}
      >
        Find Your Perfect Travel Buddy!
      </Typography>
      <Link href="/create-trip" passHref>
        <Button
          variant="contained"
          startIcon={<TravelExploreIcon />}
          sx={{
            bgcolor: "green",
            color: "#fff",
            "&:hover": {
              bgcolor: "purple",
            },
            zIndex: 2,
            padding: "10px 20px",
            fontSize: { xs: "1rem", md: "1.25rem" },
            mt: 2,
          }}
          size="large"
        >
          Share Your Trip
        </Button>
      </Link>
      <Box sx={{ width: '100%', maxWidth: '800px', zIndex: 2, mt: { xs: 3, md: 4 } }}>
        
      </Box>
    </Box>
  );
};

export default HeroSection;
