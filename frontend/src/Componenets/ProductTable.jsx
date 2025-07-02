import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function ProductTable() {

  const [data, setData] = useState([])
  const navigate = useNavigate()

  const getData = async () => {
    try {
      const productData = await axios.get(`http://localhost:6942/user/findProductAll`)
      console.log(productData)
      setData(productData.data)
    } catch (error) {
      console.log(error)
    }
  }





  useEffect(() => {
    getData()
  }, [])

  const navigateProductView = (id) => {
    console.log(id)
    navigate(`/ProductView/${id}`)
  }


  const navigateToEdit = (id) => {
    navigate(`/ProductEdit/${id}`)
  }



  const deleteProduct = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          const dataa = await axios.delete(`http://localhost:6942/user/deleteProduct/${id}`)
          getData()
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
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
        <div className="d-flex justify-content-between align-items-center mb-4">
    <h2 className="fw-bold text-primary">Product Table</h2>
    <Link to="/MechanicAdd">
              <button className="btn btn-success px-4 py-2">Add Mechanic</button>
            </Link>
    <Link to="/ProductAdd">
      <button className="btn btn-danger px-4 py-2">ADD PRODUCT</button>
    </Link>
  </div>
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>SNo.</th>
                <th>Item Name</th>
                <th>Description</th>
                <th>Price ($)</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

              {data?.map((e, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{e?.title}</td>
                  <td>{e?.description}</td>
                  <td>{e?.price}</td>
                  <td>
                    <img style={{ height: "50px", width: "50px" }} src={e?.picImg} alt="" />
                  </td>
                  <td>{e?.quantity}</td>
                  <td>
                    <span className="badge bg-success">In Stock</span>

                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary me-2" onClick={(() => navigateToEdit(e?._id))} >Edit</button>
                    <button className="btn btn-sm btn-primary me-2" onClick={(() => navigateProductView(e?._id))}>View</button>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteProduct(e?._id)}>Delete</button>
                  </td>
                </tr>
              ))}
               {data.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-muted py-4">No product found.</td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default ProductTable