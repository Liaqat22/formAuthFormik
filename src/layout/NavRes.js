import React, { useState } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Typography, Drawer, Box, } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logoTop from "../imgs/logo-top.png"
import logo from '../imgs/dashboard-logo.png'


function NavRes() {
    const [open, setOpen] = useState(false); // State to control the drawer

    const links = [
        { title: "dashboard", icon: 'fa-solid fa-home', url: "/" },
        { title: "tables", icon: 'fa-solid fa-table', url: "/table" },
        { title: "billing", icon: 'fa-solid fa-file-invoice-dollar', url: "/billing" },
        { title: "RTL", icon: 'fa-solid fa-language', url: "/rtl" },
    ];

    const accounts = [
        { page: "profile", icon: 'fa-solid fa-user', url: "/profile" },
        { page: "signIn", icon: 'fa-solid fa-sign-in-alt', url: "/signIn" },
        { page: "signUp", icon: 'fa-solid fa-user-plus', url: "/signUp" },
    ];

    const toggleDrawer = () => {
        setOpen(!open); // Toggle the drawer open/close
    };

    const drawerContent = (
        <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer} >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box component='img' src={logoTop} alt='dashboard-logo' sx={{ height: "60px", width: "60px" }} />
                <Box>
                    <Typography color='#65d7f3' fontSize="1.3rem" className='mx-1' fontWeight="700">Liaqat Ali</Typography>
                    <Typography color='#faedcd' fontSize=".7rem" className='mx-1'>( React
                        <span style={{ color: "#98f5e1", fontWeight: "700" }}> & </span>UI Xpert )
                    </Typography>
                </Box>
            </Box>
            <div className='d-flex justify-content-center'> <hr style={{ margin: ".5rem 0" , width:"80%" , border: "1px solid white"}} /></div>

            <List>
                {links?.map((item, i) => (
                    <ListItem
                        className='mui-list-item mt-2 '
                        button
                        component={NavLink}
                        to={item?.url}
                        key={i}
                        sx={{ textTransform: "capitalize" }}
                    >
                        <ListItemIcon sx={{display : "flex" , alignItems:"center" , justifyContent:"center"}}>
                            <i className={`${item.icon} text-white`} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography>{item.title}</Typography>} />
                    </ListItem>
                ))}
            </List>

            <Typography variant='body2' sx={{ textTransform: "capitalize", fontWeight: "700", padding: "5px",fontSize:"smaller" }}>Account Pages</Typography>

            <List>
                {accounts?.map((item, i) => (
                    <ListItem
                        className='mui-list-item mt-2 '
                        button
                        component={NavLink}
                        to={item?.url}
                        key={i}
                        sx={{ textTransform: "capitalize" }}
                    >
                        <ListItemIcon sx={{display : "flex" , alignItems:"center" , justifyContent:"center"}}>
                            <i className={`${item.icon} text-white`} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography>{item.page}</Typography>} />
                    </ListItem>
                ))}
            </List>
            <Box component='img'  src={logo} alt='dashboard-logo' sx={{height:"200px" , width:"100%"}}/>

        </div>
    );
  return (
    <div>
    {/* AppBar with Menu Button */}
                <i className='fas fa-bars' style={{fontSize:"1.2rem"}} onClick={toggleDrawer}/>
            
    

    {/* Drawer Component */}
    <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        {drawerContent}
    </Drawer>
</div>
    )
}

export default NavRes