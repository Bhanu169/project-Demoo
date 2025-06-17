import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cookie from "js-cookie"
import Swal from "sweetalert2"
function UserTable() {
  const [data, setData] = useState([])

  const navigate = useNavigate()
  // const getToken=localStorage.getItem("userInfo")
  // const token=getToken?JSON.parse(getToken):null
  // console.log(token,"token")
  // const getToken=sessionStorage.getItem("userInfo")
  // const token=getToken?JSON.parse(getToken):null
  // console.log(token,"token")
  const getToken = cookie.get("userInfo")
  const token = getToken ? JSON.parse(getToken) : null
  console.log(token, "token")

  const getData = async () => {
    try {
      const userData = await axios.get(`http://localhost:6942/user/findUserAll`, {
        headers: {
          Authorization: `Bearer ${token.token}`
        }
      })
      console.log(userData)
      setData(userData.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  const navigateUserView = (id) => {
    console.log(id)
    navigate(`/UserView/${id}`)
  }


  const navigateToEdit = (id) => {
    navigate(`/UserEdit/${id}`)
  }

  const deleteUserrrData = async(id) => {
    try {
      // console.log(id, "id")
      



Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {
  if (result.isConfirmed) {
    const dataa=await axios.delete(`http://localhost:6942/user/deleteUserrr/${id}`)
      getData()
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="container my-5">
        <h2 className="mb-4">User Table</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>SNo.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                {/* <th>Role</th> */}
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((e, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{e?.name}</td>
                  <td>{e?.email}</td>
                  <td>{e?.phone}</td>
                  {/* <td>Admin</td> */}
                  <td>
                    <span className="badge bg-success">Active</span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary me-2" onClick={(() => navigateToEdit(e?._id))}>Edit</button>
                    <button className="btn btn-sm btn-primary me-2" onClick={(() => navigateUserView(e?._id))}>View</button>
                    <button className="btn btn-sm btn-danger" onClick={(() => deleteUserrrData(e?._id))}>Delete</button>
                  </td>
                </tr>
              ))}
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>


    </>
  )
}

export default UserTable