import React from 'react'
import { Grid, Box, Typography, Button } from '@mui/material'
import img from '../../images/my2.jpeg'

const About = () => {
    return (
        <div>
            <Box sx={{
                background:"black"
            }}>
                <Grid container sx={{
                    background:"white",
                    pt: "50px",
                    pb: "20px",
                    pl:"70px",
                    borderTopLeftRadius: "80% 8%",
                    // borderTopLeftRadius: "revert",
                }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            textAlign: "justify",
                            width: "350px",
                            // color:"white",
                            mt: "100px",
                            ml: "10px"
                        }}>
                            <Typography variant="h3">About <span style={{ color: "cyan" }}>Me</span></Typography>
                            <Typography variant="h5">Hello I'm Abdullah Tayyab</Typography>
                            <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae totam ab soluta nemo consequatur in sed ullam nostrum itaque delectus.</Typography>
                            <Button
                                sx={{
                                    mt: "20px",
                                    color: "white",
                                    border: "1px solid white",
                                    '&:hover': {
                                        color: "cyan",
                                        border: "1px solid cyan"
                                    }
                                }}>Download CV</Button>
                        </Box>
                    </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{
                                                mt: "50px"
                                            }}>
                                                <img src={img} alt="" width="350px" height="450px" />
                                            </Box>
                                        </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default About