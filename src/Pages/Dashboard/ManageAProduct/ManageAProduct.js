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
    // load all products 
    useEffect(() => {
        const url = `https://desolate-bayou-54204.herokuapp.com/products`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [token])

    // Delete a product from products
    const handelDelete = id => {
        const permission = window.confirm('Are you sure you want to delete this order ???')
        if (permission) {
            const url = `https://desolate-bayou-54204.herokuapp.com/products/${id}`;
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
                <Table aria-label="ManageProduct table">
                    {/* table header  */}
                    <TableHead sx={{ backgroundColor: '#808080' }}>
                        <TableRow>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }}>Image</TableCell>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="left">Product Id</TableCell>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="left">Name</TableCell>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="left">Price</TableCell>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="left">Rating</TableCell>
                            <TableCell sx={{ color: '#ffffff', fontSize: 16 }} align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    {/* seeing products info in table body  */}
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                id="table-row"
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" style={{ width: '15%' }}>
                                    <img style={{ width: '40%' }} src={row.img} alt="" />
                                </TableCell>
                                <TableCell align="left">{row._id}</TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.price} Tk</TableCell>
                                <TableCell align="left">{row.rating}</TableCell>
                                <TableCell align="center"><Button sx={{ backgroundColor: '#ff4500', color: '#ffffff', px: 2 }} id="delete-button" onClick={() => handelDelete(row._id)}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default ManageAProduct;