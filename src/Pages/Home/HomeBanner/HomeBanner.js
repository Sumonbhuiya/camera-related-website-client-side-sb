import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const HomeBanner = () => {
    return (
        <Box sx={{ pt: 4, pb: 2 }}>
            <Container style={{ backgroundColor: '#f2f3f4' }}>
                <Grid container spacing={2}>
                    {/* banner image  */}
                    <Grid item xs={12} sm={5} md={6}>
                        <img style={{ width: '100%' }} src="https://i.ibb.co/D4tsQ0r/home-banner.png" alt="" />
                    </Grid>
                    {/* banner right column design  */}
                    <Grid item xs={12} sm={7} md={6} sx={{ display: 'flex', alignItems: 'center', textAlign: 'start' }}>
                        <Box>
                            <img src="https://i.ibb.co/3Fr2Nwk/line-right.png" alt="" />
                            <Typography style={{ letterSpacing: '8px', color: '#dc143c' }} variant="h6" gutterBottom component="div">
                                ABOUT SERVICES
                            </Typography>
                            <Typography sx={{ fontWeight: 'bold' }} style={{ color: '#363636' }} variant="h4" gutterBottom component="div">
                                Do you need better security Installation ???
                            </Typography>
                            <Typography sx={{ fontStyle: 'italic', pb: 3 }} style={{ color: '#3d3d3d' }} variant="subtitle1" gutterBottom component="div">
                                The professional approach to security. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded.
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={3} sm={3} md={2}>
                                    <Typography sx={{ py: 1.2, px: .5, borderRadius: '50%', boxShadow: 2, width: '50%', marginX: 'auto', textAlign: 'center' }} style={{ color: '#ff5c5c', backgroundColor: '#ffffff' }} variant="subtitle1">
                                        <i className="fas fa-check"></i>
                                    </Typography>

                                </Grid>
                                <Grid item xs={9} sm={9} md={9}>
                                    <Typography sx={{ fontWeight: 'bold' }} style={{ color: '#1c1c1c' }} variant="h6" gutterBottom component="div">
                                        All Your Security System At One Place
                                    </Typography>
                                    <Typography style={{ color: '#3d3d3d' }} variant="subtitle1" gutterBottom component="div">
                                        With over 20 years of experience in security, we know how to protect you and your home.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container sx={{ pt: 3 }} spacing={2}>
                                <Grid item xs={3} sm={3} md={2}>
                                    <Typography sx={{ py: 1.2, px: .5, borderRadius: '50%', boxShadow: 2, width: '50%', marginX: 'auto', textAlign: 'center' }} style={{ color: '#ff5c5c', backgroundColor: '#ffffff' }} variant="subtitle1">
                                        <i className="fas fa-check"></i>
                                    </Typography>

                                </Grid>
                                <Grid item xs={9} sm={9} md={9}>
                                    <Typography sx={{ fontWeight: 'bold' }} style={{ color: '#1c1c1c' }} variant="h6" gutterBottom component="div">
                                        Great Services And Support With Us
                                    </Typography>
                                    <Typography style={{ color: '#3d3d3d' }} variant="subtitle1" gutterBottom component="div">
                                        Teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is who do not know how to pursue pleasure.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HomeBanner;