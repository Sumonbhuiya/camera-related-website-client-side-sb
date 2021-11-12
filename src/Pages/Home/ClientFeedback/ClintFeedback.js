import { Container, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import React, { useEffect, useState } from 'react';

const ClintFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        // load data for see feedback
        fetch(`http://localhost:5000/review`)
            .then(res => res.json())
            .then(data => setFeedbacks(data));
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{ py: 3 }}>
                <Typography sx={{ fontWeight: 500, pb: 6, mt: 2 }} style={{ letterSpacing: '4px', color: '#dc143c' }} variant="h6" component="div">
                    WHAT USER SAY'S ABOUT US
                </Typography>
                <Grid container spacing={2}>
                    {/* view users feedback */}
                    {
                        feedbacks.map(review => <Grid item
                            key={review._id} xs={12} sm={6} md={6}>
                            <Grid container>
                                <Grid item xs={4} sm={4} md={4}>
                                    <Typography sx={{ color: '#dcdcdc' }} variant="h2" gutterBottom component="div">
                                        <i className="far fa-user-circle"></i>
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ textAlign: 'left' }} xs={8} sm={8} md={8}>
                                    <Typography variant="subtitle2" gutterBottom component="div">
                                        {review.name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom component="div">
                                        {review.says}
                                    </Typography>
                                    <Rating
                                        name="text-feedback"
                                        value={parseFloat(review.review)}
                                        readOnly
                                        precision={0.5}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default ClintFeedback;