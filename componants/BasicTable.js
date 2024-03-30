'use client'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { fetchPlayersTimings } from '@/lib/actions/verifyplayer.action';


export default function BasicTable() {
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
  return (
    <TableContainer component={Paper} sx={{minHeight:'100vh'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{width:'fit-content',backgroundColor:'lightgreen',border:'4px solid black'}}>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}} >Player Name</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Player ID</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday Date</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday Date</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 9:00 AM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 9:30 AM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 10:00 AM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 10:30 AM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 11:00 AM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 11:30 AM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 12:00 Noon</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 12:30 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 1:00 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 1:30 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 2:00 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 2:30 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 3:00 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 3:30 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 4:00 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 4:30 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 5:00 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Saturday 5:30 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 9:00 AM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 9:30 AM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 10:00 AM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 10:30 AM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 11:00 AM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 11:30 AM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 12:00 Noon</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 12:30 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 1:00 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 1:30 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 2:00 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 2:30 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 3:00 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 3:30 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 4:00 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 4:30 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 5:00 PM</TableCell>
            <TableCell align="center" sx={{border:'1px solid black',fontWeight:900}}>Sunday 5:30 PM</TableCell>
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
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_4:00 PM"] === '✓' ?'green' :'red'}}>{timing["saturday_4:00 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_4:30 PM"] === '✓' ?'green' :'red'}}>{timing["sunday_4:30 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_5:00 PM"] === '✓' ?'green' :'red'}}>{timing["sunday_5:00 PM"]}</TableCell>
              <TableCell align="center" sx={{border:'1px solid black',fontWeight:900,bgcolor:timing["sunday_5:30 PM"] === '✓' ?'green' :'red'}}>{timing["sunday_5:30 PM"]}</TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}