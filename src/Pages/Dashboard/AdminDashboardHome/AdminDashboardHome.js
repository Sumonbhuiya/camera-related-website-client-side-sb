import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/UseAuth/UseAuth';
import { Box } from '@mui/system';

const AdminDashboardHome = () => {
    const { token } = useAuth();
    const [users, setUsers] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        // load data for see feedback
        fetch(`https://desolate-bayou-54204.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => setFeedbacks(data));
    }, [])
    // load all users 
    useEffect(() => {
        const url = `https://desolate-bayou-54204.herokuapp.com/users`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [token])
    return (
        <>
            <Grid container>
                <Grid item xs={12} md={6} style={{ padding: '2% 0' }}>
                    <Typography sx={{ fontWeight: 500, pb: 4, pt: 3 }} style={{ letterSpacing: '3px', color: '#d2691e' }} variant="h5" component="div">
                        Users Who Take Our Services
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="users table">
                            {/* table header  */}
                            <TableHead sx={{ backgroundColor: '#808080' }}>
                                <TableRow>
                                    <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="left">Name</TableCell>
                                    <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="left">Email</TableCell>
                                </TableRow>
                            </TableHead>
                            {/* show all users in table body  */}
                            <TableBody>
                                {users.map((row) => (
                                    <TableRow
                                        id="table-row"
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.displayName}
                                        </TableCell>
                                        <TableCell align="left">{row.email}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box style={{ padding: '3% 0' }}>
                        <Typography sx={{ fontWeight: 500, pt: 3, pb: 4, color: '#893f45' }} variant='h5'>
                            Recent Activities
                        </Typography>
                        {/* map for users review  */}
                        {
                            feedbacks.map(review =>
                                <Grid container sx={{ pb: 2 }} key={review._id}>
                                    <Grid item xs={3} sm={3} md={3}>
                                        <Typography sx={{ color: '#ffffff', textAlign: 'right', mr: 2 }} variant="h6" gutterBottom component="div">
                                            <i style={{ border: '1px solid #ffffff', backgroundColor: '#ff4040', padding: '8px', borderRadius: '50%' }} className="far fa-user-circle"></i>
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={{ textAlign: 'left' }} xs={8} sm={8} md={8}>
                                        <Typography variant="subtitle1" sx={{ color: '#6b6b6b' }} gutterBottom component="div">
                                            {review.says}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: '#ababab' }} gutterBottom component="div">
                                            {review.createdAt}
                                        </Typography>
                                    </Grid>
                                </Grid>)
                        }
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default AdminDashboardHome;