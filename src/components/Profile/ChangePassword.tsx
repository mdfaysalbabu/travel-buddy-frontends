"use client";
import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  InputAdornment,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { toast } from "sonner";
import { FieldValues, useForm } from "react-hook-form";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#673AB7", // Custom primary color (Deep Purple)
    },
    secondary: {
      main: "#FF5722", // Custom secondary color (Deep Orange)
    },
  },
});

const ChangePassword = () => {
  const { register, handleSubmit, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [changeUserPassword] = useChangePasswordMutation();
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      const updatedPassword = {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      };
      const res: any = await changeUserPassword(updatedPassword);
      if (res?.data?.success === true) {
        reset();
        toast.success("Password changed successfully!", {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container maxWidth="sm" sx={{ marginTop: "2rem" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontFamily: "Roboto, sans-serif",
            color: "#673AB7", // Deep Purple
            fontWeight: 700,
            marginBottom: "2rem",
          }}
        >
          Change Password
        </Typography>
        <Box
          sx={{
            backgroundColor: "#F9F9F9", // Light Grey
            borderRadius: "10px",
            padding: "2rem",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              label="Current Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              {...register("oldPassword")}
              sx={{ marginBottom: "1.5rem" }}
              InputProps={{
                startAdornment: <LockIcon sx={{ color: "#673AB7" }} />,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="New Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              {...register("newPassword")}
              sx={{ marginBottom: "1.5rem" }}
              InputProps={{
                startAdornment: <LockIcon sx={{ color: "#673AB7" }} />,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              sx={{
                fontFamily: "Roboto, sans-serif",
                backgroundColor: "#673AB7", // Deep Purple
                "&:hover": { backgroundColor: "#512DA8" }, // Darker shade on hover
              }}
            >
              Change Password
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ChangePassword;
