import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cookie from "js-cookie"
import Swal from 'sweetalert2';
import { useCart } from './CartProvider';
import { toast } from 'react-toastify';

function Cart() {

  const { setCartCount } = useCart()

  const [products, setProducts] = useState([]);
  const token = cookie.get("userInfo")
  const getToken = token ? JSON.parse(token) : null
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:6942/findAllCart", {
        headers: {
          Authorization: `Bearer ${getToken?.token}`
        }
      });
      // console.log(res, "res")
      setProducts(res.data.body); // Adjust if response has a wrapper object
      setCartCount(res.data.body.length)
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const incFunction = async (id, quant) => {
    try {
      // console.log(id,"id")
      // console.log(quant,"ghghh")
      const dataa = await axios.put(
        ` http://localhost:6942/updateCartItem/${id}`,
        { quantity: quant + 1 },
        {
          headers: {
            Authorization: `Bearer ${getToken?.token}`,
          },
        }
      );
      console.log(dataa);
      toast.success("Quantity updated successfully");
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };
  const decFunction = async (id, quant) => {
    try {
      // console.log(id,"id")
      // console.log(quant,"ghghh")
      if (quant === 1) {
        return 1;
      }
      const dataa = await axios.put(
        ` http://localhost:6942/updateCartItem/${id}`,
        { quantity: quant - 1 },
        {
          headers: {
            Authorization: `Bearer ${getToken?.token}`,
          },
        }
      );
      console.log(dataa);
      toast.success("Quantity updated successfully");
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };


  const deleteUserrrData = async (id) => {
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
          const dataa = await axios.delete(`http://localhost:6942/deleteSingleCartItem/${id}`, {
            headers: {
              Authorization: `Bearer ${getToken?.token}`
            }
          })
          fetchProducts()
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

  const subTotal = products?.reduce((e, t) => {
    return e + t?.productId?.price * t?.quantity
  }, 0)
  console.log(subTotal, "subTotal")

  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <a href="#!" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2" />
                          Continue shopping
                        </a>
                      </h5>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">You have 4 items in your cart</p>
                        </div>
                        <div>
                          <p className="mb-0">
                            <span className="text-muted">Sort by:</span>{" "}
                            <a href="#!" className="text-body">
                              price <i className="fas fa-angle-down mt-1" />
                            </a>
                          </p>
                        </div>
                      </div>
                      {products?.map((e) => (
                        <div className="card mb-3">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <img
                                    src={`http://localhost:6942/image/productImage/${e?.productId?.image}`}
                                    className="img-fluid rounded-3"
                                    alt="Shopping item"
                                    style={{ width: 65 }}
                                  />
                                </div>
                                <div className="ms-3">
                                  <h5>{e?.productId?.title}</h5>
                                  <p className="small mb-0">{e?.productId?.description}</p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div style={{ width: 50 }}>
                                  <button
                                    onClick={() => decFunction(e?._id, e?.quantity)}
                                    style={{ color: "black" }}
                                  >
                                    -
                                  </button>{" "}
                                  <h5 className="fw-normal mb-0">{e?.quantity}</h5> <button
                                    onClick={() => incFunction(e?._id, e?.quantity)}
                                    style={{ color: "black" }}
                                  >
                                    +
                                  </button>

                                </div>
                                <div style={{ width: 80 }}>
                                  <h5 className="mb-0">${e?.productId?.price}</h5>
                                </div>
                                <button onClick={(() => deleteUserrrData(e?._id))} style={{ color: "#cecece" }}>
                                  <i className="fas fa-trash-alt" />
                                </button>
                              </div>
                              <div className="d-flex flex-row align-items-center">

                                <div style={{ width: 80 }}>
                                  <h5 className="mb-0">${e?.productId?.price * e?.quantity}</h5>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                    <h2>SubTotal</h2>
                    <h5>{subTotal}</h5>
                  </div>
                  <Link to={"/Checkout"}>
                    <button >Checkout</button>

                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Cart