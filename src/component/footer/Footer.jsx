import React from 'react'
import { Avatar, Grid, Typography, Input, InputAdornment } from '@mui/material'
import SendRoundedIcon from '@mui/icons-material/SendRounded';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from '@mui/system';

const Footer = () => {
    return (
        <div>
            <Grid container sx={{
                justifyContent: "center",
                textAlign: "center",
                mt: "10px",
                pt: "80px",
                pb: "50px",
                background: "black",
                color: "white",

            }}>
                <Grid md={3} xs={10}>
                    <Box sx={{
                        boxShadow: "0px 10px 15px cyan",
                        mb:"40px",
                        pb:"30px",
                    }}>
                        <Typography>
                            About me
                        </Typography>
                        <Typography>
                            Services
                        </Typography>
                        <Typography>
                            Blogs
                        </Typography>
                    </Box>
                </Grid>
                <Grid md={3} xs={10} sx={{
                    display: "flex",
                    ml: "150px",
                    mb:"40px"
                }}>
                    <Box sx={{
                        boxShadow: "0px 10px 15px cyan",
                        display:"flex",
                        height:"70px",
                        pt:"30px"
                    }}>
                        <Avatar><FacebookIcon /></Avatar>
                        <Avatar><InstagramIcon /></Avatar>
                        <Avatar><TwitterIcon /></Avatar>
                        <Avatar><WhatsAppIcon /></Avatar>
                        <Avatar><GitHubIcon /></Avatar>
                    </Box>
                </Grid>
                <Grid md={3} xs={10}
                    sx={{
                    }}>
                    <Box sx={{
                        boxShadow: "0px 10px 15px cyan",
                        width:"400px",
                    }}>
                        <Typography>Contact me</Typography>
                        <Input
                            id="input-with-icon-adornment"
                            placeholder='Enter your email'
                            sx={{
                                background: "white",
                                width: "400px",
                                height: "50px",
                                paddingLeft: "20px",
                                marginTop: "20px",
                                marginBottom: "30px",
                                cursor: "pointer"
                            }}

                            endAdornment={
                                <InputAdornment position="end"
                                    sx={{
                                        background: "cyan",
                                        height: "30px",
                                        padding: "10px 10px 10px 10px",
                                        color: "black"

                                    }}>
                                    Get Started
                                    <SendRoundedIcon
                                        sx={{
                                            paddingLeft: "10px"
                                        }} />
                                </InputAdornment>
                            }
                        />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
