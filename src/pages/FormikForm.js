import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { TextField, Button, FormHelperText } from '@mui/material';

const SignupSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
});

function FormikForm() {
    return (
        <div className = "d-flex justify-content-center align-items-center" style={{minHeight:"70vh"}}>
        <Formik
            initialValues={{ username: '', email: "", password: '' }}
            validationSchema={SignupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                // Make an API request
                try {
                    await axios.post('https://dummyjson.com/auth/login', values)

                    toast.success('Signup successful!');
                    resetForm(); // Optionally reset the form fields   
                } catch (error) {
                    toast.error('Signup failed. Please try again.');
                    console.error('Error:', error); // Handle errors as needed
                }
                finally {
                    setSubmitting(false); // Stop the submit loader
                }
            }}
        >
            {({ isSubmitting, errors, touched }) => (
                <Form>
                    <div className='mb-2'>
                        <Field
                            name="username"
                            as={TextField}
                            label="Username"
                            error={touched.username && Boolean(errors.username)}
                            helperText={<ErrorMessage name="username" component={FormHelperText} />}
                        />
                    </div>
                    <div className='mb-2'>
                        <Field
                            name="email"
                            as={TextField}
                            type="email"
                            label="email"
                            error={touched.email && Boolean(errors.email)}
                            helperText={<ErrorMessage name="email" component={FormHelperText} />}
                        />
                    </div>
                    <div className='mb-2'>
                        <Field
                            name="password"
                            as={TextField}
                            label="Password"
                            type="password"
                            error={touched.password && Boolean(errors.password)}
                            helperText={<ErrorMessage name="password" component={FormHelperText} />}
                        />
                    </div>
                    <Button type="submit" variant='contained' disabled={isSubmitting}>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
        </div>
    );
}

export default FormikForm;
