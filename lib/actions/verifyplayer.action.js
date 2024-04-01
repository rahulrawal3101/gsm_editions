'use server'

import playerData from './playerData';
import Timing from '../model/timings.model';
import { connectDB } from '../mongoconnection';

export const verifyPlayer = async (props) => {
    const { playerId, password } = props;
    const JsonData = playerData();
    try {
        const findplayer = JsonData.data.find(player => player['Player ID'] === playerId);
        if (findplayer) {
            if (password === findplayer.Password) {
                console.log("player verified");
                return JSON.parse(JSON.stringify({ message: "verified", playerName: findplayer['Player Name'], playerId: findplayer['Player ID'] }));
            } else {
                return JSON.parse(JSON.stringify({ message: "Password is wrong!!" }));
            }
        } else {
            return JSON.parse(JSON.stringify({ message: "User not found!!" }));
        }
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

// export const savePlayerData = async (props) => {
//     let existingData = [];
//     try {
//         const data = fs.readFileSync('playerStats.json', 'utf8');
//         existingData = JSON.parse(data);
//     } catch (error) {
//         console.error('Error reading file:', error);
//     }

//     existingData.push(props[0]);
//     try {
//         fs.writeFileSync('playerStats.json', JSON.stringify(existingData, null, 2));
//         console.log('Data updated successfully');
//         return  JSON.parse(JSON.stringify({message:'Your Entries have been saved',response:'ok'})) ;
//     } catch (error) {
//         console.error('Error writing file:', error);
//         return JSON.parse(JSON.stringify({messageWrong:'Failed to save!',response:'bad',error:error}));
//     }
// };


export const savePlayerData = async (props) => {
    connectDB();
    try {
        await Timing.create(props[0]);
        return JSON.parse(JSON.stringify({ response: 'ok' }))
    } catch (error) {
        return JSON.parse(JSON.stringify({ response: 'bad' }))
    }
}


export const fetchPlayersTimings = async()=>{
    connectDB();
     try {
        const response =  await Timing.find({}, '-_id -__v');
         return JSON.parse(JSON.stringify({response}))
     } catch (error) {
         return JSON.parse(JSON.stringify({message:'Error in fetching data!!!'}))
     }
 };

 export const deletePlayersData = async()=>{
    connectDB();
    try{
        const response = await Timing.deleteMany({});
        return JSON.parse(JSON.stringify({message:'All Enteries Deleted Successfully'}))
    }catch(err){
        console.log(err);
        return JSON.parse(JSON.stringify({message:'Internal server Error'}))
    }
 }