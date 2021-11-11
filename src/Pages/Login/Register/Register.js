import { Alert, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth/UseAuth';

const loginImage = {
    width: '100%',
    height: '100%',
    backgroundImage: `url("https://i.ibb.co/r2vL3Q7/download.jpg")`,
    backgroundSize: 'cover',
    margin: 0,
    padding: 0
}

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const [passwordError, setPasswordError] = useState();
    const history = useHistory()
    const { user, registerUser, isLoading, authError } = useAuth()

    const handelOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handelLoginSubmit = e => {
        if (loginData.password !== loginData.rePassword) {
            setPasswordError(<Alert severity="warning">Password is not matched</Alert>)
        }
        else {
            registerUser(loginData.email, loginData.password, loginData.name, history);
            setPasswordError('');
        }
        e.preventDefault();
    }
    return (
        <Box style={loginImage}>
            <Container sx={{ py: 12 }}>
                <Grid container spacing={2}>
                    <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} md={6}>
                        <Paper sx={{ py: 5 }} >
                            <Typography sx={{ pb: 2 }} variant="h6" display="block" gutterBottom> Register </Typography>
                            {
                                !isLoading &&
                                <form onSubmit={handelLoginSubmit}>
                                    <TextField
                                        sx={{ width: "75%", m: 1 }}
                                        id="standard-basic"
                                        type="text"
                                        label="Your Name"
                                        name="name"
                                        onBlur={handelOnBlur}
                                        variant="standard"
                                        required
                                    />
                                    <TextField
                                        sx={{ width: "75%", m: 1 }}
                                        id="standard-basic"
                                        type="email"
                                        label="Your Email"
                                        name="email"
                                        onBlur={handelOnBlur}
                                        variant="standard"
                                        required
                                    />
                                    <TextField
                                        sx={{ width: "75%", m: 1 }}
                                        id="standard-basic"
                                        label="Your Password"
                                        name="password"
                                        onBlur={handelOnBlur}
                                        type="password"
                                        variant="standard"
                                        required
                                    />
                                    <TextField
                                        sx={{ width: "75%", m: 1 }}
                                        id="standard-basic"
                                        label="Re-type Password"
                                        name="rePassword"
                                        onBlur={handelOnBlur}
                                        type="password"
                                        variant="standard"
                                        required
                                    />
                                    {
                                        passwordError &&
                                        <Grid sx={{ width: "75%", margin: "auto" }}>
                                            <Typography style={{ color: 'red', textAlign: 'start' }} variant="caption" display="block" gutterBottom>{passwordError}</Typography>
                                        </Grid>
                                    }
                                    <Button sx={{ width: "75%", mt: 4 }} variant="contained" type="submit" style={{ color: 'white', backgroundImage: 'linear-gradient(to right, #3CD3AD 15%, #4CB8C4 120%)' }}>SignUp</Button>
                                    <Typography style={{ color: 'gray', marginTop: '15px' }} variant="caption" display="block" gutterBottom>
                                        Already Have an Account! Please
                                        <NavLink style={{ paddingLeft: '5px', color: 'blue', fontWeight: 'bold', fontSize: '13px' }} to="/login">
                                            Login
                                        </NavLink>
                                    </Typography>
                                </form>
                            }
                            {
                                isLoading && <CircularProgress />
                            }
                            {
                                user?.email && <Grid sx={{ width: "75%", margin: "auto" }}>
                                    <Typography style={{ textAlign: 'start' }} variant="caption" display="block" gutterBottom><Alert severity="success">You are Register successfully!</Alert></Typography>
                                </Grid>
                            }
                            {
                                authError && <Grid sx={{ width: "75%", margin: "auto" }}>
                                    <Typography style={{ textAlign: 'start' }} variant="caption" display="block" gutterBottom><Alert severity="error">{authError}</Alert></Typography>
                                </Grid>
                            }
                        </Paper >
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src="https://i.ibb.co/yf3tjfw/video-security-concept-98292-6504.jpg" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Register;