"use client";

import { ChangeEvent, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Link as MuiLink,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CssBaseline,
} from "@mui/material";
import { Adb, Menu as MenuIcon } from "@mui/icons-material";
import SearchBar from "./SearchBar";
import Link from "next/link";

const routeOptions: { label: string; href: string }[] = [
  { label: "Products", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];
const userOptions: { label: string; href: string }[] = [
  { label: "Profile", href: "/profile" },
  { label: "Account", href: "/account" },
  { label: "Dashboard", href: "/dashboard" },
];

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); //remove it when implementing authentication

  const handleDrawerToggle = () => {
    setMobileMenu((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <SearchBar
        handleSearch={handleSearch}
        sxProp={{ border: 1, borderRadius: 1, marginX: 1 }}
      />
      <List onClick={handleDrawerToggle}>
        {routeOptions.map(({ label, href }) => (
          <Link key={label} href={href}>
            <ListItem key={label} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" component="nav">
      <CssBaseline />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Adb sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              // container={container}
              variant="temporary"
              open={mobileMenu}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: 220,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          <Adb sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {routeOptions.map(({ label, href }) => (
              <Link key={label} href={href}>
                <Button
                  onClick={handleDrawerToggle}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {label}
                </Button>
              </Link>
            ))}
          </Box>

          <SearchBar
            handleSearch={handleSearch}
            sxProp={{ mx: 2, display: { xs: "none", md: "flex" } }}
          />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="user options">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {[
                userOptions.map(({ label, href }) => (
                  <Link key={label} href={href}>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{label}</Typography>
                    </MenuItem>
                  </Link>
                )),
                <MenuItem
                  key="logout"
                  onClick={() => {
                    setAnchorElUser(null);
                    setLoggedIn(false);
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>,
              ]}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
