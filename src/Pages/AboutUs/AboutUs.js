import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const AboutUs = () => {
    return (
        <>
            <Navigation />
            {/* about header part */}
            <Grid container sx={{ py: 1 }} spacing={2}>
                <Grid item xs={12} md={7}>
                    <img style={{ width: '100%' }} src="https://i.ibb.co/RYfz6Kv/about-us-page-cctv-outlet.jpg" alt="" />
                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center', textAlign: 'start' }} xs={12} md={5}>
                    <Box sx={{ px: 3 }}>
                        <Typography variant="body2" gutterBottom>
                            CCTV Camera World is a seller of security cameras, video recorders (DVR, NVR, Hybrid, Tribrid), surveillance systems, and all other things CCTV. We supply security products to the government, businesses, and home owners alike of all shapes and sizes.
                        </Typography> <br />
                        <Typography variant="body2" gutterBottom>
                            All of our systems come fully equipped to handle all of your remote viewing needs. No matter where you are in the world, as long as you have an internet or 3G/4G connection, you'll be able to view your video feed at any time you want. Additionally, we provide our customers with a full list of readily available options for viewing; whether you prefer to use your computer, tablet, or Smartphone.
                        </Typography> <br />
                        <Typography variant="body2" gutterBottom>
                            Our technical support is unparalleled. It's one thing to say it but another thing to mean it. For as many years as we've been in the business, we have yet to come across anyone else who spends as much time with their customers as we do. You don't need to have an expert knowledge of CCTV systems, just a helpful and willing support staff that's more than happy to assist you with anything you may need.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            {/* import component */}
            <ContactUs />
            <Footer />
        </>
    );
};

export default AboutUs;