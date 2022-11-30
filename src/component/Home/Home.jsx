import { Grid, Box, Typography, Button } from '@mui/material'
import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import img from '../../images/my1.png'

const Home = () => {

    const onDownloadResume = () => {
        const link = document.createElement("a");
        link.href = './Abdullah Tayyab Resume.pdf';
        link.click();
    };

    const onDownloadCoverLetter = () => {
        const link = document.createElement("a");
        link.href = './abdullah tayyab cover-letter.pdf';
        link.click();
    }

    return (
        <div id='home' style={{
            background: "black",
            marginTop: "10px",
        }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                minHeight: "500px",
            }}>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        marginTop: "90px"
                    }}>
                        <img src={img}
                            style={{
                                height: "450px",
                                display: "block",
                                width: "65%",
                                marginLeft: "auto",
                                marginRight: "auto"
                            }} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    textAlign: "center"
                }}>
                    <Box sx={{
                        paddingTop: '100px',
                        paddingBottom: "20px",

                    }}>
                        <Typography variant="h5" sx={{
                            color: "cyan",
                        }}>Code With Abdullah</Typography>
                        <Typography variant="h3" color="white">I'm Mern Stack</Typography>
                        <Typography variant="h3"
                            sx={{
                                color: "cyan"
                            }}>Developer</Typography>
                        <Typography variant="body1" color="white" width="95%">Expert in Front-end development with MUI system</Typography>
                        <Button
                            endIcon={<DownloadIcon />}
                            sx={{
                                mt: "20px",
                                width: "225px",
                                marginRight: "10px",
                                color: "white",
                                border: "1px solid white",
                                '&:hover': {
                                    color: "cyan",
                                    border: "1px solid cyan"
                                }
                            }}
                            onClick={onDownloadResume}>Download CV</Button>
                        <Button
                            endIcon={<DownloadIcon />}
                            sx={{
                                mt: "20px",
                                color: "white",
                                border: "1px solid white",
                                '&:hover': {
                                    color: "cyan",
                                    border: "1px solid cyan"
                                }
                            }}
                            onClick={onDownloadCoverLetter}>Download Cover Letter</Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
export default Home