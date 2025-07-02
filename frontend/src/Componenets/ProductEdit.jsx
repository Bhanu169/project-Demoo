import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductEdit() {
  const productId = useParams().id
  console.log(productId,"productId")
  const navigate = useNavigate()
  const [data, setData] = useState("")

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:6942/user/findProductById/${productId}`)
      setData(res.data.g)
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:6942/user/findProductByIdAndUpdate/${productId}`, data)
      navigate("/productTable")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Edit Product</h2>
      <div className="card shadow p-4 rounded">
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input name="title" value={data.title} type="text" className="form-control" placeholder="Enter product title" />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea name="description" value={data.description} className="form-control" rows="3" placeholder="Enter description"></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input name="price" value={data.price} type="number" className="form-control" placeholder="Enter price" />
          </div>
          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input name="quantity" value={data.quantity} type="number" className="form-control" placeholder="Enter quantity" />
          </div>
          <div className="mt-4">
            <button type="submit" className="btn btn-success me-2">Save</button>
            {/* <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>Cancel</button> */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductEdit
