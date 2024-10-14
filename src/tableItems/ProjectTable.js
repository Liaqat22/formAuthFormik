import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box, ListItemAvatar, ListItem, List, ListItemText, Button,  LinearProgress, } from '@mui/material';
import { tableData } from '../database/dataStorage';
import BoxMrgPdgBgBrPaper from '../components/BoxMrgPdgBgBrPaper';

function ProjectTable() {
    const tableStyle = {
        fontWeight: "700",
        color: "white",
        fontSize: "small",
        whiteSpace: "nowrap"}
  return (
<>
<BoxMrgPdgBgBrPaper>
                <Typography fontWeight={700} margin="1rem 0">Projects table</Typography>

                <TableContainer >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow >

                                <TableCell ><Typography variant='body2' className='tabelcell-head-typo'>PROJECTS</Typography></TableCell>
                                <TableCell ><Typography variant='body2' className='tabelcell-head-typo'>BUDGET</Typography></TableCell>
                                <TableCell ><Typography variant='body2' className='tabelcell-head-typo'>STATUS</Typography></TableCell>
                                <TableCell ><Typography variant='body2' className='tabelcell-head-typo'>COMPLETION</Typography></TableCell>
                                <TableCell ><Typography variant='body2' className='tabelcell-head-typo'>ACTION</Typography></TableCell>
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
                                        <Typography variant='body2' sx={tableStyle}>{t?.cost}</Typography>
                                    </TableCell>

                                    <TableCell><Typography variant='body2' sx={tableStyle}>{t.status}</Typography></TableCell>

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

export default ProjectTable