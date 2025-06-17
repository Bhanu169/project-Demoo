import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserView() {

  const userId= useParams().id

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
  return (
    <>
    <div className="container my-5">
      <h2 className="mb-4">User Details</h2>
      <div className="card shadow p-4 rounded">
        <div className="row">
          <div className="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="User Avatar"
              className="img-fluid rounded-circle mb-3"
            />
            <h5 className="text-primary">{data?.name}</h5>
            <span className="badge bg-success">Active</span>
          </div>
          <div className="col-md-8">
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <th scope="row">Name:</th>
                  <td>{data?.name}</td>
                </tr>
                <tr>
                  <th scope="row">Email:</th>
                  <td>{data?.email}</td>
                </tr>
                <tr>
                  <th scope="row">Phone:</th>
                  <td>{data?.phone}</td>
                </tr>
                <tr>
                  <th scope="row">Role:</th>
                  <td>Admin</td>
                </tr>
                <tr>
                  <th scope="row">Status:</th>
                  <td>Active</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-3">
              <button className="btn btn-primary me-2">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default UserView