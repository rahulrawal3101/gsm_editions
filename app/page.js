'use client'
import { verifyPlayer } from '@/lib/actions/verifyplayer.action'
import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Login = () => {
    const router = useRouter();
    const [playerId, setPlayerId] = useState('');
    const [password, setPassword] = useState('');

    const handlePlayer = async()=>{
        if(playerId && password){
            const playerData = await verifyPlayer({playerId:playerId,password:password});
            if(playerData.message === 'verified'){
             localStorage.setItem('player',JSON.stringify(playerData));
             router.push('/dashboard')
            }else{
             alert(playerData.message)
            }
        }else{
            alert("Fields cannot be blank!")
        }
       }
useEffect(()=>{
    const getData = localStorage.getItem('player');
    if(getData){
        router.push('/dashboard')
    }
},[]);


 
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: '#fafafa' }}>
                <Grid item lg={4} md={5} sm={10} xs={10} sx={{ borderRadius: '10px', bgcolor: 'white' }}>
                    <Grid container component={Paper} elevation={2} >
                        <Grid item xs={12} sx={{ bgcolor: '#bf360c', borderRadius: '10px 10px 0px 0px', p: '10px' }}>
                            <Typography sx={{ color: 'white', fontSize: { lg: '25px', md: '22px', sm: '20px', xs: '18px' }, textAlign: 'center' }}>Login GSM Members</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ p: '5px', mt: '25px' }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>Enter player Id</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ p: '5px' }}>
                            <TextField placeholder='Enter player Id' fullWidth size='small' onChange={(e)=>setPlayerId(e.target.value)}  value={playerId} />
                        </Grid>
                        <Grid item xs={12} sx={{ p: '5px' }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>Enter password</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ p: '5px' }}>
                            <TextField placeholder='Enter password' fullWidth size='small' onChange={(e)=>setPassword(e.target.value)}  value={password} />
                        </Grid>

                        <Grid item xs={12} sx={{  mt: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', p:'5px' }} >
                            <Button variant='contained' color='success'  sx={{ fontSize:'17px', width:'100%',mb:'3px', '&:hover':{bgcolor:'#bf360c'}}} onClick={handlePlayer}>Login</Button>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>

        </>
    )
}

export default Login