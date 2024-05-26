'use client'
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { useTheme, useMediaQuery } from "@mui/material";
import logo from "@/assets/logo.png";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      (event as React.KeyboardEvent).key === "Tab"
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{ width: 250, bgcolor: "#f9f9f9" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem component="a" href="/" button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component="a" href="/about" button>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem component="a" href="/login" button>
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem component="a" href="/register" button>
          <ListItemText primary="Register" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "teal",
        borderBottom: "1px solid #333",
        boxShadow: "none",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ mr: 2 }}
          >
            <Image src={logo} alt="Travel Buddy Logo" width={40} height={40} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <Link href="/" passHref>
              Travel Buddy
            </Link>
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <>
              <Link href="/" passHref>
                <Button
                  variant="text"
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      color: "#ddd",
                    },
                  }}
                >
                  Home
                </Button>
              </Link>
              <Link href="/about" passHref>
                <Button
                  variant="text"
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      color: "#ddd",
                    },
                  }}
                >
                  About Us
                </Button>
              </Link>
              <Link href="/login" passHref>
                <Button
                  variant="text"
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      color: "#ddd",
                    },
                  }}
                >
                  Login
                </Button>
              </Link>
              <Link href="/register" passHref>
                <Button
                  variant="text"
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      color: "#ddd",
                    },
                  }}
                >
                  Register
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
