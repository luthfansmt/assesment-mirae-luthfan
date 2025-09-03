import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Link } from "react-router-dom";
import React from "react";

const drawerWidth = 240;

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMobile = window.innerWidth < 1040;

  const drawerContent = (
    <>
    <Toolbar>
        <h2 style={{ fontWeight: "bold" }}>Company</h2>
      </Toolbar>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemIcon><DashboardIcon sx={{ color: "#fff" }} /></ListItemIcon>
            <ListItemText primary="Overview" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/clients">
            <ListItemIcon><PeopleIcon sx={{ color: "#fff" }} /></ListItemIcon>
            <ListItemText primary="Clients" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/loans">
            <ListItemIcon><WorkIcon sx={{ color: "#fff" }} /></ListItemIcon>
            <ListItemText primary="Loans" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/reports">
            <ListItemIcon><BarChartIcon sx={{ color: "#fff" }} /></ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
  return (
    <>
    {isMobile ? (
        <>
          {/* Tombol menu untuk mobile */}
            <IconButton
            onClick={() => setMobileOpen(true)}
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              color: "black",
              zIndex: 2000,
              display: mobileOpen ? "none" : "block",
            }}
            >
            <MenuIcon />
            </IconButton>

          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            sx={{
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                backgroundColor: "#0D47A1",
                color: "#fff",
              },
            }}
          >
            {drawerContent}
          </Drawer>
        </>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#0D47A1", // Biru tua
              color: "#fff"
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
