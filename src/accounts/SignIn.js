import React, { useState } from 'react'
import SignInUpParent from '../components/SignInUpParent'
import { TextField, Button, Box, Typography,  FormControlLabel, Switch } from '@mui/material';
import { NavLink } from 'react-router-dom';


function SignIn() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Perform your form submission or authentication logic here
    };
  return (
    <>
   
   

                            <SignInUpParent>
                               <Box mb = {2}>
                                <Typography variant='h5' fontWeight={700}>Nice to see you!</Typography>
                                <Typography variant='body2'  color='white'>Enter your email and password to sign in</Typography>
                               </Box>
                                        
                                        <form onSubmit={handleSubmit}>
                                           
                                            <TextField
                                                label="Email"
                                                variant="outlined"
                                                fullWidth
                                                margin="normal"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <TextField
                                                label="Password"
                                                variant="outlined"
                                                fullWidth
                                                margin="normal"
                                                type="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />
                                            <div className='mt-2'>
                                                <FormControlLabel
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
                                                    label={"Remember me"} // Text label beside the switch
                                                    sx={{
                                                        '& .MuiFormControlLabel-label': {
                                                            fontSize: ".8rem",
                                                            // color: 'rgb(160 164 143)',
                                                            marginLeft: ".5rem",

                                                        }
                                                    }} // Customize label styles if needed
                                                />
                                            </div>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                                sx={{ mt: 2 , background:"#0075ff" , borderRadius:"1rem" }}
                                            >
                                                Sign In
                                            </Button>
                                        </form>
                                    <Typography variant='body2' color='white' mt={2}>Don't have an account?
                                        <NavLink to="/signup"> SignUp</NavLink></Typography>
                            </SignInUpParent>

    </>  )
}

export default SignIn