import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate();
    const LogoutButton = () => {
        axios.post('http://localhost:8000/api/user/logout', {}, {withCredentials: true})
        .then(res => {
            console.log(res);
            console.log('Logged out Successful');
            navigate("/")
        })
        .catch(error => {
            // Handle the error
            console.log('Logout failed:', error);
        });
    }
    return (
        <div>
            <h1>Add your skills young dev</h1>
            <Button
                onClick={LogoutButton}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Logout
            </Button>
        </div>
    )
}

export default Home;
