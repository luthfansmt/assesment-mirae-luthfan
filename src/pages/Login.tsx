import { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy check
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <center>
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper sx={{ p: 4, width: 300 }}>
        <Typography fontWeight={'bold'} variant="h6" align="center" gutterBottom>
            Mirae Assesment
        </Typography>
        <Typography variant="h5" gutterBottom>
            Login
        </Typography>
        <TextField 
            label="Username" 
            fullWidth 
            margin="normal" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
        />
        <TextField 
            label="Password" 
            type="password" 
            fullWidth 
            margin="normal"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
            Sign In
        </Button>
      </Paper>
    </Box>
    </center>
  );
}
