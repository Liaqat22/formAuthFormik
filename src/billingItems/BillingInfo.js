import { Box, Button, Grid2, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'
import { BillingInfoData, transactions } from './BillingData'

function BillingInfo() {
  
    return (
        <>
            <Box margin="1rem  0">
                <Grid2 container spacing={2} columns={12}>

                    <Grid2 size={{ xs: 12, sm: 12, md: 7 }} sx={{
                        background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)", borderRadius: "2rem",
                        minHeight: "370px",
                        padding: "1rem",
                        // display: "flex", justifyContent: "space-around", flexDirection: "column"
                    }}>
                        <Box margin=".6rem 0">
                            <Typography variant='body1' fontWeight={700}>Billing Information</Typography>
                        </Box>
                        <Box>

                            {BillingInfoData?.map((item, i) => (
                                <Paper key={i} sx={{
                                    background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)", borderRadius: "2rem",
                                    minHeight: "100px",
                                    padding: "1rem",
                                    margin: "1rem  0",
                                    display: "flex", justifyContent: "space-between",

                                }}>
                                    <div>
                                        <Typography variant='body2' color='white'>{item?.name}</Typography>
                                        <List>
                                            <ListItem >
                                                <ListItemText>
                                                    <Typography variant='body2' >company Name : {item?.companyName} </Typography>
                                                    <Typography variant='body2'>email Address : {item?.emailAddress} </Typography>
                                                    <Typography variant='body2'>VAT Number : {item?.vatNumber} </Typography>
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    </div >

                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Button variant='text' sx={{ color: "red" }}><i className='fas fa-trash mx-2' /> delete</Button>
                                        <Button variant='text' sx={{ color: "gray" }}><i className='fas fa-pencil-alt mx-2' /> edit</Button>
                                    </div>
                                </Paper>
                            ))}
                        </Box>
                    </Grid2>


                    <Grid2 size={{ xs: 12, sm: 12, md: 5 }} sx={{
                        background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)", borderRadius: "2rem",
                        minHeight: "370px",
                        padding: "1rem",
                        // display: "flex", justifyContent: "space-around", flexDirection: "column"
                    }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: ".6rem 0" }}>
                            <Typography variant='body1' fontWeight={700}>Your Transaction's</Typography>
                            <Typography variant='body1' > <i className="fas fa-calendar-alt" /><span className='mx-1'>23 - Dec 2024</span></Typography>
                        </Box>

                        <Box>
                            <Typography variant='body2'  >NEWEST</Typography>
                            {transactions?.map((t, i) => (
                                <div key={i}> {/* Use a key for the outer div */}
                                    {t?.newest?.map((n, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                padding: "1rem",
                                                mb:1
                                            }}
                                        >
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <div
                                                    style={{
                                                        padding: ".2rem .7rem",
                                                        border: `1px solid ${n?.color}`,
                                                        borderRadius: "50%",
                                                        color: n?.color,
                                                        marginRight: ".7rem",
                                                    }}
                                                >
                                                    <i className={n?.icon} />
                                                </div>
                                                <div>
                                                    <Typography variant='body2' color='white' fontWeight={700}>{n?.company}</Typography>
                                                    <Typography variant='body2'>{n?.date}</Typography>
                                                </div>
                                            </Box>
                                            <Typography color={n?.color}>{n.amount}</Typography>
                                        </Box>
                                    ))}
                                </div>
                            ))}
                             <Typography variant='body2' mt={2}>YESTERDAY</Typography>
                            {transactions?.map((t, i) => (
                                <div key={i}> {/* Use a key for the outer div */}
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                padding: "1rem",
                                                mb:1
                                            }}
                                        >
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <div
                                                    style={{
                                                        padding: ".2rem .7rem",
                                                        border: `1px solid ${t?.color}`,
                                                        borderRadius: "50%",
                                                        color: t?.color,
                                                        marginRight: ".7rem",
                                                    }}
                                                >
                                                    <i className={t?.icon} />
                                                </div>
                                                <div>
                                                    <Typography variant='body2' color='white' fontWeight={700}>{t?.company}</Typography>
                                                    <Typography variant='body2'>{t?.date}</Typography>
                                                </div>
                                            </Box>
                                            <Typography color={t?.color}>{t.amount}</Typography>
                                        </Box>
                                </div>
                            ))}
                        </Box>


                    </Grid2>
                </Grid2>

            </Box>

        </>

    )
}

export default BillingInfo