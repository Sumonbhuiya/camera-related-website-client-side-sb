import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/UseAuth/UseAuth';
import { Button, Typography } from '@mui/material';

const MyOrder = () => {
    const { user, token } = useAuth();
    const [orders, setOrders] = useState([]);
    // for user detection 
    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email, token])

    // Cancel a order from orders
    const handelCancel = id => {
        const permission = window.confirm('Are you sure you want to cancel this order ???')
        if (permission) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining)
                    }
                })
        }
    }

    return (
        <>
            <Typography sx={{ fontWeight: 500, pb: 4, pt: 3 }} style={{ letterSpacing: '3px', color: '#d2691e' }} variant="h5" component="div">
                Your All Orders
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="myOrder table">
                    {/* table header  */}
                    <TableHead sx={{ backgroundColor: '#808080' }}>
                        <TableRow>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }}>Order Id</TableCell>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="left">Order Date</TableCell>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="left">Address</TableCell>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="left">Contact</TableCell>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="left">Status</TableCell>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    {/* see details in table body  */}
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                id="table-row"
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.orderId}
                                </TableCell>
                                <TableCell align="left">{row.createdAt}</TableCell>
                                <TableCell align="left">{row.address}</TableCell>
                                <TableCell align="left">{row.contact}</TableCell>
                                <TableCell align="left"><span style={{ backgroundColor: '#ffcf75', padding: '5%', fontSize: '16px' }}>{row.status}</span></TableCell>
                                <TableCell align="center"><Button sx={{ backgroundColor: '#ff4500', color: '#ffffff', px: 2 }} id="delete-button" onClick={() => handelCancel(row._id)}>Cancel</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default MyOrder;