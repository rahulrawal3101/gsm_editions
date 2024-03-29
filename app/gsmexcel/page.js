'use client'
import { Button, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const allGsmMember = () => {
    const [allMember, setAllMember] = useState()
    const getGsmData = async () => {
        try {
            const allData = await axios.get('/api/gsmmember');
            if (allData.data.message == 'Fetch All Data successfully') {
                setAllMember(allData.data.resp)
            }
            console.log(data)
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getGsmData();
    }, []);

    console.log(allMember)

    const downloadHandler = () => {
        const allSelections = allMember;
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(allSelections);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Selections');
        XLSX.writeFile(workbook, 'selections.xlsx');
        location.reload();
    }

    
    return (
        <>
            <Grid container sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
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
            </Grid>

        </>
    )
}

export default allGsmMember