import React, { useState } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Typography, Drawer, } from '@mui/material';
import { NavLink } from 'react-router-dom';


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
                        <ListItemIcon>
                            <i className={`${item.icon} text-white`} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography>{item.title}</Typography>} />
                    </ListItem>
                ))}
            </List>

            <Typography variant='body2' sx={{ textTransform: "capitalize", fontWeight: "700", padding: "10px" }}>Account Pages</Typography>

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
                        <ListItemIcon>
                            <i className={`${item.icon} text-white`} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography>{item.page}</Typography>} />
                    </ListItem>
                ))}
            </List>
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