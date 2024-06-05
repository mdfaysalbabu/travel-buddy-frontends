"use client";
import { Container, Box, Typography, Grid, Paper, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import StarIcon from '@mui/icons-material/Star';
import ExploreIcon from '@mui/icons-material/Explore';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

const features = [
  {
    icon: <ExploreIcon sx={{ fontSize: 50, color: "#fff" }} />,
    title: "Explore Destinations",
    description: "Discover the best travel spots with detailed guides and reviews.",
  },
  {
    icon: <LocalOfferIcon sx={{ fontSize: 50, color: "#fff" }} />,
    title: "Exclusive Offers",
    description: "Get access to special deals and discounts exclusive to our users.",
  },
  {
    icon: <LocalActivityIcon sx={{ fontSize: 50, color: "#fff" }} />,
    title: "Local Activities",
    description: "Find and book activities that will make your trip unforgettable.",
  },
  {
    icon: <StarIcon sx={{ fontSize: 50, color: "#fff" }} />,
    title: "Top-rated Experiences",
    description: "Experience the best-rated tours and activities handpicked by us.",
  },
];

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const ExtraFeatureSection = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "5rem" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "Montserrat, sans-serif",
          color: "#34495e",
          fontWeight: 700,
          mb: 5,
        }}
      >
         Explores Features
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: "20px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #6a89cc 30%, #b8e994 100%)",
                  color: "#fff",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h6" align="center" sx={{ mb: 2 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" align="center">
                  {feature.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ExtraFeatureSection;
