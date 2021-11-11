import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import '../Products/Product/Product.css'

const headerImage = {
    width: '100%',
    height: '100%',
    backgroundImage: `url("http://wordpress.zcube.in/wesecure/wp-content/uploads/2021/07/slider_img02.jpg")`,
    backgroundSize: 'cover',
    margin: 0,
    padding: 0
}

const HomeTopBanner = () => {
    return (
        <Box sx={{ pt: .3 }}>
            <Box style={headerImage}>
                <Container className="hover-grid">
                    <Grid container className="hover-look" sx={{ display: 'flex', alignItems: 'center', textAlign: 'start' }}>
                        <Grid item xs={12} sm={12} md={7} style={{ backgroundColor: 'rgb(242,0,60,.7)', paddingTop: '9%', paddingBottom: '9%', borderRadius: '0 50% 50% 0' }} >
                            <Typography sx={{ fontWeight: 'bold', pl: 2 }} style={{ color: '#ffffff' }} variant="h3" gutterBottom component="div">
                                We have Digital <br /> Security System
                            </Typography>
                            <Typography sx={{ pl: 2 }} style={{ color: '#ffffff' }} variant="h5" gutterBottom component="div">
                                Find Safety in Your Home with a <br /> Home Security System
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default HomeTopBanner;