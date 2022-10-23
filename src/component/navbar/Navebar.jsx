import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { List, ListItem, MenuItem, Button, Box } from '@mui/material';

const Navebar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    return (
        <AppBar position="static" sx={{
            background: "black"
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <List>
                                    <a href="#home" style={{
                                        textDecoration: "none"
                                    }}>
                                        <ListItem>Home</ListItem>
                                    </a>
                                    <a href="#about" style={{
                                        textDecoration: "none"
                                    }}>
                                        <ListItem>About</ListItem>
                                    </a>
                                    <a href="#skills" style={{
                                        textDecoration: "none"
                                    }}>
                                        <ListItem>Skills</ListItem>
                                    </a>
                                    <a href="#projects" style={{
                                        textDecoration: "none"
                                    }}>
                                        <ListItem>Projects</ListItem>
                                    </a>
                                    <a href="#contact" style={{
                                        textDecoration: "none"
                                    }}>
                                        <ListItem>Contact</ListItem>
                                    </a>
                                </List>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <a href="#home" style={{
                            textDecoration: "none"
                        }}>
                            <Button sx={{
                                my: 2,
                                color: 'white',
                                display: 'block',
                                marginRight: "5px",
                                '&:hover': {
                                    color: 'cyan',
                                    border: "1px solid cyan"
                                }
                            }}>Home</Button>
                        </a>
                        <a href="#about" style={{
                            textDecoration: "none"
                        }}>
                            <Button sx={{
                                my: 2,
                                color: 'white',
                                display: 'block',
                                marginRight: "5px",
                                '&:hover': {
                                    color: 'cyan',
                                    border: "1px solid cyan"
                                }
                            }}>About</Button>
                        </a>
                        <a href="#skills" style={{
                            textDecoration: "none"
                        }}>
                            <Button sx={{
                                my: 2,
                                color: 'white',
                                display: 'block',
                                marginRight: "5px",
                                '&:hover': {
                                    color: 'cyan',
                                    border: "1px solid cyan"
                                }
                            }}>Skills</Button>
                        </a>
                        <a href="#projects" style={{
                            textDecoration: "none"
                        }}>
                            <Button sx={{
                                my: 2,
                                color: 'white',
                                display: 'block',
                                marginRight: "5px",
                                '&:hover': {
                                    color: 'cyan',
                                    border: "1px solid cyan"
                                }
                            }}>Projects</Button>
                        </a>
                        <a href="#contact" style={{
                            textDecoration: "none"
                        }}>
                            <Button sx={{
                                my: 2,
                                color: 'white',
                                display: 'block',
                                marginRight: "5px",
                                '&:hover': {
                                    color: 'cyan',
                                    border: "1px solid cyan"
                                }
                            }}>Contact</Button>
                        </a>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <a href="https://wa.me/message/PYRPB5XT6Y54A1" target="_blank" style={{
                            textDecoration: "none"
                        }}>
                            <Button
                                sx={{
                                    border: "1px solid cyan",
                                    color: "white",
                                    fontSize: "16px",
                                    '&:hover': {
                                        background: "cyan",
                                        color: "black",
                                        fontSize: "16px"
                                    }
                                }}>
                                CONTACT
                                <WhatsAppIcon sx={{
                                    ml: "10px",
                                }} />
                            </Button>
                        </a>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navebar;

