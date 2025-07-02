import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function MechanicAdd() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    experience: "",
    price: 0,
    phone: "",
    email: "",
    available: false,
    image: "",
  })

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] })
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = new FormData()
      data.append("name", formData.name)
      data.append("designation", formData.designation)
      data.append("experience", formData.experience)
      data.append("price", formData.price)
      data.append("phone", formData.phone)
      data.append("email", formData.email)
      data.append("available", formData.available)
      data.append("image", formData.image)

      const res = await axios.post("http://localhost:6942/user/addMechanic", data)
      toast.success(res.data.message)
      navigate("/mechanicTable")
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong")
    }
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-primary">Add Mechanic</h2>
      <div className="card shadow p-4 rounded">
        <form onSubmit={handleSubmit} onChange={handleInputChange}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-control" placeholder="Enter name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Designation</label>
            <input type="text" name="designation" className="form-control" placeholder="Enter specialization" />
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Experience (years)</label>
              <input type="number" name="experience" className="form-control" placeholder="Experience" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Hourly Price</label>
              <input type="number" name="price" className="form-control" placeholder="Price" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input type="tel" name="phone" className="form-control" placeholder="Phone number" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" placeholder="Email address" />
            </div>
          </div>

          <div className="form-check mb-3">
            <input type="checkbox" name="available" className="form-check-input" id="availableCheck" />
            <label className="form-check-label" htmlFor="availableCheck">Available</label>
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input type="file" name="image" className="form-control" accept="image/*" />
          </div>

          <button type="submit" className="btn btn-success mt-3">Add Mechanic</button>
        </form>
      </div>
    </div>
  )
}

export default MechanicAdd
