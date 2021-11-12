import { Button, Card, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import '../../Home/Products/Product/Product.css'
import { Box } from '@mui/system';


const Service = (props) => {
    const { _id, about, name, img, describe, price, rating } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            {/* all products card is here */}
            <Card className="card-hover" sx={{ minWidth: 275, borderRadius: 0 }} style={{ height: '100%' }}>
                <CardMedia
                    className="image-transform"
                    sx={{ py: 3 }}
                    component="img"
                    style={{ width: 'auto', height: '35%', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent style={{ textAlign: 'start', marginTop: '-7%', marginLeft: '10%' }}>
                    <Typography className="change-background" sx={{ p: 1, borderRadius: 2, marginRight: '79%', backgroundColor: '#b0c4de' }} variant="body2" component="div">
                        <img style={{ width: '100%', height: '100%', margin: '0' }} src="https://i.ibb.co/K5fVV2N/cctv-15.png" alt="" />
                    </Typography>
                    <Typography sx={{ pt: 2, pb: 1 }} style={{ letterSpacing: '6px', color: '#4169e1' }} variant="button" component="div">
                        {about}
                    </Typography>
                    <Typography sx={{ textTransform: 'uppercase', fontWeight: 'bold' }} variant="h6" component="div">
                        {name}
                    </Typography>
                    <Grid container sx={{ pb: 2, pt: 1 }}>
                        <Grid item xs={5} md={5}>
                            <Typography sx={{ fontWeight: 'bold' }} style={{ color: '#ff5a36' }} variant="button" component="div">
                                Price: {price} TK
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={7} >
                            <Box >
                                <Rating
                                    name="text-feedback"
                                    value={parseFloat(rating)}
                                    readOnly
                                    precision={0.5}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Typography variant="subtitle1" color="text.secondary">
                        {describe.slice(0, 70)}...
                    </Typography>
                </CardContent>
                <NavLink to={`/orders/${_id}`} style={{ textDecoration: 'none' }}>
                    <Button className="change-background" sx={{ color: 'black', backgroundColor: '#b0c4de', px: 4, fontSize: 16 }} color="inherit">Buy Now</Button>
                </NavLink>
            </Card>
        </Grid>
    );
};

export default Service;