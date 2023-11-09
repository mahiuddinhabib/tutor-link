import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Adb, AccountCircle } from "@mui/icons-material";
import SidebarList from "./SidebarList";

const drawerWidth = 240;
const openedMixin = (theme: any) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: any) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Sidebar = () => {
  const theme = useTheme();

  const [open, setOpen] = React.useState<boolean>(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
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
      }}
    >
      <Toolbar disableGutters sx={{ mx: "auto" }}>
        <Adb sx={{ mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: open ? "flex" : "none",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          TUTOR LINK
        </Typography>
      </Toolbar>
      <Divider />
      <Divider />
      <SidebarList open={open} />
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          bottom: 0,
          width: "inherit",
          backgroundColor: "inherit",
          alignItems: "center",
          justifyContent: open ? "end" : "center",
          padding: theme.spacing(0, 1),
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ backgroundColor: "gray" }}
        >
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
