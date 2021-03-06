import { Alert, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const AddProduct = () => {
    const [success, setSuccess] = useState(false);
    const [productData, setProductData] = useState({});

    // take input values 
    const handelOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...productData };
        newLoginData[field] = value;
        setProductData(newLoginData);
    }
    const handelProductSubmit = e => {
        //collect data
        const giveProduct = {
            ...productData
        }
        fetch(`https://desolate-bayou-54204.herokuapp.com/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(giveProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }
            });
        e.preventDefault()
    }
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={8} style={{ padding: '2% 0' }}>
                        <Paper sx={{ py: 3 }}>
                            <Typography sx={{ fontWeight: 500, pb: 4, pt: 3 }} style={{ letterSpacing: '2px', color: '#d2691e' }} variant="h5" component="div">
                                Add A New Product
                            </Typography>
                            {/* input filed for add product  */}
                            <form onSubmit={handelProductSubmit}>
                                <TextField
                                    sx={{ width: "75%", m: 1 }}
                                    id="outlined-basic"
                                    type="text"
                                    name="name"
                                    label="Camera Name"
                                    onBlur={handelOnBlur}
                                    variant="outlined"
                                    required />
                                <TextField
                                    sx={{ width: "75%", m: 1 }}
                                    id="outlined-basic"
                                    type="text"
                                    name="img"
                                    label="Image Link"
                                    onBlur={handelOnBlur}
                                    variant="outlined"
                                    required />
                                <TextField
                                    sx={{ width: "75%", m: 1 }}
                                    id="outlined-basic"
                                    type="text"
                                    name="about"
                                    label="Camera Type"
                                    onBlur={handelOnBlur}
                                    variant="outlined"
                                    required />
                                <TextField
                                    sx={{ width: "75%", m: 1 }}
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={3}
                                    type="text"
                                    name="describe"
                                    label="Add Description"
                                    onBlur={handelOnBlur}
                                    variant="outlined"
                                    required />
                                <TextField
                                    sx={{ width: "75%", m: 1 }}
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={3}
                                    type="text"
                                    name="benefits"
                                    label="Add Benefits"
                                    onBlur={handelOnBlur}
                                    variant="outlined"
                                    required />
                                <TextField
                                    sx={{ width: "75%", m: 1 }}
                                    id="outlined-basic"
                                    type="number"
                                    name="price"
                                    label="Camera Price"
                                    onBlur={handelOnBlur}
                                    variant="outlined"
                                    required />
                                <TextField
                                    sx={{ width: "75%", m: 1 }}
                                    id="outlined-basic"
                                    type="text"
                                    name="rating"
                                    label="Give Rating"
                                    onBlur={handelOnBlur}
                                    variant="outlined"
                                    required />
                                <Button sx={{ width: "50%", mt: 1, p: 1 }} variant="contained" type="submit" style={{ color: 'white', backgroundImage: 'linear-gradient(to right, #3CD3AD 15%, #4CB8C4 120%)' }}>Add Product</Button>
                            </form>
                            {
                                success && <Typography style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }} variant="caption" display="block" gutterBottom><Alert severity="success">Product Added Successfully!</Alert></Typography>
                            }
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{ mt: 8, px: 4, color: '#ff4242' }} style={{ fontFamily: 'Arial Rounded MT Bold' }} variant="h5" component="div">
                            [ When You Want to Add a Product, Then Your Added Picture Quality Must be Good And Picture Can be Hosted.<br /><br />
                            Product Information Can be Valuable And Added Some Extra Features. ]
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default AddProduct;