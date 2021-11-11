import { Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const footerImage = {
    width: '100%',
    height: '100%',
    backgroundImage: `url("https://i.ibb.co/zGSDLDQ/footer-bg.png")`,
    backgroundSize: 'cover',
    margin: 0,
    padding: 0
}

const Footer = () => {
    return (
        <Box style={footerImage}>
            <Container>
                <Grid sx={{ py: 5, mt: 5 }} container spacing={2}>
                    <Grid item sx={{ textAlign: 'left' }} xs={12} sm={6} md={3}>
                        <Typography sx={{ m: 1 }}>
                            <NavLink to=""> <img style={{ width: '220px', padding: '15px 0' }} src="https://i.ibb.co/sFjhgPD/logo-1.png" alt="" /></NavLink>
                        </Typography>
                        <Typography style={{ fontFamily: 'Monaco', color: '#f0f0f0' }}>
                            Security as a topic has continued to rise in popularity in the recent couple of years, and it comes as a no surprise. <br /> <br /> Security and privacy are two sides of the same coin.
                        </Typography>
                        <Typography sx={{ pt: 3, width: '75%', marginX: 'auto' }} >
                            < Link sx={{ px: 1.5, py: 1, borderRadius: '50%' }} style={{ color: '#000060', margin: '10px', backgroundColor: '#ffffff' }} href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></ Link>
                            < Link sx={{ p: 1, borderRadius: '50%' }} style={{ color: '#000060', margin: '10px', backgroundColor: '#ffffff' }} href="https://google.com/"><i className="fab fa-google-plus-g"></i></ Link>
                            < Link sx={{ py: 1, px: 1.2, borderRadius: '50%' }} style={{ color: '#000060', margin: '10px', backgroundColor: '#ffffff' }} href="https://twitter.com/Twitch"><i className="fab fa-twitter"></i></ Link>
                        </Typography>
                    </Grid>
                    <Grid item sx={{ textAlign: 'left' }} xs={12} sm={6} md={3}>
                        <Typography sx={{ m: 1, pb: 2, width: '50%', marginX: 'auto' }} style={{ fontFamily: 'Monaco', color: '#00ced1', fontWeight: 'bold' }} variant="h6" display="block" gutterBottom>
                            Useful info
                        </Typography>
                        <Typography sx={{ m: 1, width: '50%', marginX: 'auto' }} style={{ fontFamily: 'Monaco', color: '#f0f0f0' }}>
                            <i style={{ paddingRight: '8px' }} className="fas fa-check"></i> Good Quality
                        </Typography>
                        <Typography sx={{ m: 1, width: '50%', marginX: 'auto' }} style={{ fontFamily: 'Monaco', color: '#f0f0f0' }}>
                            <i style={{ paddingRight: '10px' }} className="fas fa-check"></i> Return Policy
                        </Typography>
                        <Typography sx={{ m: 1, width: '50%', marginX: 'auto' }} style={{ fontFamily: 'Monaco', color: '#f0f0f0' }}>
                            <i style={{ paddingRight: '10px' }} className="fas fa-check"></i> Quick Access
                        </Typography>
                        <Typography sx={{ m: 1, width: '50%', marginX: 'auto' }} style={{ fontFamily: 'Monaco', color: '#f0f0f0' }}>
                            <i style={{ paddingRight: '10px' }} className="fas fa-check"></i> Secure Payment
                        </Typography>
                        <Typography sx={{ m: 1, width: '50%', marginX: 'auto' }} style={{ fontFamily: 'Monaco', color: '#f0f0f0' }}>
                            <i style={{ paddingRight: '10px' }} className="fas fa-check"></i> 24/7 Support
                        </Typography>
                    </Grid>
                    <Grid item sx={{ textAlign: 'left' }} xs={12} sm={6} md={3}>
                        <Typography sx={{ m: 1, pb: 2, width: '75%', marginX: 'auto' }} style={{ fontFamily: 'Monaco', color: '#00ced1', fontWeight: 'bold' }} variant="h6" display="block" gutterBottom>
                            Information / Links
                        </Typography>
                        <Typography sx={{ m: 1, marginX: 'auto' }} style={{ width: '60%' }}>
                            <NavLink to="" style={{ textDecoration: 'none', fontFamily: 'Monaco', color: '#f0f0f0' }}> <i style={{ paddingRight: '10px' }} className="fas fa-check"></i> Home</NavLink>
                        </Typography>
                        <Typography sx={{ m: 1, marginX: 'auto' }} style={{ width: '60%' }}>
                            <NavLink to="" style={{ textDecoration: 'none', fontFamily: 'Monaco', color: '#f0f0f0' }}><i style={{ paddingRight: '10px' }} className="fas fa-check"></i> Services</NavLink>
                        </Typography>
                        <Typography sx={{ m: 1, marginX: 'auto' }} style={{ width: '60%' }}>
                            <NavLink to="" style={{ textDecoration: 'none', fontFamily: 'Monaco', color: '#f0f0f0' }}><i style={{ paddingRight: '10px' }} className="fas fa-check"></i> Partners</NavLink>
                        </Typography>
                        <Typography sx={{ m: 1, marginX: 'auto' }} style={{ width: '60%' }}>
                            <NavLink to="" style={{ textDecoration: 'none', fontFamily: 'Monaco', color: '#f0f0f0' }}><i style={{ paddingRight: '10px' }} className="fas fa-check"></i> Pricing</NavLink>
                        </Typography>
                        <Typography sx={{ m: 1, marginX: 'auto' }} style={{ width: '60%' }}>
                            <NavLink to="" style={{ textDecoration: 'none', fontFamily: 'Monaco', color: '#f0f0f0' }}><i style={{ paddingRight: '10px' }} className="fas fa-check"></i> FAQ's</NavLink>
                        </Typography>
                        <Typography sx={{ m: 1, marginX: 'auto' }} style={{ width: '60%' }}>
                            <NavLink to="" style={{ textDecoration: 'none', fontFamily: 'Monaco', color: '#f0f0f0' }}><i style={{ paddingRight: '10px' }} className="fas fa-check"></i> Privacy</NavLink>
                        </Typography>
                        <Typography sx={{ m: 1, marginX: 'auto' }} style={{ width: '60%' }}>
                            <NavLink to="" style={{ textDecoration: 'none', fontFamily: 'Monaco', color: '#f0f0f0' }}><i style={{ paddingRight: '10px' }} className="fas fa-check"></i> Terms & conditions</NavLink>
                        </Typography>
                    </Grid>
                    <Grid item sx={{ textAlign: 'left' }} xs={12} sm={6} md={3}>
                        <Typography sx={{ m: 1, pl: 3 }} style={{ fontFamily: 'Monaco', color: '#00ced1', fontWeight: 'bold' }} variant="h6" display="block" gutterBottom>
                            Contact us
                        </Typography>
                        <Typography sx={{ m: 1, pl: 3 }} style={{ fontFamily: 'Monaco', color: '#f0f0f0' }}>
                            <i style={{ paddingRight: '10px' }} className="fas fa-map-marker-alt"></i> Sejal Point, 3rd Floor, st-310 <br /><span style={{ paddingLeft: '27px' }}>Farmgate, Dhaka</span>
                        </Typography>
                        <Typography sx={{ m: 1, pl: 3 }} style={{ fontFamily: 'Monaco', color: '#f0f0f0' }}>
                            <i style={{ paddingRight: '10px' }} className="fas fa-envelope"></i> support@wesecure.com
                        </Typography>
                        <Typography sx={{ mt: 5, ml: 1, pl: 3 }} style={{ fontFamily: 'Monaco', color: '#f0f0f0' }}>
                            Call Now <br /> <br /><span style={{ backgroundImage: 'linear-gradient(to right, #3CD3AD 15%, #4CB8C4 120%)', padding: '10px 15px', color: 'white', fontWeight: 'bold', marginTop: '10px' }}>+88 01786-215963</span>
                        </Typography>
                    </Grid>
                </Grid>
                <Typography sx={{ m: 1, pb: 4 }} style={{ fontFamily: 'Monaco', color: '#f0f0f0' }}>
                    Copyright 2021 All Rights Reserved
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;