import { Alert, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/UseAuth/UseAuth';

const GiveReview = () => {
    const [success, setSuccess] = useState(false);
    const { user } = useAuth();
    const initialInfo = { name: user.displayName }
    const [feedback, setFeedback] = useState(initialInfo);

    // take input value 
    const handelOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...feedback };
        newLoginData[field] = value;
        setFeedback(newLoginData);
    }
    const handelFeedbackSubmit = e => {
        //collect data
        const giveFeedback = {
            ...feedback
        }
        fetch(`https://desolate-bayou-54204.herokuapp.com/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(giveFeedback)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }
            });
        e.preventDefault()
    }
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={8} style={{ padding: '2% 0' }}>
                        <Paper sx={{ py: 3 }}>
                            {/* users review input field  */}
                            <Typography sx={{ pb: 1 }} variant="h6" display="block" gutterBottom> Give Your Opinion </Typography>
                            <form onSubmit={handelFeedbackSubmit}>
                                <TextField
                                    sx={{ width: "75%", m: 1 }}
                                    id="outlined-basic"
                                    type="text"
                                    name="name"
                                    label="Name"
                                    defaultValue={user.displayName}
                                    onBlur={handelOnBlur}
                                    variant="outlined"
                                    required />
                                <TextField
                                    sx={{ width: "75%", m: 1 }}
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={5}
                                    type="text"
                                    name="says"
                                    label="Your Comment"
                                    onBlur={handelOnBlur}
                                    variant="outlined"
                                    required />
                                <TextField
                                    sx={{ width: "75%", m: 1 }}
                                    id="outlined-basic"
                                    type="text"
                                    name="review"
                                    label="Give Review"
                                    onBlur={handelOnBlur}
                                    variant="outlined"
                                    required />
                                <Button sx={{ width: "75%", mt: 1, p: 1 }} variant="contained" type="submit" style={{ color: 'white', backgroundImage: 'linear-gradient(to right, #e08d3c 15%, #e25822 120%)' }}>Send</Button>
                            </form>
                            {
                                success && <Typography style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }} variant="caption" display="block" gutterBottom><Alert severity="success">Your Feedback Send Successfully!</Alert></Typography>
                            }
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{ pt: 5, color: '#414a4c' }} variant="h4" display="block" gutterBottom><span style={{ fontFamily: 'Arial narrow' }}>Your Information is <br />Important for Us. <br />It Can be Helpful for<br /> Making Our Site Easier.<br />So Give Your Valuable <br />Information And</span> <br /><span style={{ fontFamily: 'Impact', backgroundColor: 'rgb(133,109,77,.6)' }}>STAY WITH US</span> </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default GiveReview;