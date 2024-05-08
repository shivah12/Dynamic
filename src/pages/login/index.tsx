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
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2
      }}
    >
      {/* Ellipse */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        {/* Blurred background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(106, 13, 173, 0.5)", 
            backgroundSize: "cover",
            filter: "blur(10px)",
            zIndex: -1,
          }}
        />
      </Box>

      {/* Sign-in Box */}
      <Box
        p={4}
        sx={{
          width: "100%",
          background: "#DEDEDE",
          maxWidth: "380px",
          borderRadius: "15px",
          zIndex: 1, 
        }}
      >
        <Typography variant="h2" mb={3} fontSize="1.25rem" sx={{ color: "black" }} fontWeight="bold">
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
    background: "#2F243C",
    "&:hover": {
      background: "#fff",
      color: "#6A0DAD", 
      border: "2px solid #6A0DAD", 
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
