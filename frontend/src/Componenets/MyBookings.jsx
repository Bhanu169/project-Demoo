// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function MyBookings() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     axios.get('/api/bookings/my', {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => setBookings(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2>My Bookings</h2>
//       <ul>
//         {bookings.map((b, i) => (
//           <li key={i}>
//             <strong>{b.serviceType}</strong> with {b.mechanic?.name} on {b.date} at {b.timeSlot}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MyBookings;
