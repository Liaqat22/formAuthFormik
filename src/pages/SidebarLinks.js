import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

function SidebarLinks() {
    const links = [
        { title: "dashboard", icon: 'fa-solid fa-home', url: "/" },         // Home icon for dashboard
        { title: "tables", icon: 'fa-solid fa-table', url: "/table" },      // Table icon for tables
        { title: "billing", icon: 'fa-solid fa-file-invoice-dollar', url: "/billing" }, // Invoice icon for billing
        { title: "RTL", icon: 'fa-solid fa-language', url: "/rtl" },        // Language icon for RTL
    ];
    

    const accounts = [
        { page: "profile", icon: 'fa-solid fa-user', url: "/profile" },       // User icon for profile
        { page: "signIn", icon: 'fa-solid fa-sign-in-alt', url: "/signIn" },  // Sign-in icon for signIn
        { page: "signUp", icon: 'fa-solid fa-user-plus', url: "/signUp" },    // User-plus icon for signUp
    ];
    
    return (
        <>
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

            <Typography variant='body2' sx={{ textTransform: "capitalize", fontWeight: "700" }}>Account Pages</Typography>

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
        </>
    );
}

export default SidebarLinks;
