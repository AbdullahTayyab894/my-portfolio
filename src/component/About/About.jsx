import React from 'react'
import { Grid, Box, Typography, Button } from '@mui/material'
import img from '../../images/my2.jpeg'

const About = () => {
    return (
        <div>
            <Box id="about" sx={{
                background: "black"
            }}>
                <Grid container sx={{
                    background: "white",
                    pt: "50px",
                    pb: "20px",
                    pl: "70px",
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
                            <Typography variant="body1">I'm a Mern Stack Front-end web developer. I've 3 months of experience in HTML, CSS, JavaScript, ReactJS, Redux, MUI and complete different projects.</Typography>
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