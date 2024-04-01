'use client'
import { AppBar, Box, Button, Grid, Paper, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { deletePlayersData, fetchPlayersTimings } from '@/lib/actions/verifyplayer.action';

const allGsmMember = () => {
    const [data,setData] = useState([]);
    const fetchData  = async()=>{
        const getData = await fetchPlayersTimings()
        setData(()=>{return getData.response});
    }
    useEffect(()=>{
        fetchData();
    },[])
    useEffect(()=>{return;},[data]);
    console.log(data)

    const deleteHandler=async()=>{
        const delData = await deletePlayersData();
        if(delData.message= 'All Enteries Deleted Successfully'){
            alert(delData.message);
            location.reload();
        }
        console.log(delData)
        
    }
    // const [allMember, setAllMember] = useState()
    // const getGsmData = async () => {
    //     try {
    //         const allData = await axios.get('/api/gsmmember');
    //         if (allData.data.message == 'Fetch All Data successfully') {
    //             setAllMember(allData.data.resp)
    //         }
    //         // console.log(allData)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // useEffect(() => {
    //     getGsmData();
    // }, []);

    // console.log(allMember)

    const downloadHandler = () => {
        const allSelections = data;
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(allSelections);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Selections');
        XLSX.writeFile(workbook, 'selections.xlsx');
        location.reload();
    };

    


    return (
        <>
            {/* <Grid container sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item lg={5} md={7} sm={10} xs={11} >
                    <Grid container component={Paper} elevation={2} >
                        <Grid item xs={12} sx={{ bgcolor: 'crimson', p: '10px', borderRadius: '5px 5px 0px 0px' }}>
                            <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: 'white', fontSize: '23px' }}>GSM Edition 7</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: '20px' }}>
                            <Typography sx={{ fontSize: '20px', textAlign: 'center' }}>Download All Gsm Member Data </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '40px', mb: '30px' }}>
                            <Button variant='contained' onClick={downloadHandler} >Download </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid> */}

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" >
                    <Toolbar sx={{bgcolor:'black'}}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontSize:{lg:'25px',md:'20px',sm:'18px',xs:'17px'},xs:'17px' }}>
                            User Timing Data
                        </Typography>
                        <Box sx={{display:'flex', justifyContent:'space-evenly',alignItems:'center', flexDirection:{lg:'row', md:'row',sm:'row',xs:'row'}}}>
                        <Button color='error' variant='contained' sx={{mr:'20px',fontSize:{lg:'14px',md:'14px',sm:'10px',xs:'10px'}}} onClick={deleteHandler}>Delete All Enteries</Button>
                        <Button color="success" variant='contained' onClick={downloadHandler} sx={{fontSize:{lg:'14px',md:'14px',sm:'10px',xs:'10px'}}}>Download Excel Sheet</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* <BasicTable /> */}
            <TableContainer component={Paper} sx={{minHeight:'100vh'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{width:'fit-content',backgroundColor:'lightgreen',border:'4px solid black'}}>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}} >Player Name</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Player ID</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday Date</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday Date</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 9:00 AM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 9:30 AM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 10:00 AM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 10:30 AM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 11:00 AM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 11:30 AM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 12:00 Noon</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 12:30 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 1:00 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 1:30 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 2:00 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 2:30 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 3:00 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 3:30 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 4:00 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 4:30 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 5:00 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Saturday 5:30 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 9:00 AM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 9:30 AM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 10:00 AM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 10:30 AM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 11:00 AM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 11:30 AM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 12:00 Noon</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 12:30 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 1:00 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 1:30 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 2:00 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 2:30 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 3:00 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 3:30 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 4:00 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 4:30 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 5:00 PM</TableCell>
            <TableCell align="center" sx={{border:'2px solid black',fontWeight:900}}>Sunday 5:30 PM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {data.length > 0 && 
          data.map((timing) => (
            <TableRow
              key={timing._id}
              sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
            >
             <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>{timing.Player_Name}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>{timing.Player_Id}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>{timing.Saturday_Date}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>{timing.Sunday_Date}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_9:00 AM"] === '✓' ?'green' :'red'}}>{timing["saturday_9:00 AM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_9:30 AM"] === '✓' ?'green' :'red'}}>{timing["saturday_9:30 AM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_10:00 AM"] === '✓' ?'green' :'red'}}>{timing["saturday_10:00 AM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_10:30 AM"] === '✓' ?'green' :'red'}}>{timing["saturday_10:30 AM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_11:00 AM"] === '✓' ?'green' :'red'}}>{timing["saturday_11:00 AM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_11:30 AM"] === '✓' ?'green' :'red'}}>{timing["saturday_11:30 AM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_12:00 Noon"] === '✓' ?'green' :'red'}}>{timing["saturday_12:00 Noon"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_12:30 PM"] === '✓' ?'green' :'red'}}>{timing["saturday_12:30 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_1:00 PM"] === '✓' ?'green' :'red'}}>{timing["saturday_1:00 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_1:30 PM"] === '✓' ?'green' :'red'}}>{timing["saturday_1:30 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_2:00 PM"] === '✓' ?'green' :'red'}}>{timing["saturday_2:00 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_2:30 PM"] === '✓' ?'green' :'red'}}>{timing["saturday_2:30 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_3:00 PM"] === '✓' ?'green' :'red'}}>{timing["saturday_3:00 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_3:30 PM"] === '✓' ?'green' :'red'}}>{timing["saturday_3:30 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_4:00 PM"] === '✓' ?'green' :'red'}}>{timing["saturday_4:00 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_4:30 PM"] === '✓' ?'green' :'red'}}>{timing["saturday_4:30 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_5:00 PM"] === '✓' ?'green' :'red'}}>{timing["saturday_5:00 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["saturday_5:30 PM"] === '✓' ?'green' :'red'}}>{timing["saturday_5:30 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_9:00 AM"] === '✓' ?'green' :'red'}}>{timing["sunday_9:00 AM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_9:30 AM"] === '✓' ?'green' :'red'}}>{timing["sunday_9:30 AM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_10:00 AM"] === '✓' ?'green' :'red'}}>{timing["sunday_10:00 AM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_10:30 AM"] === '✓' ?'green' :'red'}}>{timing["sunday_10:30 AM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_11:00 AM"] === '✓' ?'green' :'red'}}>{timing["sunday_11:00 AM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_11:30 AM"] === '✓' ?'green' :'red'}}>{timing["sunday_11:30 AM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_12:00 Noon"] === '✓' ?'green' :'red'}}>{timing["sunday_12:00 Noon"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_12:30 PM"] === '✓' ?'green' :'red'}}>{timing["sunday_12:30 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_1:00 PM"] === '✓' ?'green' :'red'}}>{timing["sunday_1:00 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_1:30 PM"] === '✓' ?'green' :'red'}}>{timing["sunday_1:30 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_2:00 PM"] === '✓' ?'green' :'red'}}>{timing["sunday_2:00 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_2:30 PM"] === '✓' ?'green' :'red'}}>{timing["sunday_2:30 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_3:00 PM"] === '✓' ?'green' :'red'}}>{timing["sunday_3:00 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_3:30 PM"] === '✓' ?'green' :'red'}}>{timing["sunday_3:30 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_4:00 PM"] === '✓' ?'green' :'red'}}>{timing["sunday_4:00 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_4:30 PM"] === '✓' ?'green' :'red'}}>{timing["sunday_4:30 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_5:00 PM"] === '✓' ?'green' :'red'}}>{timing["sunday_5:00 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_5:30 PM"] === '✓' ?'green' :'red'}}>{timing["sunday_5:30 PM"]}</TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}

export default allGsmMember