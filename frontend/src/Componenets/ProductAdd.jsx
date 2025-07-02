import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { data, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function ProductAdd() {
  const [formData, setFormData] = useState({
    title:"",
    description:"",
    price:0,
    quantity:0,
    image:"",
  })
  const navigate=useNavigate()
  const handleInputChange = (e) => {
    // console.log(e.target)
    // setFormData({ ...formData, [e.target.name]: e.target.value })

    const { name, value, files } = e.target
    console.log(files, "files")
    if (name === "image") {
      setFormData({ ...formData, [name]: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }

  }

  const handleInputSubmit = async (e) => {
    try {
      e.preventDefault()
      const dataa=new FormData()

      dataa.append("title",formData.title)
      dataa.append("description",formData.description)
      dataa.append("price",formData.price)
      dataa.append("quantity",formData.quantity)
      dataa.append("image",formData.image)
      const log = await axios.post(`http://localhost:6942/user/addProduct`, dataa)
      console.log(log)
      setFormData(log.data.body)
      navigate("/productTable")
      toast.success(log.data.message)
      
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <>
      <div className="container my-5">
        <h2 className="mb-4">Add Product</h2>
        <div className="card shadow p-4 rounded">
          <form onChange={handleInputChange} onSubmit={handleInputSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                name='title'
                className="form-control"
                placeholder="Enter product title"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                type="text"
                name='description'
                className="form-control"
                rows="3"
                placeholder="Enter product description"
              ></textarea>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  name='price'
                  className="form-control"
                  placeholder="Enter price"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Quantity</label>
                <input
                  type="number"
                  name='quantity'
                  className="form-control"
                  placeholder="Enter quantity"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Upload Image</label>
              <input type="file" name='image' className="form-control" accept="image/*" />
            </div>

            <div className="mt-4">
              <button type="submit" className="btn btn-success">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default ProductAdd