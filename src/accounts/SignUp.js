import React, { useState } from 'react'
import SignInUpParent from '../components/SignInUpParent'
import { TextField, Button, Typography, FormControlLabel, Switch } from '@mui/material';
import { NavLink } from 'react-router-dom';


function SignUp() {
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

                <Typography variant="h4" gutterBottom>
                    Sign Up
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
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
                    <div className='text-center mb-1 '>
                    <hr className='w-80 m-3 text-white'/>
                    <Typography variant='body2'>OR</Typography>
                    </div>
                    <Typography variant="h6" display="flex" justifyContent="space-around" alignItems="center" sx={{
                        borderRadius: "2rem",
                        padding: "1rem .5rem",
                        background: "linear-gradient(177deg, rgb(2 2 6 / 73%) 19.41%, rgb(14 20 50) 76.65%);", mt: 2,
                        fontSize: "1.5rem"
                    }}>

                        <i className="fab fa-facebook " /> 
                         <i className="fab fa-google " /> 
                         <i className="fab fa-apple " /> 


                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2, background: "#0075ff", borderRadius: "1rem" }}
                    >
                        Sign Up
                    </Button>
                </form>
                <Typography variant='body2' color='white' mt={2}>Already have an account?
                    <NavLink to="/signIn"> SignIn</NavLink></Typography>
            </SignInUpParent>

        </>
    )
}

export default SignUp