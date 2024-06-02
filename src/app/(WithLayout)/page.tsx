import HeroSection from "@/components/HeroSection/HeroSection";
import SearchBar from "@/components/SearchBar/SearchBar";
import TravelCard from "@/components/TravelCard/TravelCard";

import TravelTips from "@/components/TravelTrips/TravelTrips";

import { Container, Grid, Typography, Button } from "@mui/material";
import PostTravelTrip from "./create-trip/page";
import TravelsPage from "@/components/TravelsPage/TravelsPage";
import TravelPosts from "@/components/TravelPosts/travelPosts";
import TravelEdit from "@/components/TravelEdit/TravelEdit";
import MyProfile from "@/components/MyProfile/MyProfile";
import TravelRequestHistory from "@/components/TravelRequestHistory/TravelRequestHistory";
import TravelPostsAll from "@/components/TravelPostsAll/TravelPostsAll";
import TravelInspirationSection from "@/components/ExtrasectionAll/TravelInspirationSection/TravelInspirationSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Container maxWidth="lg">
        <SearchBar />
        <TravelTips />
        <TravelPostsAll />
        <MyProfile />
        <TravelRequestHistory />
        <TravelPosts />
        <TravelEdit />
        <TravelCard />
        <TravelsPage />
        <PostTravelTrip />
        <TravelInspirationSection />
      </Container>
    </div>
  );
};

// This is a placeholder for fetching trips. Replace with actual data fetching logic.
HomePage.getInitialProps = async () => {
  const trips = [
    // Example data
    {
      id: "1",
      destination: "Paris",
      description: "A trip to the city of love",
      startDate: "2025-06-01",
      endDate: "2025-06-07",
      photo: "/images/paris.jpg",
    },
    {
      id: "2",
      destination: "Tokyo",
      description: "Explore the bustling city",
      startDate: "2025-07-10",
      endDate: "2025-07-20",
      photo: "/images/tokyo.jpg",
    },
  ];
  return { trips };
};

export default HomePage;
