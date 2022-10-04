import { Grid, Box, Typography, Button } from '@mui/material'
import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import img from '../../images/my1.jpg'

const Home = () => {

    const onDownload = () => {
        const link = document.createElement("a");
        link.href = './Abdullah Tayyab resume.pdf';
        link.click();
    };

    return (
        <div>
            <Grid container sx={{
                background: "black",
                pt: "100px",
                pb: "20px"
            }}>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        mt: "50px",
                        margin: "auto",
                        ml: "70px"
                    }}>
                        <img src={img} alt="" width="350px" height="400px" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        textAlign: "center",
                        width: "350px",
                        color: "white",
                        mt: "70px",
                        ml: "65px"
                    }}>
                        <Typography variant="h5" sx={{
                            color: "cyan",
                        }}>Code With Abdullah</Typography>
                        <Typography variant="h3">I'm Mern Stack</Typography>
                        <Typography variant="h3"
                            sx={{
                                color: "cyan"
                            }}>Developer</Typography>
                        <Typography variant="body1">Expert in Front-end development with MUI system</Typography>
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
                            onClick={onDownload}>Download CV</Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
