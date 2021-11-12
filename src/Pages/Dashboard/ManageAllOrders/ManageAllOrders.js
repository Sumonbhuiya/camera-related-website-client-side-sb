import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/UseAuth/UseAuth';
import './ManageOrder.css'

const ManageAllOrders = () => {
    const { token } = useAuth();
    const [orders, setOrders] = useState([]);
    // load all orders 
    useEffect(() => {
        const url = `http://localhost:5000/all_orders`
        fetch(url, {
            // jwt token 
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [token])

    //Update status for user
    const handelShipped = id => {
        const permission = window.confirm('You want to accept this order???')
        if (permission) {
            const url = `http://localhost:5000/all_orders/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        fetch(`http://localhost:5000/all_orders`)
                            .then(res => res.json())
                            .then(data => setOrders(data))
                    }
                })
        }
    }

    // Delete a order from orders
    const handelDelete = id => {
        const permission = window.confirm('Are you sure you want to delete this order ???')
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
                Manage All Orders
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="ManageOrder table">
                    {/* table header  */}
                    <TableHead sx={{ backgroundColor: '#808080' }}>
                        <TableRow>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }}>Product Id</TableCell>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="left">Email</TableCell>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="left">Date</TableCell>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="left">Address</TableCell>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="left">Contact</TableCell>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="center">Status</TableCell>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    {/* show all orders in table body  */}
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
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.createdAt}</TableCell>
                                <TableCell align="left">{row.address}</TableCell>
                                <TableCell align="left">{row.contact}</TableCell>
                                {/* buttons */}
                                {
                                    row.status === 'Shipping' ?
                                        <TableCell align="center"><Button sx={{ backgroundColor: '#b0c4de', color: '#ffffff', px: 1.1 }} id="accept-button" onClick={() => handelShipped(row._id)}>{row.status}</Button></TableCell>
                                        :
                                        <TableCell align="center"><Button sx={{ backgroundColor: '#ffa812', color: '#ffffff', px: 1.5 }} id="pending-button" onClick={() => handelShipped(row._id)}>{row.status}</Button></TableCell>
                                }
                                <TableCell align="center"><Button sx={{ backgroundColor: '#ff4500', color: '#ffffff', px: 2 }} id="delete-button" onClick={() => handelDelete(row._id)}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default ManageAllOrders;