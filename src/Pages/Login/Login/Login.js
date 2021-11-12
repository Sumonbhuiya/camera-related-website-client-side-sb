import { Alert, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth/UseAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer'
// background image
const loginImage = {
    width: '100%',
    height: '100%',
    backgroundImage: `url("https://i.ibb.co/r2vL3Q7/download.jpg")`,
    backgroundSize: 'cover',
    margin: 0,
    padding: 0
}

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    // take form input 
    const handelOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    //form submit
    const handelLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handelGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <>
            <Navigation />
            <Box style={loginImage}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} md={6}>
                            <Paper sx={{ py: 5 }} >
                                <Typography sx={{ pb: 2 }} variant="h6" display="block" gutterBottom> Login </Typography>
                                {
                                    // input form 
                                    !isLoading &&
                                    <form onSubmit={handelLoginSubmit}>
                                        <TextField
                                            sx={{ width: "75%", m: 1 }}
                                            id="standard-basic"
                                            label="Your Email"
                                            type="email"
                                            name="email"
                                            onChange={handelOnChange}
                                            variant="standard"
                                            required
                                        />
                                        <TextField
                                            sx={{ width: "75%", m: 1 }}
                                            id="standard-basic"
                                            label="Your Password"
                                            name="password"
                                            onChange={handelOnChange}
                                            type="password"
                                            variant="standard"
                                            required
                                        />
                                        <Grid sx={{ width: "75%", margin: "auto" }}>
                                            <Typography style={{ color: 'red', textAlign: 'start' }} variant="caption" display="block" gutterBottom> Forget your password? </Typography>
                                        </Grid>
                                        <Button sx={{ width: "75%", mt: 3 }} variant="contained" type="submit" style={{ color: 'white', backgroundImage: 'linear-gradient(to right, #3CD3AD 15%, #4CB8C4 120%)' }}>Signin</Button>
                                        <Typography style={{ color: 'gray', marginTop: '15px' }} variant="caption" display="block" gutterBottom>
                                            New User? Please
                                            <NavLink style={{ paddingLeft: '5px', color: 'blue', fontWeight: 'bold', fontSize: '13px' }} to="/register">
                                                Register
                                            </NavLink>
                                        </Typography>
                                    </form>
                                }
                                {/* show messages  */}
                                {
                                    isLoading && <CircularProgress />
                                }
                                {
                                    user?.email && <Grid sx={{ width: "75%", margin: "auto" }}>
                                        <Typography style={{ textAlign: 'start' }} variant="caption" display="block" gutterBottom><Alert severity="success">Login successfully!</Alert></Typography>
                                    </Grid>
                                }
                                {
                                    authError && <Grid sx={{ width: "75%", margin: "auto" }}>
                                        <Typography style={{ textAlign: 'start' }} variant="caption" display="block" gutterBottom><Alert severity="error">{authError}</Alert></Typography>
                                    </Grid>
                                }
                                <p sx={{ mt: 3 }}>-----------------------------------</p>
                                <Button onClick={handelGoogleSignIn} variant="contained" type="submit" style={{ color: 'white', backgroundImage: 'linear-gradient(to right, #3CD3AD 15%, #4CB8C4 120%)' }}><i style={{ paddingRight: '8px', fontSize: '25px', color: '#ff7f50' }} className="fab fa-google" ></i> Google SignIn</Button>
                            </Paper >
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img style={{ width: '100%', height: '100%' }} src="https://i.ibb.co/yf3tjfw/video-security-concept-98292-6504.jpg" alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Login;