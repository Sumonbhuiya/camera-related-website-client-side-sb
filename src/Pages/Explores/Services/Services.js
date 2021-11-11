import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const serviceBg = {
    width: '100%',
    height: '100%',
    backgroundImage: `url("https://i.ibb.co/9wBcF4V/service-camera-bg-2.png")`,
    backgroundSize: 'cover',
    margin: 0,
    padding: 0
}

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // load data for seeing offer
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Box style={serviceBg} sx={{ flexGrow: 1 }}>
            <Container sx={{ py: 3 }}>
                <Typography sx={{ fontWeight: 500, pb: 2, mt: 3 }} style={{ letterSpacing: '7px', color: '#e5aa70' }} variant="h6" component="div">
                    RECENT PRODUCTS
                </Typography>
                <Typography sx={{ fontWeight: 700, mb: 5 }} style={{ fontFamily: 'Helvetica', color: '#dc143c' }} variant="h4" component="div">
                    Check Out Our Services
                </Typography>
                <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={1}>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;