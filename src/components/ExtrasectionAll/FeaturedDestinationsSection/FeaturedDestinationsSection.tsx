import { Box, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/happy-woman-man-spend-free-time-nature-enjoy-camping-activity-hold-roasted-marshmallow-drink-coffee-have-snak-drink-together-dressed-casual-clothes.jpg";

const FeaturedDestinationsSection = () => {
  return (
    <Box mt={6} py={6} bgcolor="#f4f4f4">
      <Grid container spacing={3} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Image
              src={logo}
              alt="Trip Photo"
              width={800}
              height={600}
              layout="responsive"
              objectFit="cover"
            />
          </Box>
        </Grid>
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Box textAlign="center" px={2}>
            <Typography variant="h4" mb={3} color="#333">
              Explore Our Featured Destinations
            </Typography>
            <Typography variant="body1" mb={3} color="#666">
              Discover the most captivating and enchanting destinations
              carefully curated by our travel experts.
            </Typography>
            <Button variant="contained" color="primary">
              Start Exploring
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturedDestinationsSection;
