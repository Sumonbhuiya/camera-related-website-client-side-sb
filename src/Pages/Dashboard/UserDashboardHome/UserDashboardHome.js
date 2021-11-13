import { Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/UseAuth/UseAuth';

const UserDashboardHome = () => {
    const { user } = useAuth();
    return (
        <>
            {/* normal text design for user dashboard */}
            <Typography sx={{ fontWeight: 500, pt: 3, textAlign: 'left' }} style={{ letterSpacing: '2px', color: '#d2691e' }} variant="h5" component="div">
                Dear <span style={{ fontWeight: 'bold', color: '#483c32' }}>{user.displayName}</span>,
            </Typography>
            <Typography sx={{ fontWeight: 500, pt: 2, px: 4, textAlign: 'left' }} style={{ letterSpacing: '3px', color: '#d2691e' }} variant="h5" component="div">
                Welcome to Digital Social Care Dashboard.
            </Typography>
            <Typography sx={{ fontWeight: 500, mt: 12, color: '#f50000' }} variant="h5" component="div">
                [ Ops! Dashboard home Page design is not Created Yet. <br />
                Please wait. It will coming soon! <i className="fas fa-grin-wink"></i>]
            </Typography>
            <Typography sx={{ color: '#f50000' }} variant="body2" component="div">
                [Note: Other pages are work properly]
            </Typography>
        </>
    );
};

export default UserDashboardHome;