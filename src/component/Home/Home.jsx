import { Grid, Box, Typography, Button } from '@mui/material'
import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import img from '../../images/my1.jpg'
// import book from '../../images/pdf.pdf'

const Home = () => {

    const onDownload = () => {
        const link = document.createElement("a");
        link.href = './pdf.pdf';
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
                        // width:"600px",
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
                        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae totam ab soluta nemo consequatur in sed ullam nostrum itaque delectus.</Typography>
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
