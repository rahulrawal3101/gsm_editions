import { Schema, model,models } from 'mongoose';

const PlayersTimingsSchema = new Schema({
    Saturday_Date: { type: String, required: false },
    Sunday_Date: { type: String, required: false },
    Player_Id: { type: String, required: false },
    Player_Name: { type: String, required: false },
    "saturday_9:00 AM": { type: String, required: false },
    "saturday_9:30 AM": { type: String, required: false },
    "saturday_10:00 AM": { type: String, required: false },
    "saturday_10:30 AM": { type: String, required: false },
    "saturday_11:00 AM": { type: String, required: false },
    "saturday_11:30 AM": { type: String, required: false },
    "saturday_12:00 Noon": { type: String, required: false },
    "saturday_12:30 PM": { type: String, required: false },
    "saturday_1:00 PM": { type: String, required: false },
    "saturday_1:30 PM": { type: String, required: false },
    "saturday_2:00 PM": { type: String, required: false },
    "saturday_2:30 PM": { type: String, required: false },
    "saturday_3:00 PM": { type: String, required: false },
    "saturday_3:30 PM": { type: String, required: false },
    "saturday_4:00 PM": { type: String, required: false },
    "saturday_4:30 PM": { type: String, required: false },
    "saturday_5:00 PM": { type: String, required: false },
    "saturday_5:30 PM": { type: String, required: false },
    "sunday_9:00 AM": { type: String, required: false },
    "sunday_9:30 AM": { type: String, required: false },
    "sunday_10:00 AM": { type: String, required: false },
    "sunday_10:30 AM": { type: String, required: false },
    "sunday_11:00 AM": { type: String, required: false },
    "sunday_11:30 AM": { type: String, required: false },
    "sunday_12:00 Noon": { type: String, required: false },
    "sunday_12:30 PM": { type: String, required: false },
    "sunday_1:00 PM": { type: String, required: false },
    "sunday_1:30 PM": { type: String, required: false },
    "sunday_2:00 PM": { type: String, required: false },
    "sunday_2:30 PM": { type: String, required: false },
    "sunday_3:00 PM": { type: String, required: false },
    "sunday_3:30 PM": { type: String, required: false },
    "sunday_4:00 PM": { type: String, required: false },
    "sunday_4:30 PM": { type: String, required: false },
    "sunday_5:00 PM": { type: String, required: false },
    "sunday_5:30 PM": { type: String, required: false }
});

const Timing = models.Timings || model('Timings', PlayersTimingsSchema);

export default Timing;