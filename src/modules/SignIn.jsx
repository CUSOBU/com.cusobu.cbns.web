import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { publicAPI } from "../services/EntityApiServices";

import {
  Avatar,
  Alert,
  Button,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { login } from "../redux/states/session.state";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const data = await publicAPI.post("/login", { email, password });
    console.log(data);

    if (data && data.token_jwt) {
      // Save token on localStorage 
      localStorage.setItem("token", data.token_jwt);

      // Save user data on localStorage
      const userData = { email: data.email, roles: data.roles };

      dispatch(login(userData));
      sessionStorage.setItem("user", email);
      sessionStorage.setItem("roles", data.roles);
      navigateTo("/remittances");
    } else {
      // Handle errors
      setError(data.error);
    }
  };

  return (
    <Grid
      item
      xs={12}
      sm={8}
      md={5}
      lg={8}
      component={Paper}
      elevation={6}
      square
    >
      <Box
        sx={{
          mt: 8,
          mx: 4,
          mb: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link variant="body2" href="/forgot">
                Forgot password?
              </Link>
            </Grid> */}
            {/* <Grid item>
              <Link variant="body2" href="/register">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default SignIn;
