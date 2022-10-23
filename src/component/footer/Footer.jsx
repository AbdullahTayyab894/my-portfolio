import React from 'react'
import { Avatar, Grid, Button, Box } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../../App.css'

const Footer = () => {
    return (
        <div id='contact'>
            <Grid container sx={{
                justifyContent: "center",
                textAlign: "center",
                mt: "10px",
                pt: "80px",
                pb: "50px",
                background: "black",
                color: "white",

            }}>
                <Grid md={5} xs={10}>
                    <Box sx={{
                        boxShadow: "0px 10px 15px cyan",
                        mb: "40px",
                        pb: "15px",
                        pt: "15px",
                        mr: "10px"
                    }}>
                        <a href="#home" smooth
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
                                Home
                            </Button>
                        </a>
                        <a href="#about"
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
                        <a href="#skills"
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
                                Skills
                            </Button>
                        </a>
                        <a href="#projects"
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
                                Projects
                            </Button>
                        </a>
                    </Box>
                </Grid>
                <Grid md={5} xs={10} sx={{
                    display: "flex",
                    mb: "40px",
                    ml: "10px"
                }}>
                    <Box sx={{
                        boxShadow: "0px 10px 15px cyan",
                        display: "flex",
                        height: "70px",
                        width: "100%",
                        justifyContent: "space-between",
                        padding: "30px 20px 0px 20px"
                    }}>
                        <Avatar>
                            <a href="https://www.facebook.com/" target="_Blank" style={{
                                textDecoration: "none"
                            }}>
                                <FacebookIcon />
                            </a>
                        </Avatar>
                        <Avatar>
                            <a href="https://www.instagram.com/" target="_Blank" style={{
                                textDecoration: "none"
                            }}>
                                <InstagramIcon />
                            </a>
                        </Avatar>
                        <Avatar>
                            <a href="https://www.linkedin.com/feed/" target="_Blank" style={{
                                textDecoration: "none"
                            }}>
                                <LinkedInIcon />
                            </a>
                        </Avatar>
                        <Avatar>
                            <a href="https://github.com/AbdullahTayyab894" target="_Blank" style={{
                                textDecoration: "none"
                            }}>
                                <GitHubIcon />
                            </a>
                        </Avatar>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
