import React, {useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
    const defaultTheme = createTheme();

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/login', {
            email,
            password
        },  {withCredentials: true})
        .then(res => {
            // Handle the response
            console.log(res);
            setEmail("");
            setPassword("");
            navigate("/devs/skills/languages")
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
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DevsOnDeck
          </Typography>
          <Link sx={{padding: 3}} href="/" color="secondary" variant="body2">
            Dev Registration
          </Link>
          <Link href="/orgs/register" color="secondary" variant="body2">
            Org Registration
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Box component="form" noValidate onSubmit={onSubmitHandler} sx={{ mt: 3 }}>
                <h1> Welcome Back, Developer!</h1>
                <p>Let's Connect You To A Job!</p>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Log In
                </Button>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
    );
}

export default SignIn;