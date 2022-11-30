import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import img from '../../images/my2.png'

const About = () => {
    return (
        <div id="about"
            style={{
                background: "black",
                marginTop: "10px",
            }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                background: "white",
                borderTopLeftRadius: "80% 20%",
                minHeight: "500px"
            }}>
                <Grid item xs={12} md={6} sx={{
                    textAlign: "center",
                }}>
                    <Box sx={{
                        paddingTop: '50px',
                        paddingBottom: "20px",
                        paddingTop:"100px"
                    }}>
                        <Typography variant="h3">About <span style={{ color: "cyan" }}>Me</span></Typography>
                        <Typography variant="h5">Hello I'm Abdullah Tayyab</Typography>
                        <Typography variant="body1" widht="50%">I'm a Mern Stack Front-end web developer. I've 3 months of experience in HTML, CSS, JavaScript, ReactJS, Redux, MUI and complete different projects.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        marginTop: "90px",
                    }}>
                        <img src={img}
                            style={{
                                height: "400px",
                                display: "block",
                                width: "65%",
                                marginLeft: "auto",
                                marginRight: "auto"

                            }} />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
export default About