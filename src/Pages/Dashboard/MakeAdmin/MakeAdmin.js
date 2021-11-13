import { Alert, Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/UseAuth/UseAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [adminSuccess, setAdminSuccess] = useState(false)
    const { token } = useAuth();

    const handelOnBlur = e => {
        setEmail(e.target.value)
    }
    // check jwt token and admin status
    const handelAdminSubmit = e => {
        const user = { email };
        fetch(`https://desolate-bayou-54204.herokuapp.com/users/admin`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('')
                    setAdminSuccess(true);
                }
            })
        e.preventDefault()
    }
    return (
        <>
            {/* admin input field  */}
            <Typography sx={{ pb: 2 }} variant="h5" display="block" gutterBottom> Make an Admin </Typography>
            <form onSubmit={handelAdminSubmit}>
                <TextField
                    sx={{ width: "60%", m: 1 }}
                    label="Your Email"
                    type="email"
                    name="email"
                    onBlur={handelOnBlur}
                    variant="standard"
                    required
                />
                <Box sx={{ width: '60%', mx: 'auto', display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button style={{ backgroundImage: 'linear-gradient(to right, #778899 15%, #a9a9a9 120%)' }} type='submit' variant="contained">Make Admin</Button>
                </Box>
            </form>
            {
                adminSuccess && <Box sx={{ width: "60%", margin: "auto", pt: 2 }}>
                    <Typography style={{ textAlign: 'start' }} variant="caption" display="block" gutterBottom><Alert severity="success">Admin Added Successfully</Alert></Typography>
                </Box>
            }
            {/* Admin warning note */}
            <Box>
                <Typography sx={{ fontWeight: 500, mt: 8, color: '#f50000' }} variant="h5" component="div">
                    [ Note: If you Want to Make an User Admin,<br />
                    you Need to Verify that User First <i className="fas fa-exclamation-triangle"></i> ]
                </Typography>
                <Typography sx={{ color: '#f50000' }} variant="body2" component="div">
                    [If He/She Accept Our Terms & Conditions, Then You Give Admin Permission]
                </Typography>
            </Box>
        </>
    );
};

export default MakeAdmin;