"use client";
import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Paper,
  CircularProgress,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";
import {
  useGetAllTripsQuery,
  useDeleteTripMutation,
} from "@/redux/features/trip/tripApi";

const TripManagement = () => {
  const { data: trips, isLoading } = useGetAllTripsQuery(undefined);
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

  const columns: GridColDef[] = [
    { field: "destination", headerName: "Destination", width: 300,  },
    { field: "budget", headerName: "Budget", width: 300,  },
    { field: "type", headerName: "Trip Type", width: 300,  },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      sortable: false,
      renderCell: ({ row }) => (
        <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box mx={2} my={4}>
      <Typography variant="h4" gutterBottom color={"teal"}>
        Trip Management
      </Typography>
      <Paper elevation={3} sx={{ borderRadius: 8 }}>
        <Box sx={{ height: 400, width: "100%" }}>
          {!isLoading ? (
            <DataGrid rows={trips?.data} columns={columns} />
          ) : (
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <CircularProgress />
            </Grid>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default TripManagement;
