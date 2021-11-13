import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/UseAuth/UseAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    //For mobile responsive view
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {/* all menu sets here for mobile */}
            <NavLink to="/home" style={{ textDecoration: 'none' }}>
                <Button sx={{ color: 'black', px: 5 }} color="inherit">home</Button>
            </NavLink><br />
            <NavLink to="/explores" style={{ textDecoration: 'none' }}>
                <Button sx={{ color: 'black', px: 5 }} color="inherit">Explore</Button>
            </NavLink><br />
            <NavLink to="/about_us" style={{ textDecoration: 'none' }}>
                <Button sx={{ color: 'black', px: 5 }} color="inherit">About Us</Button>
            </NavLink><br />
            {
                user?.email ?
                    <Box>
                        <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
                            <Button sx={{ color: 'black', px: 5 }} color="inherit">Dashboard</Button>
                        </NavLink>
                        <Typography sx={{ color: '#954535', fontWeight: 'bold', px: 5 }}>
                            {user.displayName}
                        </Typography>
                        <NavLink to="" style={{ textDecoration: 'none' }}>
                            <Button onClick={logOut} sx={{ color: 'black', px: 5 }} color="inherit">Logout</Button>
                        </NavLink>
                    </Box>
                    :
                    <NavLink to="/login" style={{ textDecoration: 'none' }}>
                        <Button sx={{ color: 'black', px: 5 }} color="inherit">Login</Button>
                    </NavLink>
            }
        </Menu>
    );
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: '#4f86f7' }} position="static">
                <Toolbar>
                    <NavLink
                        to="/"
                    >
                        <img style={{ width: '220px', padding: '15px 0' }} src="https://i.ibb.co/sFjhgPD/logo-1.png" alt="" />
                    </NavLink>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {/* all menu sets here for large device */}
                        <NavLink to="/home" style={{ textDecoration: 'none' }}>
                            <Button sx={{ color: 'white', mx: 1, fontSize: 16 }} color="inherit">Home</Button>
                        </NavLink>
                        <NavLink to="/explores" style={{ textDecoration: 'none' }}>
                            <Button sx={{ color: 'white', mx: 1, fontSize: 16 }} color="inherit">Explore</Button>
                        </NavLink>
                        <NavLink to="/about_us" style={{ textDecoration: 'none' }}>
                            <Button sx={{ color: 'white', mx: 1, fontSize: 16 }} color="inherit">About Us</Button>
                        </NavLink>
                        {
                            user?.email ?
                                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                    <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
                                        <Button sx={{ color: 'white', mx: 1, fontSize: 16 }} color="inherit">Dashboard</Button>
                                    </NavLink>
                                    <Typography style={{ color: '#954535', fontWeight: 'bold', paddingTop: '2.5%' }}>
                                        {user.displayName}
                                    </Typography>
                                    <NavLink to="" style={{ textDecoration: 'none' }}>
                                        <Button onClick={logOut} sx={{ color: '#36454f', mx: 1, fontSize: 16 }} color="inherit">Logout</Button>
                                    </NavLink>
                                </Box>
                                :
                                <NavLink to="/login" style={{ textDecoration: 'none' }}>
                                    <Button sx={{ color: '#36454f', mx: 1, fontSize: 16 }} color="inherit">Login</Button>
                                </NavLink>
                        }
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon style={{ fontSize: '40px' }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
};

export default Navigation;