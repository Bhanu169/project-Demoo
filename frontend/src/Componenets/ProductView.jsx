import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductView() {
const productId= useParams().id
console.log(productId,"productId")
  const [data,setData]=useState("")

  const getData=async()=>{
    try {
      const productData= await axios.get(`http://localhost:6942/user/findProductById/${productId}`)
      console.log(productData.data,"abcde")
      setData(productData.data)
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
  <h2 className="mb-4">Product Details</h2>
  <div className="card shadow p-4 rounded">
    <div className="row">
      <div className="col-md-4 text-center">
        {console.log(data)}
        <img style={{height:"200px"}} src={data?.picImg} alt={data?.g?.name} />

        <h5 className="text-primary">{data?.title}</h5>
        <span className="badge bg-success">In Stock</span>
      </div>
      <div className="col-md-8">
        <table className="table table-borderless">
          <tbody>
            <tr>
              <th scope="row">Item Name:</th>
              <td>{data?.g?.title}</td>
            </tr>
            <tr>
              <th scope="row">Description:</th>
              <td>{data?.g?.description}</td>
            </tr>
            <tr>
              <th scope="row">Price:</th>
              <td>${data?.g?.price}</td>
            </tr>
            <tr>
              <th scope="row">Quantity:</th>
              <td>{data?.g?.quantity}</td>
            </tr>
            <tr>
              <th scope="row">Category:</th>
              <td>{data?.category}</td>
            </tr>
            <tr>
              <th scope="row">Status:</th>
              <td>In Stock</td>
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

export default ProductView