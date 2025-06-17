import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserEdit() {

    const userId= useParams().id
const navigate=useNavigate()
      const [data,setData]=useState("")

    
     const getData=async()=>{
    try {
      const userData= await axios.get(`http://localhost:6942/user/findUserById/${userId}`)
      console.log(userData,"abcde")
      setData(userData.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  },[])
      
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        try {
            e.preventDefault()
            const userdata= await axios.put(`http://localhost:6942/user/findUserByIdAndUpdate/${userId}`,data)
            console.log(userdata,"userdata")
            navigate("/userTable")
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <>
    <div className="container my-5">
      <h2 className="mb-4">Edit User</h2>
      <div className="card shadow p-4 rounded">
        <div className="row">
          <div className="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="User Avatar"
              className="img-fluid rounded-circle mb-3"
            />
            <h5 className="text-primary">John Doe</h5>
            <span className="badge bg-success">Active</span>
          </div>
          <div className="col-md-8">
            <form onChange={handleChange} onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input name='name' value={data.name} type="text" className="form-control" placeholder="Enter name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input name='email' value={data.email} type="email" className="form-control" placeholder="Enter email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input name='phone' value={data.phone} type="number" className="form-control" placeholder="Enter phone number" />
              </div>
              {/* <div className="mb-3">
                <label className="form-label">Role</label>
                <select className="form-select">
                  <option>Admin</option>
                  <option>User</option>
                  <option>Manager</option>
                </select>
              </div> */}
              <div className="mb-3">
                <label className="form-label">Status</label>
                <select className="form-select">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
              <div className="mt-4">
                <button type="submit" className="btn btn-success me-2">Save</button>
                {/* <button type="button" className="btn btn-secondary">Cancel</button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default UserEdit