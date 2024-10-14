import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,  ListItemAvatar, ListItem, List, ListItemText, Button, Avatar,  } from '@mui/material';
import { employeeData } from '../database/authorTable';
import BoxMrgPdgBgBrPaper from '../components/BoxMrgPdgBgBrPaper';

function AuthorsTable() {
    const tableStyle = {
        fontWeight: "700",
        color: "white",
        fontSize: "small",
        whiteSpace: "nowrap"
    }
    return (
        <>
            <BoxMrgPdgBgBrPaper>

                <Typography fontWeight={700} margin="1rem 0">Authors table</Typography>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow >

                                <TableCell  ><Typography variant='body2' className='tabelcell-head-typo'   >AUTHOR</Typography></TableCell>
                                <TableCell  ><Typography variant='body2' className='tabelcell-head-typo' >FUNCTION</Typography></TableCell>
                                <TableCell  ><Typography variant='body2' className='tabelcell-head-typo' >STATUS</Typography></TableCell>
                                <TableCell ><Typography variant='body2' className='tabelcell-head-typo' >EMPLOYED</Typography></TableCell>
                                <TableCell ><Typography variant='body2' className='tabelcell-head-typo' >ACTION</Typography></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {employeeData?.map((t, index) => (

                                <TableRow key={index + 1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                    <TableCell>
                                        <List className='p-0'>
                                            <ListItem >
                                                <ListItemAvatar sx={{ minWidth: "35px" }}>
                                                    <Avatar alt="Remy Sharp" src={t?.img}  />
                                                </ListItemAvatar>
                                                <ListItemText  >
                                                    <Typography variant='body2' fontSize="small" fontWeight={700} color='white'>{t?.author}</Typography>
                                                    <Typography variant='body2' fontSize="small">{t?.email}</Typography>
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    </TableCell>

                                    <TableCell>
                                        <Typography variant='body2' sx={tableStyle}>{t?.function}</Typography>
                                        <Typography variant='body2' fontSize="smaller">{t?.profession}</Typography>
                                    </TableCell>

                                    <TableCell><Typography variant='body2' sx={tableStyle}><span style={{ background: t.status === "online" ? "green" : "#495d70", borderRadius: ".5rem", padding: ".2rem .4rem", fontWeight: "400" }}>{t.status}</span></Typography></TableCell>
                                    <TableCell><Typography variant='body2' sx={tableStyle}>{t.employed}</Typography></TableCell>
                                    <TableCell><Button variant='text'><i className="fas fa-ellipsis-v text-white" /></Button></TableCell>

                                </TableRow>

                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </BoxMrgPdgBgBrPaper>


        </>
    )
}

export default AuthorsTable