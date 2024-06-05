"use client";

import React from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import Image from "next/image";
import {
  useDeleteTripMutation,
  useGetUserTripQuery,
} from "@/redux/features/trip/tripApi";
import { toast } from "sonner";

const TravelPosts = () => {
  const { data: travelPosts } = useGetUserTripQuery(undefined);
  const [deleteTrip] = useDeleteTripMutation();

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting trip...");

    try {
      const res = await deleteTrip(id);
      if (res?.data?.success === true) {
        toast.success("Trip deleted successfully", { id: toastId });
      }
    } catch (error) {
      toast.error("Failed to delete trip", { id: toastId });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "Montserrat, sans-serif",
          color: "#2c3e50",
          fontWeight: 700,
        }}
      >
        My Travel Posts
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          marginTop: "2rem",
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#34495e" }}>
              <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Photo
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Destination
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Description
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Travel Dates
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {travelPosts?.data?.map((post: any, index: number) => (
              <TableRow
                key={index}
                sx={{ "&:nth-of-type(even)": { backgroundColor: "#ffffff" } }}
              >
                <TableCell>
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "5px",
                    }}
                  >
                    <Image
                      src={post?.photo}
                      alt={post?.destination}
                      layout="fill"
                    />
                  </Box>
                </TableCell>
                <TableCell>{post?.destination}</TableCell>
                <TableCell>{post?.description}</TableCell>
                <TableCell>
                  {post?.startDate} - {post?.endDate}
                </TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    color="secondary"
                    onClick={() => handleDelete(post?.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TravelPosts;
