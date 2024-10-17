import { Box, Container, Grid2 } from '@mui/material';
import React from 'react';
import Layout from '../layout/Layout';

function SignInUpParent({ children }) {
    return (
        <>
            <div className="parent-grid" style={{ position: 'relative',  }}>
                {/* Background Image */}
                <div
                    style={{
                        backgroundImage: "url(https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/signUpImage.c40a27bb.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1, // Ensure it stays behind the content
                    }}
                />

                {/* Overlay with opacity */}
                <div
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity here (0.5 is 50% opacity)
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1, // Also behind the content
                    }}
                />

                {/* Main Content */}
                <Layout>
                    <Grid2 container spacing={2} columns={12}>
                        <Grid2 size={{ xs: 12, sm: 12, md: 12 }} className="content-grid">
                            <Box
                                sx={{
                                    minHeight: '80vh',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Container maxWidth="sm">
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            mt: 5,
                                            mb: 5,
                                            padding: '2rem',
                                            background: '#ffffff1c',
                                            backdropFilter: 'blur(3px)',
                                            borderRadius: '2rem',
                                        }}>
                                        {children}
                                    </Box>
                                </Container>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Layout>
            </div>
        </>
    );
}

export default SignInUpParent;
