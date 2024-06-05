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
  Badge,
} from "@mui/material";
import { useBuddyRequestHistoryQuery } from "@/redux/features/buddy/buddyApi";

const TravelRequestHistory = () => {
  const { data: travelRequests } = useBuddyRequestHistoryQuery(undefined);

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
        Travel Request History
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          marginTop: "2rem",
          backgroundColor: "#f9f9f9",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#34495e" }}>
              <TableCell
                sx={{
                  color: "#ffffff",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                Destination
              </TableCell>
              <TableCell
                sx={{
                  color: "#ffffff",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {travelRequests?.data?.map((request: any, index: number) => (
              <TableRow
                key={index}
                sx={{
                  "&:nth-of-type(even)": { backgroundColor: "#f0f0f0" },
                  "&:hover": { backgroundColor: "#e0e0e0" },
                }}
              >
                <TableCell
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#34495e",
                    fontWeight: 600,
                  }}
                >
                  {request?.trip?.destination}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="dot"
                    color={
                      request.status === "APPROVED"
                        ? "success"
                        : request.status === "PENDING"
                        ? "warning"
                        : "error"
                    }
                    sx={{
                      height: "15px",
                      width: "15px",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      display: "inline-block",
                      marginLeft: "0.5rem",
                      color:
                        request.status === "APPROVED"
                          ? "#2ecc71" // Green for Approved status
                          : request.status === "PENDING"
                          ? "#f39c12" // Orange for Pending status
                          : "#e74c3c", // Red for Rejected status
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {request.status}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TravelRequestHistory;
