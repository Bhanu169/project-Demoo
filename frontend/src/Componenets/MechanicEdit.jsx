import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function MechanicEdit() {
const mechanicId = useParams().id
  const navigate = useNavigate()
  const [data, setData] = useState({
    name:"",
    experience:0,
    designation:"",
    phone:0,
    price:0,
    image:"",
  })

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:6942/user/findMechById/${mechanicId}`)
      console.log(res,"userdata")
      setData(res.data.g)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const handleChange = (e) => {
    const { name, value, files } = e.target
    console.log(files, "files")
    if (name === "image") {
      setData({ ...data, [name]: files[0] })
    } else {
      setData({ ...data, [name]: value })
    }
  

}
  const handleSubmit = async (e) => {
      try {
        e.preventDefault()
        const dataa=new FormData()
         dataa.append("name",data.name)
      dataa.append("experience",data.experience)
      dataa.append("designation",data.designation)
      dataa.append("phone ",data.phone)
      dataa.append("price ",data.price)
      dataa.append("image",data.image)

      await axios.put(`http://localhost:6942/user/findMechByIdAndUpdate/${mechanicId}`, dataa)
      console.log(data,"userdata")
      navigate("/MechanicTable")
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
    <div className="container my-5">
  <h2 className="mb-4 text-primary">Edit Mechanic</h2>
  <div className="card shadow p-4 rounded">
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <div className="row">
        {/* Left side: Image */}
        <div className="col-md-4 text-center">
          <img
            src="https://via.placeholder.com/200"
            alt="Mechanic"
            className="img-fluid rounded-circle mb-3"
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
          <div className="mb-3">
            <input type="file" name='image' className="form-control" />
          </div>
        </div>

        {/* Right side: Form fields */}
        <div className="col-md-8">
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input name='name' type="text" value={data.name} className="form-control" placeholder="Enter name" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Designation</label>
              <input name='designation' type="text" value={data.designation} className="form-control" placeholder="Enter designation" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Experience</label>
              <input name='experience' type="number" value={data.experience} className="form-control" placeholder="Years of experience" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Price</label>
              <input name='price'  type="number" value ={data.price} className="form-control" placeholder="Hourly price" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input name='phone' type="number" value={data.phone}className="form-control" placeholder="Enter phone number" />
            </div>
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="availableCheck" />
            <label className="form-check-label" htmlFor="availableCheck">Available</label>
          </div>

          <div className="mt-4">
            <button type="submit" className="btn btn-success me-2">Save Changes</button>
            <button type="button" className="btn btn-secondary">Cancel</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

    </>
  )
}

export default MechanicEdit