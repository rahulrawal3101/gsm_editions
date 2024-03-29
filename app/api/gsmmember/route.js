import Timing from "@/lib/model/timings.model";
import { connectDB } from "@/lib/mongoconnection"
import { NextResponse } from "next/server";

export const GET=async(req,{params})=>{
    await connectDB();
    try{
        const gsmMember = await Timing.find({}, '-_id -__v');
        // const trimmedMembers = gsmMember.map(member => {
        //     const { _id, __v, ...others } = member.toObject(); // Converted Mongoose document to plain JavaScript object
        //     return others;
        // });
        
        if(gsmMember){
            return NextResponse.json({message:'Fetch All Data successfully',resp:gsmMember},{status:200});
        }else{
            return NextResponse.json({message:'Failed To Fetch Data'},{status:200})
        }
    }catch(err){
        console.log(err);
        return NextResponse.json({message:'Internal Server Error'},{status:500})
    }
}