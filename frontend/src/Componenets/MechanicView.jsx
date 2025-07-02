import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function MechanicView() {
  const mechanicId = useParams().id
  const [mechanic, setMechanic] = useState("")
  const navigate = useNavigate()

  const fetchMechanic = async () => {
    try {
      const res = await axios.get(`http://localhost:6942/user/findMechById/${mechanicId}`)
      console.log(res)
      setMechanic(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchMechanic()
  }, [])

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-primary">Mechanic Details</h2>
      <div className="card shadow p-4 rounded">
        <div className="row">
          <div className="col-md-4 text-center">
            <img
  src={mechanic?.picImg}
              alt={mechanic?.g?.name}
              style={{ height: '200px', width: '200px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <h5 className="text-primary mt-3">{mechanic?.g?.name}</h5>
            <span className={`badge ${mechanic?.available ? 'bg-success' : 'bg-secondary'}`}>
              {mechanic?.available ? 'Available' : 'Unavailable'}
            </span>
          </div>

          <div className="col-md-8">
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <th scope="row">Name:</th>
                  <td>{mechanic?.g?.name || 'N/A'}</td>
                </tr>
                <tr>
                  <th scope="row">Specialization:</th>
                  <td>{mechanic?.g?.designation || 'N/A'}</td>
                </tr>
                <tr>
                  <th scope="row">Phone:</th>
                  <td>{mechanic?.g?.phone || 'N/A'}</td>
                </tr>
                <tr>
                  <th scope="row">Experience:</th>
                  <td>{mechanic?.g?.experience || 'N/A'} years</td>
                </tr>
                <tr>
                  <th scope="row">Status:</th>
                  <td>{mechanic?.g?.available ? 'Available' : 'Unavailable'}</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-3">
              <button className="btn btn-warning me-2" onClick={() => navigate(`/MechanicEdit/${mechanicId}`)}>Edit</button>
              <button className="btn btn-danger">Delete</button> {/* Add logic if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MechanicView
