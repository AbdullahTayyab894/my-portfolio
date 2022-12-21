import * as React from 'react';
import { Typography, Avatar, Box, Divider, Drawer, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import CircularDeterminate from '../skill bar/CircularSkillBar'
import LinearSkillsBar from '../skill bar/LinearSkillBar'


import img from './my1.png'
const drawerWidth = 300;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{
            background: "#142850",
            color: "white",
        }}>
            <Box >
                <Box sx={{
                    width: "300px",
                    height: "250px"
                }}>
                    <Avatar sx={{
                        width: "80%",
                        height: "90%",
                        margin: "auto",
                        marginTop: "10px"
                    }}>
                        <img src={img} alt="" width="80%" height="100%" />
                    </Avatar>
                </Box>
                <Divider sx={{
                    background: "white",
                    margin: "0px 30px 20px 30px"
                }} />
                <Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0px 20px 10px 20px"
                    }}>
                        <Typography>Residence</Typography>
                        <Typography>Pakistan</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0px 20px 10px 20px"
                    }}>
                        <Typography>City</Typography>
                        <Typography>Kasur</Typography>
                    </Box>
                </Box>
                <Divider sx={{
                    background: "white",
                    margin: "20px 30px 20px 30px"
                }} />
                <Box>
                    <CircularDeterminate />
                </Box>
                <Divider sx={{
                    background: "white",
                    margin: "20px 30px 0px 30px"
                }} />
                <Box>
                    <LinearSkillsBar />
                </Box>
            </Box>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Toolbar >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="center"
                    onClick={handleDrawerToggle}
                    sx={{ display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Box sx={{ display: 'flex' }}>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    // component="main"
                    sx={{
                        // flexGrow: 1,
                        // p: 3,
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        background: "#142850",
                        color: "white",
                    }}
                >
                    <img src={img} alt="" />
                </Box>
            </Box>
        </>
    );
}

ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
};

export default ResponsiveDrawer;