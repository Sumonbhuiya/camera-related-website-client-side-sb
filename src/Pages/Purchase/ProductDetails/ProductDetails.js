import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);

    // for show mapping purpas
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const orderDetails = product.filter(service => (service._id === productId));
    return (
        <Container>
            <Typography sx={{ fontWeight: 700, mt: 3 }} style={{ fontFamily: 'Arial narrow', color: '#171717' }} variant="h4" component="div">
                See Details About this Product
            </Typography>
            {/* product details  */}
            <img style={{ marginTop: 0, paddingTop: 0, width: '15%', height: '2px' }} src="https://i.ibb.co/3Fr2Nwk/line-right.png" alt="" />
            <Grid container>
                <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} md={7}>
                    {
                        orderDetails.map(service => <Box
                            sx={{ textAlign: 'left', p: 4 }}
                            key={service._id}>
                            <Typography style={{ color: '#414a4c', fontWeight: 'bold' }} variant="h5" display="block" gutterBottom> {service.name}s </Typography>
                            <Typography style={{ color: '#414a4c', fontFamily: 'Courier' }} variant="h6" display="block" gutterBottom><span style={{ fontWeight: 'bold' }}>Uses For:</span> {service.about} </Typography>
                            <Typography style={{ color: '#414a4c', fontFamily: 'Brushstroke' }} variant="h6" display="block" gutterBottom><span style={{ fontWeight: 'bold' }}>About {service.name}:</span> {service.describe} </Typography>
                            <Typography style={{ color: '#414a4c', fontFamily: 'Brushstroke' }} variant="h6" display="block" gutterBottom
                            ><span style={{ fontWeight: 'bold' }}>Other benefits of {service.name}:</span> {service.benefits} </Typography>
                        </Box>)
                    }
                </Grid>
                <Grid item xs={12} md={5} >
                    {
                        orderDetails.map(service => <Box
                            sx={{ p: 5 }}
                            key={service._id}>
                            <img style={{ border: '10px solid rgb(244,240,236,.7)' }} src={service.img} alt="" />
                        </Box>)
                    }
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductDetails;