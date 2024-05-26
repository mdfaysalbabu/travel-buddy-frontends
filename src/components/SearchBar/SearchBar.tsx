import { Box, TextField, Button } from "@mui/material";

const SearchBar = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        marginTop: "-40px",
        padding: "10px 20px",
        height: "auto",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.9)", // Slightly transparent background
        borderRadius: "10px", // Rounded corners
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
      }}
    >
      <TextField
        label="Destination"
        variant="outlined"
        sx={{
          width: "250px", // Adjust width
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ffffff", // Change border color to white
            },
            "&:hover fieldset": {
              borderColor: "#FF4081", // Change border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF4081", // Change border color when focused
            },
            backgroundColor: "#ffffff", // Background color of input field
            borderRadius: "10px", // Rounded corners
          },
          "& .MuiInputBase-input": {
            color: "#333", // Change font color
          },
          "& .MuiInputLabel-root": {
            color: "#333", // Label color
          },
        }}
      />
      <TextField
        label="Travel Dates"
        type="date"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        sx={{
          width: "250px", // Adjust width
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ffffff", // Change border color to white
            },
            "&:hover fieldset": {
              borderColor: "#FF4081", // Change border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF4081", // Change border color when focused
            },
            backgroundColor: "#ffffff", // Background color of input field
            borderRadius: "10px", // Rounded corners
          },
          "& .MuiInputBase-input": {
            color: "#333", // Change font color
          },
          "& .MuiInputLabel-root": {
            color: "#333", // Label color
          },
        }}
      />
      <TextField
        label="Travel Type"
        variant="outlined"
        sx={{
          width: "250px", // Adjust width
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ffffff", // Change border color to white
            },
            "&:hover fieldset": {
              borderColor: "#FF4081", // Change border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF4081", // Change border color when focused
            },
            backgroundColor: "#ffffff", // Background color of input field
            borderRadius: "10px", // Rounded corners
          },
          "& .MuiInputBase-input": {
            color: "#333", // Change font color
          },
          "& .MuiInputLabel-root": {
            color: "#333", // Label color
          },
        }}
      />
      <Button
        variant="contained"
        sx={{
          height: "60px", // Adjust height
          borderRadius: "30px", // Adjust border radius for a rounded button
          backgroundColor: "#FF4081", // Change background color
          color: "#fff", // Change font color
          padding: "0 30px", // Adjust padding
          fontSize: "1.2rem", // Adjust font size
          "&:hover": {
            backgroundColor: "#F50057", // Change hover background color
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
