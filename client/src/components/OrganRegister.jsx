import React, {useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const  SignUp = (props) => {
  const [orgName, setorgname] = useState("");
  const [firstName, setfirstname] = useState("");
  const [lastName, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [errors, setErrors] = useState([]);
  // const { user, SetUser } = props;
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
  
    // Create an array to store validation errors
    const validationErrors = [];
  
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      validationErrors.push("Passwords do not match. Please try again.");
    }
  
    if (!orgName) {
      validationErrors.push("Organization Name is required");
    }
    if (!firstName) {
      validationErrors.push("First Name is required");
    }
    if (!lastName) {
      validationErrors.push("Last Name is required");
    }
    if (!email) {
      validationErrors.push("Email is required");
    }
    if (!address) {
      validationErrors.push("Address is required");
    }
    if (!city) {
      validationErrors.push("City is required");
    }
    if (!state) {
      validationErrors.push("State is required");
    }
    if (!password) {
      validationErrors.push("Password is required");
    }
    if (password.length < 8) {
      validationErrors.push("Password must be at least 8 characters");
    }
  
    // Set the validation errors
    setErrors(validationErrors);
  
    // Check if there are any validation errors
    if (validationErrors.length > 0) {
      return;
    }
  
    // Rest of the code for form submission
    axios.post('http://localhost:8000/api/user/register', {
      orgName,
      firstName,
      lastName,
      email,
      address,
      city,
      state,
      password,
      confirmPassword
    }, { withCredentials: true })
      .then(res => {
        // Handle the response
        console.log(res);
        setorgname("");
        setfirstname("");
        setlastname("");
        setEmail("");
        setAddress("");
        setCity("");
        setState("");
        setPassword("");
        setConfirmpassword("");
        navigate("/orgs/dashboard")
      })
      .catch(error => {
        // Handle the error
        console.log(error);
      });
  };
  
  return (
    
    <ThemeProvider theme={defaultTheme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DevsOnDeck
          </Typography>
          <Link sx={{padding: 3}} href="/devs/login" color="secondary" variant="body2">
            Dev Login
          </Link>
          <Link href="/orgs/login" color="secondary" variant="body2">
            Org Login
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <h1>Organization Sign Up</h1>
          <Box component="form" onSubmit={onSubmitHandler} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="orgname"
              label="Organization Name"
              name="orgname"
              autoComplete="orgname"
              autoFocus
              onChange={(e) => setorgname(e.target.value)}
            />
          <div style={{display: "flex"}}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="First Name"
              name="firstname"
              autoComplete="firstname"
              autoFocus
              onChange={(e) => setfirstname(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastname"
              autoComplete="lastname"
              autoFocus
              onChange={(e) => setlastname(e.target.value)}
            />
          </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
              autoFocus
              onChange={(e) => setAddress(e.target.value)}
            />

            <div style={{display: "flex"}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="city"
              label="City"
              name="city"
              autoComplete="city"
              autoFocus
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="state"
              label="State"
              name="state"
              autoComplete="state"
              autoFocus
              onChange={(e) => setState(e.target.value)}
            />
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmpassword"
              label="ConfirmPassword"
              type="password"
              id= "confirmpassword"
              autoComplete="current-password"
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
             {errors.length > 0 && (
                <p style={{ color: 'red', listStyle: "none", display: "block" }}>
                  {errors.map((error, index) => (
                    <small style={{ color: 'red', listStyle: "none", display: "block" }} key={index}>{error}</small>
                  ))}
                </p>
              )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Register
            </Button>
            <Link href="/orgs/register" variant="body2">
                    Need to Sign Up as a Developer?
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;