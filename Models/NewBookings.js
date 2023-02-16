import mongoose, { Schema } from "mongoose";

const BookingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    booking:{
        type:String,
        required:true
    },
    checkout:{
        type:String,
        required:true
    },
    numberOfPeople:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
}
,
{timestamps:true}
)

export default mongoose.model('Booking',BookingSchema)