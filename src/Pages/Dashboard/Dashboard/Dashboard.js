import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth/UseAuth';
import AdminRoute from '../../../Components/AdminRoute/AdminRoute';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import GiveReview from '../GiveReview/GiveReview';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageAProduct from '../ManageAProduct/ManageAProduct';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const drawerWidth = 220;
const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div
            style={{ backgroundColor: '#4169e1', height: '100%' }}>
            <Toolbar />
            <div>
                <List>
                    <NavLink to={`${url}`} style={{ textDecoration: 'none', color: 'white', padding: '15px, 15px', marginBottom: '12px', textAlign: 'left', paddingLeft: '20px', display: 'block' }}>
                        <span style={{ color: 'white', fontSize: '16px', marginRight: '18px' }}><i className="fas fa-braille"></i></span> Dashboard
                    </NavLink>
                    <NavLink to={`${url}/my_order`} style={{ textDecoration: 'none', color: 'white', padding: '15px, 15px', marginBottom: '12px', textAlign: 'left', paddingLeft: '20px', display: 'block' }}>
                        <span style={{ color: 'white', fontSize: '18px', marginRight: '18px' }}><i className="fas fa-shopping-cart"></i></span> My Orders
                    </NavLink>
                    <NavLink to={`${url}/payment`} style={{ textDecoration: 'none', color: 'white', padding: '15px, 15px', marginBottom: '12px', textAlign: 'left', paddingLeft: '20px', display: 'block' }}>
                        <span style={{ color: 'white', fontSize: '18px', marginRight: '18px' }}><i className="far fa-credit-card"></i></span> Payment
                    </NavLink>
                    <NavLink to={`${url}/review`} style={{ textDecoration: 'none', color: 'white', padding: '15px, 15px', marginBottom: '12px', textAlign: 'left', paddingLeft: '20px', display: 'block' }}>
                        <span style={{ color: 'white', fontSize: '20px', marginRight: '18px' }}><i className="fas fa-comment-medical"></i></span> Review
                    </NavLink>
                    {
                        admin &&
                        <Box>
                            <NavLink to={`${url}/manage_all_orders`} style={{ textDecoration: 'none', color: 'white', padding: '15px, 15px', marginBottom: '12px', textAlign: 'left', paddingLeft: '20px', display: 'block' }}>
                                <span style={{ color: 'white', fontSize: '17px', marginRight: '16px' }}><i className="fas fa-luggage-cart"></i></span> Manage Orders
                            </NavLink>
                            <NavLink to={`${url}/manage_product`} style={{ textDecoration: 'none', color: 'white', padding: '15px, 15px', marginBottom: '12px', textAlign: 'left', paddingLeft: '20px', display: 'block' }}>
                                <span style={{ color: 'white', fontSize: '19px', marginRight: '18px' }}><i className="fas fa-tasks"></i></span> Manage Products
                            </NavLink>
                            <NavLink to={`${url}/add_product`} style={{ textDecoration: 'none', color: 'white', padding: '15px, 15px', marginBottom: '12px', textAlign: 'left', paddingLeft: '20px', display: 'block' }}>
                                <span style={{ color: 'white', fontSize: '20px', marginRight: '18px' }}><i className="fas fa-folder-plus"></i></span> Add Product
                            </NavLink>
                            <NavLink to={`${url}/make_admin`} style={{ textDecoration: 'none', color: 'white', padding: '15px, 15px', marginBottom: '12px', textAlign: 'left', paddingLeft: '20px', display: 'block' }}>
                                <span style={{ color: 'white', fontSize: '18px', marginRight: '16px' }}><i className="fas fa-user-plus"></i></span> Make Admin
                            </NavLink>
                        </Box>
                    }
                </List>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, paddingBottom: '10px' }}>
                <List>
                    <NavLink to="/home" style={{ textDecoration: 'none', color: 'white', padding: '15px, 15px', marginBottom: '12px', marginTop: '30px', textAlign: 'left', paddingLeft: '20px', display: 'block' }}>
                        <span style={{ color: 'white', fontSize: '20px', marginRight: '18px' }}><i className="fas fa-home"></i></span>Home
                    </NavLink>
                    <NavLink to="" onClick={logOut} style={{ textDecoration: 'none', color: 'white', padding: '15px, 15px', marginBottom: '12px', textAlign: 'left', paddingLeft: '20px', display: 'block' }}>
                        <span style={{ color: 'white', fontSize: '20px', marginRight: '20px' }}><i className="fas fa-sign-out-alt"></i></span>LogOut
                    </NavLink>
                </List>
            </div>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
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
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                    </Route>
                    <Route path={`${path}/my_order`}>
                        <MyOrder />
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment />
                    </Route>
                    <Route path={`${path}/review`}>
                        <GiveReview />
                    </Route>
                    <AdminRoute path={`${path}/manage_all_orders`}>
                        <ManageAllOrders />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manage_product`}>
                        <ManageAProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/add_product`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/make_admin`}>
                        <MakeAdmin />
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
};
Dashboard.propTypes = {
    window: PropTypes.func,
};

export default Dashboard;