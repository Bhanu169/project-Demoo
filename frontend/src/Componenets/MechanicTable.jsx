import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function MechanicTable() {
  const [mechanics, setMechanics] = useState([])
  const navigate = useNavigate()

  const fetchMechanics = async () => {
    try {
      const res = await axios.get('http://localhost:6942/user/findMechAll')
      console.log(res,"res")
      setMechanics(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchMechanics()
  }, [])

  const handleView = (id) => {
    navigate(`/MechanicView/${id}`)
  }

  const handleEdit = (id) => {
    navigate(`/MechanicEdit/${id}`)
  }

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:6942/user/deleteMech/${id}`)
          fetchMechanics()
          Swal.fire("Deleted!", "Mechanic has been removed.", "success")
        } catch (err) {
          console.error(err)
          Swal.fire("Error!", "Something went wrong.", "error")
        }
      }
    })
  }

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary">Mechanic Directory</h2>
         <Link to="/ProductAdd">
          <button className="btn btn-success px-4 py-2">Add Product</button>
        </Link>
        <Link to="/MechanicAdd">
          <button className="btn btn-success px-4 py-2">Add Mechanic</button>
        </Link>
      </div>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th>SNo.</th>
              <th>Name</th>
              <th>Expertise</th>
              <th>Phone</th>
              <th>Image</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mechanics?.map((mech, index) => (
              <tr key={mech._id}>
                <td>{index + 1}</td>
                <td>{mech.name}</td>
                <td>{mech.designation}</td>
                <td>{mech.phone}</td>
                <td>
                  <img style={{ height: "50px", width: "50px" }} src={mech?.picImg} alt="" />
                </td>
                <td>
                  <span className={`badge ${mech.available ? "bg-success" : "bg-secondary"}`}>
                    {mech.available ? "Available" : "Unavailable"}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(mech._id)}>Edit</button>
                  <button className="btn btn-sm btn-info me-2" onClick={() => handleView(mech._id)}>View</button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(mech._id)}>Delete</button>
                </td>
              </tr>
            ))}
            {mechanics.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-muted py-4">No mechanics found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MechanicTable
