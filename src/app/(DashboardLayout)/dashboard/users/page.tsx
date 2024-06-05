'use client'
import React from "react";
import {
  Box,
  Typography,
  CircularProgress,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  useChangeUserRoleMutation,
  useChangeUserStatusMutation,
  useGetAllUserQuery,
} from "@/redux/features/auth/authApi";
import { toast } from "sonner";


const customTheme = createTheme({
  palette: {
    primary: {
      main: "#4caf50", 
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const UserManagement = () => {
  const { data, isLoading } = useGetAllUserQuery(undefined);
  const [changeStatus] = useChangeUserStatusMutation();
  const [changeRole] = useChangeUserRoleMutation();

  const handleStatusChange = async (
    event: React.ChangeEvent<{ value: unknown }>,
    userId: string
  ) => {
    const newStatus = event.target.value as string;
    const updateStatus = { userId, status: { status: newStatus } };
    const toastId = toast.loading("Changing status...");

    try {
      const res = await changeStatus(updateStatus);
      if (res?.data?.success === true) {
        toast.success("Status changed successfully", { id: toastId });
      }
    } catch (error) {
      toast.error("Failed to change status", { id: toastId });
    }
  };

  const handleRoleChange = async (
    event: React.ChangeEvent<{ value: unknown }>,
    userId: string
  ) => {
    const newRole = event.target.value as string;
    const updateRole = { userId, role: { role: newRole } };
    const toastId = toast.loading("Changing role...");

    try {
      const res = await changeRole(updateRole);
      if (res?.data?.success === true) {
        toast.success("Role changed successfully", { id: toastId });
      }
    } catch (error) {
      toast.error("Failed to change role", { id: toastId });
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 280 },
    { field: "email", headerName: "Email", width: 280 },
    {
      field: "status",
      headerName: "Status",
      width: 280,
      renderCell: (params) => (
        <select
          value={params.value}
          onChange={(event) => handleStatusChange(event, params.row.id)}
          style={{
            borderRadius: "5px",
            padding: "8px",
            backgroundColor: "#ffc107", 
            color: "#ffffff", 
            border: "none",
            width: "100%", 
            textAlign: "center", 
          }}
        >
          <option value="ACTIVE">Active</option>
          <option value="DEACTIVE">Deactive</option>
        </select>
      ),
    },
    {
      field: "role",
      headerName: "Role",
      width: 280,
      renderCell: (params) => (
        <select
          value={params.value}
          onChange={(event) => handleRoleChange(event, params.row.id)}
          style={{
            borderRadius: "5px",
            padding: "8px",
            backgroundColor: "#4caf50",
            color: "#ffffff", 
            border: "none",
            width: "100%", 
            textAlign: "center",
          }}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>
      ),
    },
  ];

  return (
    <Box my={2} width="100%">
      {isLoading ? (
        <Box textAlign="center">
          <CircularProgress color="primary" />
          <Typography>Loading...</Typography>
        </Box>
      ) : (
        <ThemeProvider theme={customTheme}>
          <Box
            my={2}
            width="100%"
            minHeight="300px" 
            maxHeight="80vh" 
            sx={{
              "& .MuiDataGrid-root": {
                borderRadius: "10px", 
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Box shadow
                overflow: "hidden", 
                "& .MuiDataGrid-cell": {
                  padding: "12px", 
                  textAlign: "center", 

                },
              },
            }}
          >
            <DataGrid
              rows={data?.data || []}
              columns={columns}
              getRowId={(row) => row.id}
              autoHeight
              hideFooter
            />
          </Box>
        </ThemeProvider>
      )}
    </Box>
  );
};

export default UserManagement;
