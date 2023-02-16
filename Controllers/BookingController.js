import Booking from '../Models/NewBookings.js'
import { createError } from '../utils/error.js'

export const bookingController = {
    addbooking : async (req,res,next) =>{
       try {
        const new_booking = new Booking(req.body)
        const savedBooking  = await new_booking.save()
        res.status(200).json(savedBooking)
        console.log(req.body)
       } catch (error) {

        res.status(404).json('booking error')
        
       }
    },
    getAllBookings:async (req,res,next) =>{
        try {
            const bookingDetails = await Booking.find().sort({createdAt:-1})
            if(bookingDetails) res.status(200).json(bookingDetails)
        } catch (error) {
            next(createError(404,'No bookings Found'))
        }
    }
}