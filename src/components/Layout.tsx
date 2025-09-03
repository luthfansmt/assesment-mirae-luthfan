import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" pl={3}>Company Dashboard</Typography>
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
