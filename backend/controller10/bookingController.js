

// import Booking from "../model10/bookingModel.js";

// // Create a booking
// export const createBooking = async (req, res) => {
//   try {
//     const { mechanic, vehicleType, serviceType, date, timeSlot } = req.body;
//     const { _id: userId } = req.user;

//     // Check for existing booking for the same mechanic, date, and time slot
//     const alreadyBooked = await Booking.findOne({ mechanic, date, timeSlot });
//     if (alreadyBooked) {
//       return res.status(400).json({ message: 'This time slot is already booked.' });
//     }

//     const booking = await Booking.create({
//       user: userId,
//       mechanic,
//       vehicleType,
//       serviceType,
//       date,
//       timeSlot
//     });

//     res.status(201).json({
//       message: 'Booking created successfully',
//       booking
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to create booking', error: error.message });
//   }
// };

// // Get all bookings for a logged-in user
// export const getUserBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find({ user: req.user._id }).populate('mechanic');
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch bookings', error: error.message });
//   }
// };
