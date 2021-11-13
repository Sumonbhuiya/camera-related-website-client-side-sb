import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
//set background
const headerPolicyImage = {
    width: '100%',
    height: '100%',
    backgroundImage: `url("https://i.ibb.co/hXMdZWN/our-policy.jpg")`,
    backgroundSize: 'cover',
    margin: 0,
    padding: 0
}
const OurPolicy = () => {
    return (
        <>
            <Box style={headerPolicyImage}>
                <Container style={{ width: '75%', marginTop: '24px', marginBottom: '15px' }}>
                    <Grid container sx={{ py: 3 }} spacing={3}>
                        {/* first box */}
                        <Grid item id="box-style" sx={{ border: 2, borderRadius: 1, borderColor: '#006400', backgroundColor: 'rgba(216,228,188,0.7)', m: 2 }} xs={12} sm={6} md={5}>
                            <Typography sx={{ m: 1, color: '#006400' }} variant="h4" component="div">
                                Props
                            </Typography>
                            <div style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>
                                <Typography sx={{ m: 1, fontWeight: 500, color: '#353839' }}>
                                    <i style={{ paddingRight: '8px', color: '#006400' }} className="fas fa-check"></i> Many items in stock
                                </Typography>
                                <Typography sx={{ m: 1, fontWeight: 500, color: '#353839' }}>
                                    <i style={{ paddingRight: '8px', color: '#006400' }} className="fas fa-check"></i> Free gear appraisals
                                </Typography>
                                <Typography sx={{ m: 1, fontWeight: 500, color: '#353839' }}>
                                    <i style={{ paddingRight: '8px', color: '#006400' }} className="fas fa-check"></i> 180-day warranty
                                </Typography>
                                <Typography sx={{ m: 1, fontWeight: 500, color: '#353839' }}>
                                    <i style={{ paddingRight: '8px', color: '#006400' }} className="fas fa-check"></i> Up to 10% below retail pricing
                                </Typography>
                                <Typography sx={{ m: 1, fontWeight: 500, color: '#353839' }}>
                                    <i style={{ paddingRight: '8px', color: '#006400' }} className="fas fa-check"></i> Helpful gear experts
                                </Typography>
                                <Typography sx={{ m: 1, fontWeight: 500, color: '#353839' }}>
                                    <i style={{ paddingRight: '8px', color: '#006400' }} className="fas fa-check"></i> Best resale rates
                                </Typography>
                                <Typography sx={{ m: 1, fontWeight: 500, color: '#353839' }}>
                                    <i style={{ paddingRight: '8px', color: '#006400' }} className="fas fa-check"></i> Free shipping
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item sx={{ m: 1 }} md={1}>

                        </Grid>
                        {/* second box */}
                        <Grid item id="box-style" sx={{ border: 2, borderRadius: 1, backgroundColor: 'rgba(216,228,188,0.7)', borderColor: '#ff0000', m: 2 }} xs={12} sm={6} md={5}>
                            <Typography sx={{ m: 1, color: '#ff0000' }} variant="h4" component="div">
                                Cons
                            </Typography>
                            <div style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>
                                <Typography sx={{ m: 1, fontWeight: 500, color: '#353839' }}>
                                    <i style={{ paddingRight: '8px', color: '#ff0000' }} className="fas fa-exclamation-triangle"></i> Free front-door pickup inside Dhaka only
                                </Typography>
                                <Typography sx={{ m: 1, fontWeight: 500, color: '#353839' }}>
                                    <i style={{ paddingRight: '8px', color: '#ff0000' }} className="fas fa-exclamation-triangle"></i> Collectible gear not covered by warranty
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default OurPolicy;