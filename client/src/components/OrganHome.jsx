import React, { useEffect } from 'react'
import axios from 'axios';
import { Box, Button, ThemeProvider } from '@mui/material';
import {useParams, Link, useNavigate} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Home = () => {
    const navigate = useNavigate();
    const LogoutButton = () => {
        axios.post('http://localhost:8000/api/user/logout', {}, {withCredentials: true})
        .then(res => {
            console.log(res);
            console.log('Logged out Successful');
            navigate("/orgs/register")
        })
        .catch(error => {
            // Handle the error
            console.log('Logout failed:', error);
        });
    }
    return (
        <div>            
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Coding Dojo
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        DevsOnDeck
                    </Typography>
                    <Button
                            onClick={LogoutButton}
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}
export default Home;
