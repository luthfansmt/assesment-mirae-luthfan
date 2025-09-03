import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Overview", path: "/" },
  { label: "Assets", path: "/assets" },
  { label: "Clients", path: "/clients" }
];

export default function Layout({ children }: { children: React.ReactNode }) {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" sx={{ width: 100 }}>
        <Toolbar />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.path} component={Link} to={item.path}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Company Dashboard</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              onClick={handleLogout}
              sx={{
                backgroundColor: "white",
                color: "black",
                px: 3,
                py: 1,
                borderRadius: 1,
                "&:hover": {
                backgroundColor: "grey"
                }
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Box p={2}>{children}</Box>
      </Box>
    </Box>
  );
}
