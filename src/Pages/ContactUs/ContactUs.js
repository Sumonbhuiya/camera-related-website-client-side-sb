import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const ContactUs = () => {
    return (
        <>
            <Container>
                <Typography sx={{ fontWeight: 500, p: 3, textAlign: 'left' }} style={{ letterSpacing: '3px', color: '#d2691e' }} variant="h4" component="div">
                    NEED AN HELP!
                </Typography>
                <Grid sx={{ p: 5, my: 2, border: 1 }} container spacing={2}>
                    <Grid item id="contact-box" sx={{ textAlign: 'left', px: 4, borderRight: 1 }} xs={12} sm={6} md={3}>
                        <Typography variant="h3" style={{ color: '#3d3d3d' }} gutterBottom>
                            <i id="icon-transform" className="fas fa-phone-alt"></i>
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Call
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            For Technical and Sales support, you can reach us on Toll No. <br /><span style={{ color: '#db0000' }}>+88-017524864</span>
                        </Typography>
                    </Grid>
                    <Grid item id="contact-box" sx={{ textAlign: 'left', px: 4, borderRight: 1 }} xs={12} sm={6} md={3}>
                        <Typography variant="h3" style={{ color: '#3d3d3d' }} gutterBottom>
                            <i id="icon-transform" className="fas fa-envelope"></i>
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Email
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            For Any type of support, query, you can write email us on <br /><span style={{ color: '#db0000' }}>support@cpplusworld.com</span>
                        </Typography>
                    </Grid>
                    <Grid item id="contact-box" sx={{ textAlign: 'left', px: 4, borderRight: 1 }} xs={12} sm={6} md={3}>
                        <Typography variant="h3" style={{ color: '#3d3d3d' }} gutterBottom>
                            <i id="icon-transform" className="fas fa-pencil-alt"></i>
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Write Us
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Have queries, doubts or suggestions? Raise an entry by filling out the form, and we'll be more than happy to help.
                        </Typography>
                    </Grid>
                    <Grid item id="contact-box" sx={{ textAlign: 'left', px: 4 }} xs={12} sm={6} md={3}>
                        <Typography variant="h3" style={{ color: '#3d3d3d' }} gutterBottom>
                            <i id="icon-transform" className="fas fa-comments"></i>
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Live Chat
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Need assistance regarding CPPLUS? We'll get you the help you need.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default ContactUs;