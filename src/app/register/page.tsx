"use client";
import { useRegisterMutation } from "@/redux/features/register/registerApi";
import { useAppDispatch } from "@/redux/hooks";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const Register = () => {
  const [registerUser] = useRegisterMutation();
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      const profile = {
        bio: "Passionate about helping people find their lost items.",
        age: 20,
      };
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
        profile,
      };
      console.log(userInfo);
      const res: any = await registerUser(userInfo);
      console.log(res);
      if (res?.error) {
        toast.error(`${data.email} Already used`, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.success("Registration successful!", {
          id: toastId,
          duration: 2000,
        });
        router.push("/login");
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        backgroundImage: `url('/images/hero1.jpg')`, // Path to your image
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px",
          padding: "24px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          textAlign="center"
          mb={4}
          color={"#673ab7"}
          fontWeight="bold"
        >
          Travel Buddy Registration
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("name")}
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            name="name"
            required
            color="primary"
          />
          <TextField
            {...register("email")}
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            name="email"
            required
            color="primary"
          />
          <TextField
            {...register("password")}
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            name="password"
            required
            color="primary"
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              mt: 3,
              bgcolor: "#673ab7",
              "&:hover": {
                bgcolor: "#512da8",
              },
            }}
          >
            Register
          </Button>
        </form>

        <Stack sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="body1" sx={{ color: "#333" }}>
            Already have an account?{" "}
            <Button
              color="primary"
              variant="text"
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default Register;
