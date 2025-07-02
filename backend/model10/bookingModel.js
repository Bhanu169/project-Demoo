// models/bookingModel.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'userSchema', required: true },
  mechanic: { type: mongoose.Schema.Types.ObjectId, ref: 'mechanicSchema', required: true },
  vehicleType: { type: String, required: true },
  serviceType: { type: String, required: true },
  date: { type: String, required: true },
  timeSlot: { type: String, required: true },
  status: { type: String, default: 'pending' }, // pending | confirmed | cancelled
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
