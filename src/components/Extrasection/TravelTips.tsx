"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";

const travelTips = [
  {
    title: "Packing Tips",
    description: "Learn how to pack efficiently for your next trip.",
    image: "/images/hero.jpg",
  },
  {
    title: "Travel Safety",
    description: "Stay safe while traveling with these essential tips.",
    image: "/images/hero1.jpg",
  },
  {
    title: "Budget Travel",
    description:
      "Discover ways to travel on a budget  experiences.",
    image: "/images/hero.jpg",
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

const TravelTipsSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom right, #f6f9fc, #e9ecf2)",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          fontWeight="bold"
          mb={4}
          sx={{ color: "#333", textTransform: "uppercase", letterSpacing: 1 }}
        >
          Travel Tips and Guides
        </Typography>
        <Grid container spacing={4}>
          {travelTips.map((tip, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={cardVariants}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: 3,
                    borderRadius: 3,
                    overflow: "hidden",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={tip.image}
                    alt={tip.title}
                    sx={{ filter: "brightness(0.85)" }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      background:
                        "linear-gradient(to bottom right, #ffffff, #f0f2f5)",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        fontWeight="bold"
                        sx={{ color: "#444", mb: 1 }}
                      >
                        {tip.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" mb={2}>
                        {tip.description}
                      </Typography>
                    </Box>
                    <Link href="#" underline="none">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "teal",
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "green",
                          },
                        }}
                        fullWidth
                      >
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TravelTipsSection;
