import { Box, Button, Grid2, List, ListItem, ListItemText, Typography } from '@mui/material'
import { Avatar } from 'antd'
import React from 'react'

function PaymentDetails() {
    const paymentMethodStyle = {
        padding: '.8rem',
        border: '1px solid',
        borderRadius: '1rem',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin : ".5rem 0"

    }
    const invoiceData = [
        {
            date: 'March 01, 2020',
            invoice: '#MS-415646',
            amount: '$180',
        },
        {
            date: 'February 10, 2021',
            invoice: '#RV-126749',
            amount: '$250',
        },
        {
            date: 'April 05, 2020',
            invoice: '#QW-103578',
            amount: '$120',
        },
        {
            date: 'June 25, 2019',
            invoice: '#MS-415646',
            amount: '$180',
        },
        {
            date: 'March 01, 2019',
            invoice: '#AR-803481',
            amount: '$300',
        },
    ];

    return (
        <>
            <Box margin="1rem  0">
                <Grid2 container spacing={2} columns={12}>
                    <Grid2 size={{ xs: 12, sm: 12, md: 8 }} container spacing={2} columns={12}>

                        <Grid2 size={{ xs: 12, sm: 6 }} sx={{
                            backgroundImage: "url(https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/billing-background-card.4fa04d9c.png)"
                            , borderRadius: "2rem",
                            minHeight: "270px",
                            padding: "1rem",
                            display: "flex", justifyContent: "space-around", flexDirection: "column"
                        }}>
                            <Box p={2} display="flex" justifyContent="space-between" alignItems="center"> {/* visa card name*/}
                                <Typography variant='h5' fontWeight={700}>Liaqat Ali</Typography>
                                <Typography><i className="fab fa-cc-visa fa-2x" /></Typography>
                            </Box>

                            <Box p={2}> {/* visa card number*/}
                                <Typography variant='h5' fontWeight={700} mb={2}>7812   2139   0823   7916</Typography>

                                <Box display="flex" alignItems="center" >
                                    <div className='valid-date mx-2'>
                                        <Typography variant='body2' color='white'>VALID THRU</Typography>
                                        <Typography variant='body2' color='white'>05/24</Typography>
                                    </div>
                                    <div className='cvv mx-2'>
                                        <Typography variant='body2' color='white'>cvv</Typography>
                                        <Typography variant='body2' color='white'>09X</Typography>
                                    </div>
                                </Box>

                            </Box>
                        </Grid2>



                        <Grid2 size={{ xs: 12, sm: 6 }} sx={{
                            background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)", borderRadius: "2rem",
                            minHeight: "270px",
                            padding: "1rem",
                            display: "flex", justifyContent: "space-around", flexDirection: "column"

                        }}>
                            <Box p={2} sx={{
                                background: "rgb(26 35 69)",
                                borderRadius: "2rem",
                                padding: "1rem",
                                display: "flex", justifyContent: "space-between", alignItems: "center"
                            }}> {/* visa card name*/}
                                <div>
                                    <Typography fontSize="smaller" fontWeight={700} color='white'>Credit Balance</Typography>
                                    <Typography variant='h5' fontWeight={700}>$25,215</Typography>
                                </div>

                                <div className='text-center'>
                                    <Button variant="text" className='text-white mb-1'> <i className='fas fa-ellipsis-h  fa-2x ' /> </Button>
                                    <Box component="img" src='https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/graph-billing.b9f0ef12.svg' alt='graph' width="100%" height="25px" />
                                </div>
                            </Box>

                            <Box p={2}> {/* visa card number*/}
                                <Typography variant='body2' mb={1}>NEWEST</Typography>

                                <Box display="flex" justifyContent="space-between" alignItems="center" >
                                    <div className='d-flex'>
                                        <Avatar style={{ backgroundColor: 'rgb(28 35 72)' }} className="mx-1" >
                                            <i className="fas fa-receipt" style={{ fontSize: '1rem', color: 'green' }} />
                                        </Avatar>                                    <div className='valid-date mx-2'>
                                            <Typography variant='body2' color='white'>Bill & Taxes</Typography>
                                            <Typography variant='body2' >Today, 16:36</Typography>
                                        </div>
                                    </div>
                                    <div className='cvv mx-2'>
                                        <Typography variant='body2' color='white'>-$154.50</Typography>
                                    </div>
                                </Box>


                            </Box>
                        </Grid2>

                        <Grid2 size={{ xs: 12, sm: 12, md: 12 }} sx={{
                            background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)", borderRadius: "2rem",
                            minHeight: "140px",
                            padding: "1rem",
                            display: "flex", justifyContent: "space-around", flexDirection: "column"
                        }} >
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Typography variant='body1' fontWeight={700}>Payment Method</Typography>
                                <Button variant='contained' sx={{ bgcolor: 'rgb(0, 117, 255)', fontSize: ".7rem", fontWeight: "700", borderRadius: ".5rem" }}>add new card</Button>
                            </Box>
                            <Box display="flex" justifyContent="space-between" alignItems="center" className = "payment-method mt-2" >

                                <div style={paymentMethodStyle} className='payment-method-inputs'>
                                    <Typography variant='body1' fontWeight={700}><i className="fas fa-credit-card mx-2" /> 7812 2139 0823 XXXX</Typography>
                                    <Button variant='text' color='white'><i className='fas fa-pencil-alt' /></Button>
                                </div>
                                <div style={paymentMethodStyle} className='payment-method-inputs'>
                                    <Typography variant='body1' fontWeight={700}><i className="fab fa-cc-visa mx-2" /> 7812 2139 0823 XXXX</Typography>
                                    <Button variant='text' color='white'><i className='fas fa-pencil-alt' /></Button>
                                </div>



                            </Box>
                        </Grid2>

                    </Grid2>

                    {/* Gridmain -2 */}
                    <Grid2 size={{ xs: 12, sm: 12, md: 4 }} sx={{
                        background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)", borderRadius: "2rem",
                        minHeight: "400px",
                        padding: "1rem",
                    }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: ".6rem 0" }}>
                            <Typography variant='body1' fontWeight={700}>Invoices</Typography>
                            <Button variant='contained' sx={{ bgcolor: 'rgb(0, 117, 255)', fontSize: ".7rem", fontWeight: "700", borderRadius: ".4rem" }}>view all</Button>
                        </Box>
                        <Box>
                            <List>
                                {invoiceData.map((invoice, i) => (
                                    <ListItem key={i}>
                                        <ListItemText>

                                            <Typography variant='body2' fontWeight={700} color='white'> {invoice?.date} </Typography>
                                            <Typography variant='body2'> {invoice?.invoice} </Typography>
                                        </ListItemText>


                                        <ListItemText>
                                            <Typography variant='body2' color='white'> {invoice?.amount} </Typography>
                                        </ListItemText>

                                        <ListItemText>
                                            <Typography variant='body2' color='white'> <i className="fas fa-file-pdf" /> PDF </Typography>
                                        </ListItemText>


                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
        </>
    )
}

export default PaymentDetails