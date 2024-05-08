import { Box, Button, Checkbox, FormControlLabel, InputBase, Link, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate hook for navigation

  const submitHandle = (e: any) => {
    e.preventDefault();
    console.log(`Email : ${email} and Password : ${password}`);
    setEmail("");
    setPassword("");
    navigate("/home");
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        background: "linear-gradient(to bottom right, rgb(150, 225, 234), white)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2
      }}
    >
     
      {/* Sign-in Box */}
      <Box
        p={4}
        sx={{
          width: "100%",
          background: "rgba(255, 255, 255, 0.2)", // Adjust opacity for glassmorphism effect
          backdropFilter: "blur(10px)", // Apply backdrop filter for glassmorphism effect
          maxWidth: "380px",
          borderRadius: "15px",
          zIndex: 1, 
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )", // Adjust box shadow for glassmorphism effect
          border:"1px solid rgba( 255, 255, 255, 0.18 )", // Adjust border color for glassmorphism effect
        }}
      >
        <Typography variant="h2" mb={3} fontSize="1.25rem" sx={{ color: "gray" }} fontWeight="bold">
          Sign Up
        </Typography>
        <Box component="form" sx={{ color: "black" }} onSubmit={submitHandle}>
          <InputBase
            required
            placeholder="Email address"
            type="email"
            fullWidth
            sx={{
              mb: 2,
              padding: "5px 10px",
              background: "#fff",
              fontSize: "15px",
              borderRadius: "15px",
              color: "GrayText",
              border:"1px solid rgba( 255, 255, 255, 0.18 )", 
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBase
            required
            placeholder="Password"
            type="password"
            fullWidth
            sx={{
              mb: 1,
              padding: "5px 10px",
              background: "#fff",
              fontSize: "15px",
              borderRadius: "15px",
              border:"1px solid rgba( 255, 255, 255, 0.18 )", 
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
            sx={{ color: "gray" }}
          />
         <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              borderRadius: "15px",
              background: "rgba(3, 169, 244, 0.87)",
              "&:hover": {
                background: "#fff",
                color: "rgba(33, 85, 114, 0.69)", 
                border: "2px solid rgba(33, 85, 114, 0.69)", 
              },
            }}
            type="submit"
          >
            Sign In
          </Button>

          <Box>
            <Typography fontWeight={300} mt={2}>
              <Link href="#" underline="hover" sx={{ color: "gray" }}>
                Forgot Password
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
