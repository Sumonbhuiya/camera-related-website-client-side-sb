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

const ManageAProduct = () => {
    const { token } = useAuth();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/products`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [token])

    // Delete a order from products
    const handelDelete = id => {
        const permission = window.confirm('Are you sure you want to delete this order ???')
        if (permission) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = products.filter(order => order._id !== id);
                        setProducts(remaining)
                    }
                })
        }
    }
    return (
        <>
            <Typography sx={{ fontWeight: 500, pb: 4, pt: 3 }} style={{ letterSpacing: '3px', color: '#d2691e' }} variant="h5" component="div">
                Manage All Services
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Id</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">About</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Rating</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row._id}
                                </TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.about}</TableCell>
                                <TableCell align="left">{row.price} Tk</TableCell>
                                <TableCell align="left">{row.rating}</TableCell>
                                <TableCell align="center"><Button variant="contained" onClick={() => handelDelete(row._id)}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default ManageAProduct;