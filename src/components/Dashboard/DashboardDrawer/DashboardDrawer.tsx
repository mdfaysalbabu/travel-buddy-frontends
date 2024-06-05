import React, { useEffect, useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../Sidebar/Sidebar";
import {
  Avatar,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "gray",
  color: "#fff",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 80,
  [theme.breakpoints.up("sm")]: {
    width: 80,
  },
  backgroundColor: "gray",
  color: "#fff",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  backgroundColor: "#fff",
  color: "#fff",
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  background:
    "linear-gradient(90deg, rgba(58, 123, 213, 1) 0%, rgba(0, 210, 255, 1) 100%)",
  color: "#fff",
  boxShadow: "0 3px 5px 2px rgba(0, 105, 255, .3)",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface DashboardDrawerProps {
  children: React.ReactNode;
}

const DashboardDrawer: React.FC<DashboardDrawerProps> = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const user = useAppSelector(selectCurrentUser);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoading, seIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      seIsLoading(false);
    }
  }, [user]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    const toastId = toast.loading("Logging out...");
    dispatch(logout());
    router.push("/login");
    toast.success("Logged out", { id: toastId, duration: 2000 });
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 5, ...(open && { display: "none" }) }}
          >
            <MenuIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              px: 5,
            }}
          >
            <TextField
              placeholder="Search"
              variant="outlined"
              size="small"
              sx={{
                flex: 1,
                backgroundColor: "#ffffff44",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#ffffff" }} />
                  </InputAdornment>
                ),
              }}
            />
            <Stack
              direction="row"
              alignItems="center"
              pl={"5px"}
              spacing={2}
              onClick={handleOpenUserMenu}
              sx={{ cursor: "pointer" }}
            >
              <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.mode === "dark" ? "white" : "black",
                    fontWeight: "600",
                  }}
                >
                  {!isLoading && user && user?.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#CCCCCC",
                    fontWeight: "300",
                  }}
                >
                  {!isLoading && user && user?.email}
                </Typography>
              </Box>
            </Stack>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                component={Link}
                href="/profile"
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Link href="/" passHref>
            <Typography
              variant="h4"
              sx={{ cursor: "pointer", fontFamily: "Roboto" }}
            >
              Travel Buddy
            </Typography>
          </Link>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon sx={{ fontSize: 30, color: "green" }} />
          </IconButton>
        </DrawerHeader>
        <Sidebar open={open} />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, background: "#fff", height: "100vh" }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardDrawer;
