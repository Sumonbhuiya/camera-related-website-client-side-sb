import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <Box>
            {/* not found page  */}
            <img style={{ height: "50%", width: "100%" }} src="https://i.ibb.co/k9NNpRV/404-error-page.jpg" alt="" />
            <Typography sx={{ pt: 2, pb: 5 }} style={{ letterSpacing: '2px', color: '#ff0800', fontWeight: 'bold' }} variant="h5" component="div">
                Page Not Found
            </Typography>
            {/* home page back link */}
            <Typography style={{ color: 'gray', marginTop: '15px' }} variant="h6" display="block" gutterBottom>
                Go to
                <NavLink to="/home" style={{ textDecoration: 'none', paddingLeft: '10px' }}>
                    <Button sx={{ color: '#1d2951', mx: 1, fontSize: 16, border: 1, backgroundColor: 'gray' }} color="inherit">Home</Button>
                </NavLink>
            </Typography>
        </Box>
    );
};

export default NotFound;