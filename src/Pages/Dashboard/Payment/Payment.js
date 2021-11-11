import { Typography } from '@mui/material';
import React from 'react';

const Payment = () => {
    return (
        <div>
            <Typography sx={{ fontWeight: 500, pb: 4, pt: 3 }} style={{ letterSpacing: '2px', color: '#212121' }} variant="h5" component="div">
                Payment system coming soon...
            </Typography>
            <Typography sx={{ color: '#800000' }} variant="h1" component="div">
                <i className="far fa-frown"></i>
            </Typography>
        </div>
    );
};

export default Payment;