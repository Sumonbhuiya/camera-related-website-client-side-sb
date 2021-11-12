import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
// background images 
const serviceBg = {
    width: '100%',
    height: '100%',
    backgroundImage: `url("https://i.ibb.co/5KcQGCD/service-bg.png")`,
    backgroundSize: 'cover',
    backgroundColor: 'rgba(45,58,74, 0.7)',
    backgroundBlendMode: 'darken, luminosity',
    margin: 0,
    padding: 0
}

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // load data for seeing products
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const homeProducts = products.slice(0, 6);
    return (
        <Box style={serviceBg} sx={{ flexGrow: 1 }}>
            <Container sx={{ py: 3 }}>
                {/* header  */}
                <Typography sx={{ fontWeight: 500, pb: 2, mt: 3 }} style={{ letterSpacing: '7px', color: '#ffffff' }} variant="h6" component="div">
                    THE BEST SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 700, mb: 5 }} style={{ fontFamily: 'Helvetica', color: '#ffffff' }} variant="h4" component="div">
                    Services We’re Offering
                </Typography>
                <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* map products */}
                    {
                        homeProducts.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;