import { Box, Typography, Grid, Paper } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/happy-family-holding-travel-icons-ticket.jpg";

const TravelExperienceSection = () => {
  return (
    <Box mt={8} py={6} bgcolor="#f5f5f5">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box textAlign={{ xs: "center", md: "right" }} pr={{ md: 6 }}>
            <Typography variant="h4" gutterBottom>
              Discover Your Next Adventure
            </Typography>
            <Typography variant="body1" paragraph>
              Let us inspire your wanderlust with captivating stories and
              breathtaking destinations.
            </Typography>
            <Typography variant="body1" paragraph>
              From the tranquil beaches to the majestic mountains, theres a
              world of adventure waiting for you.
            </Typography>
            <Typography variant="body1" paragraph>
              Explore our curated collection of travel experiences and start
              planning your dream getaway today!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center">
            <Paper elevation={4}>
              <Image
                src={logo}
                alt="Trip Photo"
                width={800}
                height={600}
                layout="responsive"
                objectFit="cover"
              />
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TravelExperienceSection;
