import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { login } from "../redux/states/session.state";

const mockUser = {
  createdAt: "2023-05-22T08:27:50.581Z",
  firstName: "Carl Mann",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/666.jpg",
  lastName: "Keebler",
  email: "Winfield9@yahoo.com",
  userName: "Marjory72",
  updatedAt: "2023-05-22T17:21:19.924Z",
  roles: ["user", "admin"],
  id: "11",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(login(mockUser));
    navigateTo("/");
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link variant="body2" href="/forgot">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link variant="body2" href="/register">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default SignIn;
