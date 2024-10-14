import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Grid2, Box, LinearProgress, ListItemAvatar, ListItem, List, ListItemText, Avatar, AvatarGroup, } from '@mui/material';
import React from 'react'
import { listData, tableData } from '../database/dataStorage';

function TableList() {

    const tableStyle = {
        fontWeight: "700",
        color: "white",
        fontSize: "small",
        whiteSpace: "nowrap"
    }
    return (
        <>
            <Box margin="1rem 0">
                <Grid2 spacing={1} container columns={{ xs: 4, sm: 8, md: 12 }} >
                    {/* Table grid */}
                    <Grid2 size={{ xs: 12, sm: 12, md: 8.5 }} component={Paper} sx={{
                        background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)", padding: "1rem", borderRadius: "2rem",
                    }} >
                        <Box padding="1rem .7rem" marginBottom={2} display="flex" justifyContent="space-between" alignItems="center">
                            <Box>
                                <Typography fontWeight={700}>Projects</Typography>
                                <Typography variant='body2' fontSize="small"><i className='fa-solid fa-check mx-1' style={{ background: "green", padding: ".1rem", borderRadius: "1rem" }} /> <b>30 done</b> this month</Typography>
                            </Box>
                            <Typography ><i className='fa-solid fa-bars' /></Typography>

                        </Box>
                        <TableContainer >
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow >

                                        <TableCell  ><Typography variant='body2' className='tabelcell-head-typo' >COMPANIES</Typography></TableCell>
                                        <TableCell  ><Typography variant='body2' className='tabelcell-head-typo'>MEMBERS</Typography></TableCell>
                                        <TableCell  ><Typography variant='body2' className='tabelcell-head-typo'>BUDGET</Typography></TableCell>
                                        <TableCell ><Typography variant='body2' className='tabelcell-head-typo'>COMPLETION</Typography></TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {tableData?.map((t, index) => (

                                        <TableRow key={index + 1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                            <TableCell>
                                                <List className='p-0'>
                                                    <ListItem >
                                                        <ListItemAvatar sx={{ minWidth: "35px" }}>
                                                            <i className={`${t?.icon}`} style={{ color: t?.color, marginRight: ".3rem" }} />
                                                        </ListItemAvatar>
                                                        <ListItemText  >
                                                            <Typography variant='body2' sx={tableStyle}> {t.task}</Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                </List>
                                            </TableCell>

                                            <TableCell>
                                                <Typography variant='body2' sx={tableStyle}>
                                                    <AvatarGroup max={3}>
                                                        {t?.members?.map((m, i) => (
                                                            <Avatar alt={m?.alt} src={m?.src} key={i} />
                                                        ))}
                                                    </AvatarGroup>
                                                </Typography>
                                            </TableCell>

                                            <TableCell><Typography variant='body2' sx={tableStyle}>{t.cost}</Typography></TableCell>

                                            <TableCell>
                                                <Typography variant='body2' sx={tableStyle}>{t.progress}%</Typography>
                                                <Box p={.5}>
                                                    <LinearProgress variant="determinate" value={t.progress}
                                                        sx={{
                                                            height: 6,
                                                            borderRadius: 5,
                                                            backgroundColor: '#e0e0e0',
                                                            '& .MuiLinearProgress-bar': {
                                                                backgroundColor: '#0075ff',
                                                            }
                                                        }} /> {/* Bar color */}

                                                </Box>
                                            </TableCell>


                                        </TableRow>

                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid2>

                    {/* list grid*/}
                    <Grid2 size={{ xs: 12, sm: 12, md: 3.5 }} component={Paper} sx={{
                        background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)", padding: "1rem", borderRadius: "2rem",
                    }} >
                        <Box padding="1rem .7rem" marginBottom={2}>
                            <Typography fontWeight={700}>Orders overview</Typography>
                            <Typography variant='body2' fontSize="small"><i className='fa-solid fa-check mx-1' style={{ background: "green", padding: ".1rem", borderRadius: "1rem" }} /> <b>+ 30%</b>  this month</Typography>
                        </Box>
                        {listData?.map((l, i) => (
                            <List sx={{ width: '100%', padding: "0" }} key={i}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <i className={`${l?.icon}`} style={{ color: l?.color }} />
                                    </ListItemAvatar>
                                    <ListItemText  >
                                        <Typography variant='body2' fontSize="small" fontWeight={700} color='white'>{l?.description}</Typography>
                                        <Typography variant='body2' fontSize="small">{l?.date}</Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        ))}
                    </Grid2>
                </Grid2>
            </Box>

        </>
    )
}

export default TableList