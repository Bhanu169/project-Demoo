import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import cookie from "js-cookie"
import { toast } from "react-toastify";
import { useCart } from "./CartProvider";

function ProductPage() {
    const [products, setProducts] = useState([]);
    const {cartCount,setCartCount}=useCart()
    const [item, setItem] = useState("")
    const token = cookie.get("userInfo")
    const getToken = token ? JSON.parse(token) : null
    const fetchProducts = async () => {
        try {
            const res = await axios.get("http://localhost:6942/user/findProductAll");
            console.log(res, "res")
            setProducts(res.data); // Adjust if response has a wrapper object
            setCartCount(res.data.length)
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    const addItem = async (productIddd) => {
        try {
            // console.log(productId,"op")
            const res = await axios.get("http://localhost:6942/findAllCart", {
                headers: {
                    Authorization: `Bearer ${getToken?.token}`
                }
            });

            const finddAndCompare = res.data.body.find((e) => {
                // console.log(e)
                return e.productId._id === productIddd
            })
            // console.log(finddAndCompare)
            // return
            if (!finddAndCompare) {
                const dataa = await axios.post(`http://localhost:6942/cartCreate`, { productId: productIddd }, {
                    headers: {
                        Authorization: `Bearer ${getToken?.token}`
                    }
                },)
                console.log(dataa)
                toast.success(dataa.data.message)
            } else {
                const dataa = await axios.put(`http://localhost:6942/updateCartItem/${finddAndCompare._id}`, { quantity: finddAndCompare.quantity + 1 }, {
                    headers: {
                        Authorization: `Bearer ${getToken?.token}`
                    }
                },)
                console.log(dataa)
                toast.success(dataa.data.message)
            }
            //   console.log(finddAndCompare,"finddAndCompare")

        } catch (error) {
            console.log(error)
        }
    }


    // const addItem = async (id) => {
    //     try {
    //       // console.log(id,"id")
    //       const findItemmmm = await axios.get("http://localhost:9999/route/findAllCart", {
    //         headers: {
    //           Authorization: Bearer ${getToken?.token}
    //         }
    //       });

    //       // console.log(findItemmmm,"jkjk")
    //       const finddAndCompare = findItemmmm.data.body.find((e) => {
    //         // console.log(e)
    //         return e.productId._id === id
    //       })
    //       console.log(finddAndCompare, "finddAndCompare")
    //       if (!finddAndCompare) {
    //         const dataa = await axios.post(http://localhost:9999/route/cartCreate, { productId: id },
    //           {
    //             headers: {
    //               Authorization: Bearer ${getToken?.token},
    //             },
    //           },

    //         )
    //         console.log(dataa)
    //         toast.success("item added successfully")
    //       } else {
    //         const dataa = await axios.put(http://localhost:9999/route/updateCartItem/${finddAndCompare._id}, { quantity: finddAndCompare.quantity + 1 },
    //           {
    //             headers: {
    //               Authorization: Bearer ${getToken?.token},
    //             },
    //           },

    //         )
    //         console.log(dataa)
    //         toast.success("Quantity updated successfully")
    //       }
    //       const dataaaa = await axios.get("http://localhost:9999/route/findAllCart", {
    //         headers: {
    //           Authorization:Bearer ${getToken?.token}
    //         }
    //       });
    //       console.log(dataaaa,"dataaaa");
    //       setCartCount(dataaaa.data.body.length)

    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }


    return (
        <div className="container my-5">
            <h2 className="mb-4">Shop Products</h2>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product._id}>
                        <div className="card h-100 shadow-sm">
                            <img
                                src={`http://localhost:6942/image/productImage/${product.image}`}
                                className="card-img-top"
                                alt={product.title}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">${product.price}</p>

                                <div className="mt-auto d-flex gap-2">
                                    <Link to={`/ProductView/${product._id}`} className="btn btn-primary w-50">
                                        View Product
                                    </Link>
                                    <button onClick={(() => addItem(product._id))} className="btn btn-success w-50">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductPage;
