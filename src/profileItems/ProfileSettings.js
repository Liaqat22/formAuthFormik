import { Avatar, AvatarGroup, Box, Button, FormControlLabel, Grid2, List, ListItem, ListItemText, Paper, Switch, Typography } from '@mui/material'
import React from 'react'

function ProfileSettings() {
    const account = [
        { text: "Email me when someone follows me" },
        { text: "Email me when someone answers on my post" },
        { text: "Email me when someone mentions me" },
    ]
    const applications = [
        { text: "New launches and projects" },
        { text: "Monthly product updates" },
        { text: "Subscribe to newsletter" },
        { text: "Receive mails weekly" },
    ]
    const projects = [
        {
            title: "modern",
            description: "Music is something that every person has his or her own specific opinion about.",
            src: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/profile-1.b93e4339.png",
            members: [
                {alt:"Remy Sharp", src:"https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png"},
                {alt:"Remy Sharp", src:"https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar6.ce4b99ea.png"},
             ]
        },
        {
            title: "scandinavian",
            description: "As Uber works through a huge amount of internal management turmoil.",
            src: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/profile-2.9c96bf40.png",
            members: [
                {alt:"Remy Sharp", src:"https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png"},
                {alt:"Remy Sharp", src:"https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar6.ce4b99ea.png"},
                {alt:"Remy Sharp", src:"https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar4.2a4ba26c.png"},
             ]
        },
        {
            title: "minimalist",
            description: "Different people have different taste, and various types of music.",
            src: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/profile-3.bc197530.png",
            members: [
                {alt:"Remy Sharp", src:"https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png"},
                {alt:"Remy Sharp", src:"https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar4.2a4ba26c.png"},
             ]
        }
    ];
 

    return (
        <>
            <Box mt={2}>
                <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* switches */}
                    <Grid2 size={{ xs: 12, md: 4 }} component={Paper} sx={
                        {
                            padding: '1rem',
                            background: 'rgb(7 12 39)',
                            borderRadius: '2rem',

                        }}>
                        <Box padding=".6rem">
                            <Typography gutterBottom variant='body1' fontWeight="700" >Profile Settings</Typography>
                        </Box>
                        <List>
                            <Typography variant='body2' gutterBottom>Account</Typography>
                            {account.map((s, i) => (
                                <ListItem key={i} >
                                    <ListItemText
                                        primary={<FormControlLabel
                                            control={
                                                <Switch
                                                size='small'
                                                    defaultChecked
                                                    sx={{
                                                        '& .MuiSwitch-switchBase.Mui-checked': {
                                                            color: 'white', // Thumb color when checked
                                                        },
                                                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                                            backgroundColor: 'rgb(0 117 255)', // Track color when checked
                                                        },
                                                    }} />
                                            }
                                            label={s?.text} // Text label beside the switch
                                            sx={{
                                                '& .MuiFormControlLabel-label': {
                                                    fontSize: ".8rem",
                                                    color: 'rgb(160 164 143)',
                                                    marginLeft: ".5rem",
                                                    marginRight: "-0.1rem"
                                                }
                                            }} // Customize label styles if needed
                                        />}
                                    />
                                </ListItem>
                            ))}
                        </List>

                        <List >
                            <Typography variant='body2' gutterBottom>Applications</Typography>
                            {applications.map((s, i) => (
                                <ListItem key={i} >
                                    <ListItemText 
                                        primary={<FormControlLabel
                                            control={
                                                <Switch
                                                size='small'
                                                    defaultChecked
                                                    sx={{
                                                        '& .MuiSwitch-switchBase.Mui-checked': {
                                                            color: 'white', // Thumb color when checked
                                                        },
                                                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                                            backgroundColor: 'rgb(0 117 255)', // Track color when checked
                                                        },
                                                    }} />
                                            }
                                            label={s?.text} // Text label beside the switch
                                            sx={{
                                                '& .MuiFormControlLabel-label': {
                                                    fontSize: ".8rem",
                                                    color: 'rgb(160 164 143)',
                                                    marginLeft: ".5rem",
                                                    marginRight: "-0.1rem"
                                                }
                                            }} // Customize label styles if needed
                                        />}
                                    />
                                </ListItem>
                            ))}
                        </List>

                    </Grid2>

                    {/* project cards */}
                    <Grid2 size={{ xs: 12, md: 8 }} component={Paper} sx={
                        {
                            padding: '1rem',
                            background: 'rgb(7 12 39)',
                            borderRadius: '2rem',

                        }}>
                        <Box padding=".6rem">
                            <Typography gutterBottom variant='body1' fontWeight="700" >Projects</Typography>
                            <Typography gutterBottom variant='body2' fontSize="small">Architects design houses</Typography>
                        </Box>
                        <Grid2 container spacing={2} columns={12} display="flex" justifyContent="space-around" >
                            {projects?.map((p, i) => (
                                <Grid2 size={{ xs: 12 ,sm:4, md:4 }} key={i} display="flex" justifyContent="space-between" flexDirection="column" mb={1}>
                                    <Box
                                        component="img"
                                        sx={{
                                            height: '200px', // Adjust height
                                            width: '100%', // Adjust width
                                            borderRadius: '8px', // Add rounded corners if desired
                                            objectFit: 'cover', // Adjust how the image fits
                                        }}
                                        src={p?.src} // Replace with your image source
                                        alt="Sample Image"
                                    />
                                    <Box padding=".6rem 0rem">
                                        <Typography variant='body2' fontSize="smaller">Project # {i + 1}</Typography>
                                        <Typography gutterBottom variant='body1' fontWeight="700" >{p?.title}</Typography>
                                        <Typography gutterBottom variant='body2' fontSize=".7rem" >{p?.description}</Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" padding="0 1rem 0 0">
                                        <Button variant = "outlined" sx={{fontSize:".7rem" , borderRadius:".5rem" ,color:"white",background:"transparent"}} >view all</Button>
                                        <AvatarGroup max={3}>
                                                        {p?.members?.map((m, i) => (
                                                            <Avatar alt={m?.alt} src={m?.src} key={i} />
                                                        ))}
                                                    </AvatarGroup>
                                    </Box>
                                </Grid2>
                            ))}

                        </Grid2>
                    </Grid2>
                </Grid2>
            </Box>
        </>
    )
}

export default ProfileSettings