import { Alert, Button, Container, Grid, Paper, Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductDetails from '../ProductDetails/ProductDetails';
import useAuth from '../../../Hooks/UseAuth/UseAuth';

const purchaseBg = {
    width: '100%',
    height: '100%',
    backgroundImage: `url("https://i.ibb.co/6DB1zrW/parches-banner.jpg")`,
    backgroundSize: 'cover',
    margin: 0,
    padding: 0
}

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [success, setSuccess] = useState(false);
    const { user } = useAuth();
    const initialInfo = { name: user.displayName, email: user.email, orderId: productId, status: 'pending' }
    const [purchaseData, setPurchaseData] = useState(initialInfo);

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    const orderDetails = product.filter(service => (service._id === productId));

    const handelOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...purchaseData };
        newLoginData[field] = value;
        setPurchaseData(newLoginData);
    }
    const handelBuySubmit = e => {
        //collect data
        const givePurchase = {
            ...purchaseData
        }
        fetch(`http://localhost:5000/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(givePurchase)
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
            <Box style={purchaseBg}>
                <Container>
                    <Grid container>
                        <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} style={{ backgroundColor: 'rgb(138,121,93,.6)', margin: '2% 0' }} xs={12} md={7}>
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    {
                                        orderDetails.map(service => <Box
                                            key={service._id}>
                                            <img style={{ borderRadius: '25%' }} src={service.img} alt="" />
                                            <div style={{ marginTop: '5%', padding: '5% 0', backgroundColor: 'rgb(25,25,112,.7)' }}>
                                                <Typography sx={{ pt: 1, color: 'white' }} variant="h6" display="block" gutterBottom>Type: {service.name} </Typography>
                                                <Typography sx={{ color: 'white' }} variant="h6" display="block" gutterBottom>Price: {service.price} Tk </Typography>
                                                <Rating
                                                    name="text-feedback"
                                                    value={service.rating}
                                                    readOnly
                                                    precision={0.5}
                                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                />
                                            </div>
                                        </Box>)
                                    }
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography sx={{ pt: 3, color: 'white' }} variant="h4" display="block" gutterBottom><span style={{ fontFamily: 'Copperplate Gothic Light' }}>For Purchase <br />Your order <br /> Please Help us<br />to Give</span> <br /><span style={{ fontFamily: 'Impact', backgroundColor: 'rgb(133,109,77,.6)' }}>your Information</span> </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={5} style={{ padding: '2% 0' }}>
                            <Paper sx={{ py: 3 }}>
                                <Typography sx={{ pb: 1 }} variant="h6" display="block" gutterBottom> Proceed Your Order </Typography>
                                <form onSubmit={handelBuySubmit}>
                                    <TextField
                                        sx={{ width: "75%", m: 1 }}
                                        id="outlined-basic"
                                        type="text"
                                        name="name"
                                        label="Name"
                                        defaultValue={user.displayName}
                                        onBlur={handelOnBlur}
                                        variant="outlined"
                                        required />
                                    <TextField
                                        sx={{ width: "75%", m: 1 }}
                                        id="outlined-basic"
                                        type="email"
                                        name="email"
                                        label="Email"
                                        defaultValue={user.email}
                                        onBlur={handelOnBlur}
                                        variant="outlined"
                                        required />
                                    <TextField
                                        sx={{ width: "75%", m: 1 }}
                                        id="outlined-basic"
                                        type="text"
                                        name="city"
                                        label="Your City"
                                        onBlur={handelOnBlur}
                                        variant="outlined"
                                        required />
                                    <TextField
                                        sx={{ width: "75%", m: 1 }}
                                        id="outlined-basic"
                                        type="text"
                                        name="address"
                                        label="Your Address"
                                        onBlur={handelOnBlur}
                                        variant="outlined"
                                        required />
                                    <TextField
                                        sx={{ width: "75%", m: 1 }}
                                        id="outlined-basic"
                                        type="text"
                                        name="contact"
                                        label="Contact No"
                                        onBlur={handelOnBlur}
                                        variant="outlined"
                                        required />
                                    <Button sx={{ width: "75%", mt: 1, p: 1 }} variant="contained" type="submit" style={{ color: 'white', backgroundImage: 'linear-gradient(to right, #3CD3AD 15%, #4CB8C4 120%)' }}>Purchase</Button>
                                </form>
                                {
                                    success && <Typography style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }} variant="caption" display="block" gutterBottom><Alert severity="success">Order Proceed Successfully!</Alert></Typography>
                                }
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <ProductDetails />
        </>
    );
};

export default Purchase;