"use client";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { TUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { motion } from "framer-motion";

const LoginPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [userLogin] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");

    const userInfo = {
      email: data.email,
      password: data.password,
    };
    const res = await userLogin(userInfo).unwrap();
    const user = verifyToken(res.data.token) as TUser;
    dispatch(setUser({ user, token: res.data.token }));
    toast.success("Logged in", { id: toastId, duration: 2000 });
    router.push(`/`);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        backgroundImage: `url("/images/hero1.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "0 16px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "16px",
            padding: "32px",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
            width: "100%",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            textAlign="center"
            mb={4}
            color="primary"
            fontWeight="bold"
            sx={{
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Travel Buddy Login
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("email")}
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              name="email"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#FF8E53",
                  },
                },
                "& label.Mui-focused": {
                  color: "#FF8E53",
                },
              }}
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#FE6B8B",
                  },
                },
                "& label.Mui-focused": {
                  color: "#FE6B8B",
                },
              }}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "#FF8E53",
                },
              }}
            >
              Login
            </Button>
          </form>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="body1" sx={{ color: "#333" }}>
              Dont have an account?{" "}
              <Button
                color="primary"
                variant="text"
                onClick={() => router.push("/register")}
              >
                Create an account
              </Button>
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default LoginPage;
