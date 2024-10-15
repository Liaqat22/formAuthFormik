import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../imgs/dashboard-logo.png'
import logoTop from '../imgs/logo-top.png'

function SidebarLinks() {
    const links = [
        { title: "dashboard", icon: 'fa-solid fa-home', url: "" },         // Home icon for dashboard
        { title: "tables", icon: 'fa-solid fa-table', url: "table" },      // Table icon for tables
        { title: "billing", icon: 'fa-solid fa-file-invoice-dollar', url: "billing" }, // Invoice icon for billing
        { title: "RTL", icon: 'fa-solid fa-language', url: "rtl" },        // Language icon for RTL
    ];


    const accounts = [
        { page: "profile", icon: 'fa-solid fa-user', url: "profile" },       // User icon for profile
        { page: "signIn", icon: 'fa-solid fa-sign-in-alt', url: "signIn" },  // Sign-in icon for signIn
        { page: "signUp", icon: 'fa-solid fa-user-plus', url: "signUp" },    // User-plus icon for signUp
    ];

    return (
        <Box position="sticky" top="1px" sx={{
            maxHeight: "100vh",
            overflowY: "auto",

            '&::-webkit-scrollbar': {
                width: '5px', // width of the scrollbar
                paddingLeft: ".5rem"
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#888', // color of the scrollbar thumb
                borderRadius: '2rem', // rounded corners
                // display:"none",

            },
            '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#555', // color when hovering over thumb

            },

        }} >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                <Box component='img' src={logoTop} alt='dashboard-logo' sx={{ height: "60px", width: "60px" }} />
                <Box>
                    <Typography color='#65d7f3' fontSize="1.3rem" className='mx-1' fontWeight="700">Liaqat Ali</Typography>
                    <Typography color='#faedcd' fontSize=".7rem" className='mx-1'>( React
                        <span style={{ color: "#98f5e1", fontWeight: "700" }}> & </span>UI Xpert )
                    </Typography>
                </Box>
            </Box>
            <div className='d-flex justify-content-center'> <hr style={{ margin: ".5rem 0" , width:"80%" , border: "1px solid white"}} /></div>
            <List >
                {links?.map((item, i) => (
                    <ListItem
                        className='mui-list-item mt-2 '
                        button
                        component={NavLink}
                        to={`/${item?.url}`}
                        key={i}
                        sx={{ textTransform: "capitalize" }}
                    >
                        <ListItemIcon sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <i className={`${item.icon} text-white`} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography>{item.title}</Typography>} />
                    </ListItem>
                ))}
            </List>

            <Typography variant='body2' sx={{ textTransform: "capitalize", fontWeight: "700", fontSize: "smaller" }}>Account Pages</Typography>

            <List>
                {accounts?.map((item, i) => (
                    <ListItem
                        className='mui-list-item mt-2 '
                        button
                        component={NavLink}
                        to={`/${item?.url}`}
                        key={i}
                        sx={{ textTransform: "capitalize" }}
                    >
                        <ListItemIcon sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <i className={`${item.icon} text-white`} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography>{item.page}</Typography>} />
                    </ListItem>
                ))}
            </List>
            <Box component='img' src={logo} alt='dashboard-logo' sx={{ height: "200px", width: "100%" }} />

        </Box>
    );
}

export default SidebarLinks;
