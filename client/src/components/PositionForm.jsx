import React, { useState } from 'react'
import axios from 'axios';
import './position.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
    Paper,
    FormControl,
    Box,
    AppBar,
    Toolbar,
    Typography,
    InputLabel,
    OutlinedInput,
    Button, // Add this line
    Container
} from '@mui/material';

const styles = {
    paper: {
        width: "35rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem", width: "100%"
    },
    button: {
        width: "30%", marginRight: "1rem"
    }
}

const PositionForm = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const [errors, setErrors] = useState([]);
    const [position, setPosition] = useState([]);
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

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/position', {
            name,
            description,
            skills,
            
        })
        .then(res => {
            setPosition([...position, res.data.position])
            setName("");
            setDescription("");
            setSkills("");
            navigate('/orgs/dashboard');
        })
        .catch(err => {
            if (err.response && err.response.data && err.response.data.errors) {
                setErrors(err.response.data.errors);
            } else {
                console.log(err);
            }
        });
    }

   const handleItemClick = (item) => {
  if (skills.includes(item)) {
    setSkills((prevSkills) => prevSkills.replace(item, "").trim());
  } else {
    setSkills((prevSkills) => prevSkills + "    " + item);
  }
};
  return (
    <div>
                <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar >
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
    <Container sx={{display: "flex", justifyContent: "center"}}>
    <Paper  elevation={3} style={styles.paper}>
            <div>
                <h1>Add A Position</h1>
            </div>
            <form onSubmit={onSubmitHandler}>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Name:</InputLabel>
                    <OutlinedInput type="text" onChange={ (e) => setName(e.target.value) }/>
                </FormControl>
                <FormControl variant="outlined" style={{ ...styles.input }}>
                    <InputLabel>Description</InputLabel>
                    <OutlinedInput sx={{height: '20vh'}} type="text" onChange={(e) => setDescription(e.target.value)} />
                </FormControl>

                <p>Available:</p>
                
                <div id="myListContainer">
                <ul id="myList">
                    <li onClick={() => handleItemClick("HTML")}>HTML</li>
                    <li onClick={() => handleItemClick("CSS")}>CSS</li>
                    <li onClick={() => handleItemClick("RUBY")}>RUBY</li>
                    <li onClick={() => handleItemClick("PYTHON")}>PYTHON</li>
                    <li onClick={() => handleItemClick("SQL")}>SQL</li>
                    <li onClick={() => handleItemClick("JS")}>JS</li>
                    <li onClick={() => handleItemClick("JAVA")}>JAVA</li>
                    <li onClick={() => handleItemClick("C#")}>C#</li>
                    <li onClick={() => handleItemClick("GO")}>GO</li>
                    <li onClick={() => handleItemClick("Django")}>Django</li>
                    <li onClick={() => handleItemClick("Flask")}>Flask</li>
                    <li onClick={() => handleItemClick("Sprring")}>Spring</li>
                    <li onClick={() => handleItemClick("Swift")}>Swift</li>
                    <li onClick={() => handleItemClick("PHP")}>PHP</li>
                    <li onClick={() => handleItemClick("Rust")}>Rust</li>
                    <li onClick={() => handleItemClick("Kotlin")}>Kotlin</li>
                    <li onClick={() => handleItemClick("Angular")}>Angular</li>
                    <li onClick={() => handleItemClick("React")}>React</li>
                    <li onClick={() => handleItemClick("Vue.js")}>Vue.js</li>
                    <li onClick={() => handleItemClick("TypeScript")}>TypeScript</li>
                    <li onClick={() => handleItemClick("Perl")}>Perl</li>
                    <li onClick={() => handleItemClick("R")}>R</li>
                    <li onClick={() => handleItemClick("Scala")}>Scala</li>
                    <li onClick={() => handleItemClick("MATLAB")}>MATLAB</li>
                    <li onClick={() => handleItemClick("DART")}>DART</li>
                    <li onClick={() => handleItemClick("Shell Script")}>Shell Script</li>
                    <li onClick={() => handleItemClick("Rails")}>Rails</li>
                    <li onClick={() => handleItemClick("Flutter")}>Flutter</li>
                    <li onClick={() => handleItemClick("React Native")}>React Native</li>
                    <li onClick={() => handleItemClick("Xamarin")}>Xamarin</li>
                    <li onClick={() => handleItemClick("Cobol")}>Cobol</li>
                    <li onClick={() => handleItemClick("Fortran")}>Fortran</li>
                    <li onClick={() => handleItemClick("Lisp")}>Lisp</li>
                    <li onClick={() => handleItemClick("Prolog")}>Prolog</li>
                    <li onClick={() => handleItemClick("Jaskell")}>Jaskell</li>
                    <li onClick={() => handleItemClick("Ada")}>Ada</li>
                    <li onClick={() => handleItemClick("Unity")}>Unity</li>
                    <li onClick={() => handleItemClick("PyTorch")}>PyTorch</li>
                    <li onClick={() => handleItemClick("TensorFlow")}>TensorFlow</li>
                    <li onClick={() => handleItemClick("Ionic")}>Ionic</li>
                    <li onClick={() => handleItemClick("Scikit-learn")}>Scikit-learn</li>
                    <li onClick={() => handleItemClick("Unreal Engine")}>Unreal Engine</li>
                    <li onClick={() => handleItemClick("Express")}>Express.js</li>
                    <li onClick={() => handleItemClick("Caffe")}>Caffe</li>
                    <li onClick={() => handleItemClick("Spring Boot")}>Spring Boot</li>
                    <li onClick={() => handleItemClick("Keras")}>Keras</li>
                    <li onClick={() => handleItemClick("Apache MXNet")}>Apache MXNet</li>
                    <li onClick={() => handleItemClick("Arduino")}>Arduino</li>
                    <li onClick={() => handleItemClick("Raspberry")}>Raspberry</li>
                    <li onClick={() => handleItemClick("Opencv")}>OpenCV</li>
                    <li onClick={() => handleItemClick("JavaFx")}>JavaFX</li>
                    <li onClick={() => handleItemClick("WinForms")}>WinForms</li>
                </ul>
                </div>
                
                
            <FormControl variant="outlined" style={styles.input}>
              <InputLabel for="skills">Skills:</InputLabel>
              <OutlinedInput type="text" id="skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
            </FormControl>

               
                {errors.length > 0 && (
                    <p style={{ color: 'red', listStyle: "none", display: "block" }}>
                        {errors.map((error, index) => (
                            <small style={{ color: 'red', listStyle: "none", display: "block" }} key={index}>{error}</small>
                        ))}
                    </p>
                )}
                <Button type="submit" variant="contained" color="primary" style={styles.button} onClick={() => navigate('../orgs/dashboard')}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary" style={styles.button}>
                    Create
                </Button>
            </form>
        </Paper>
    </Container>
    </div>
  )
}

export default PositionForm;