import React from 'react'
import { Avatar, Grid, Button, Input, InputAdornment, Box } from '@mui/material'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../../App.css'

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
                        mb: "40px",
                        pb: "30px",
                    }}>
                        <a href="#about" smooth
                            style={{
                                textDecoration: "none"
                            }}>
                            <Button sx={{
                                my: 2,
                                color: 'white',
                                marginRight: "5px",
                                '&:hover': {
                                    color: 'cyan',
                                    border: "1px solid cyan"
                                }
                            }}>
                                About
                            </Button>
                        </a>
                        <a href="#service"
                            style={{
                                textDecoration: "none"
                            }}>
                            <Button sx={{
                                my: 2,
                                color: 'white',
                                marginRight: "5px",
                                '&:hover': {
                                    color: 'cyan',
                                    border: "1px solid cyan"
                                }
                            }}>
                                Services
                            </Button>
                        </a>
                        <Button sx={{
                            my: 2,
                            color: 'white',
                            marginRight: "5px",
                            '&:hover': {
                                color: 'cyan',
                                border: "1px solid cyan"
                            }
                        }}>
                            Blogs
                        </Button>
                    </Box>
                </Grid>
                <Grid md={3} xs={10} sx={{
                    display: "flex",
                    ml: "120px",
                    mb: "40px"
                }}>
                    <Box sx={{
                        boxShadow: "0px 10px 15px cyan",
                        display: "flex",
                        height: "70px",
                        pt: "30px"
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
                        width: "350px",
                    }}>
                        <Button>Contact me</Button>
                        <Input
                            id="input-with-icon-adornment"
                            placeholder='Enter your email'
                            sx={{
                                background: "white",
                                width: "340px",
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
