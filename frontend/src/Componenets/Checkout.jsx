// import React from 'react'

// function Checkout() {
//   return (
//     <>
//     <div className=" container-fluid my-5 ">
//   <div className="row justify-content-center ">
//     <div className="col-xl-10">
//       <div className="card shadow-lg ">
//         <div className="row p-2 mt-3 justify-content-between mx-sm-2">
//           <div className="col">
//             <p className="text-muted space mb-0 shop"> Shop No.78618K</p>
//             <p className="text-muted space mb-0 shop">Store Locator</p>
//           </div>
//           <div className="col">
//             <div className="row justify-content-start ">
//               <div className="col">
//                 <img
//                   className="irc_mi img-fluid cursor-pointer "
//                   src="https://i.imgur.com/jFQo2lD.png"
//                   width={70}
//                   height={70}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-auto">
//             <img
//               className="irc_mi img-fluid bell"
//               src="https://i.imgur.com/uSHMClk.jpg"
//               width={30}
//               height={30}
//             />
//           </div>
//         </div>
//         <div className="row  mx-auto justify-content-center text-center">
//           <div className="col-12 mt-3 ">
//             <nav aria-label="breadcrumb" className="second ">
//               <ol className="breadcrumb indigo lighten-6 first  ">
//                 <li className="breadcrumb-item font-weight-bold ">
//                   <a className="black-text text-uppercase " href="#">
//                     <span className="mr-md-3 mr-1">BACK TO SHOP</span>
//                   </a>
//                   <i className="fa fa-angle-double-right " aria-hidden="true" />
//                 </li>
//                 <li className="breadcrumb-item font-weight-bold">
//                   <a className="black-text text-uppercase" href="#">
//                     <span className="mr-md-3 mr-1">SHOPPING BAG</span>
//                   </a>
//                   <i
//                     className="fa fa-angle-double-right text-uppercase "
//                     aria-hidden="true"
//                   />
//                 </li>
//                 <li className="breadcrumb-item font-weight-bold">
//                   <a className="black-text text-uppercase active-2" href="#">
//                     <span className="mr-md-3 mr-1">CHECKOUT</span>
//                   </a>
//                 </li>
//               </ol>
//             </nav>
//           </div>
//         </div>
//         <div className="row justify-content-around">
//           <div className="col-md-5">
//             <div className="card border-0">
//               <div className="card-header pb-0">
//                 <h2 className="card-title space ">Checkout</h2>
//                 <p className="card-text text-muted mt-4  space">
//                   SHIPPING DETAILS
//                 </p>
//                 <hr className="my-0" />
//               </div>
//               <div className="card-body">
//                 <div className="row justify-content-between">
//                   <div className="col-auto mt-0">
//                     <p>
//                       <b>
//                         BBBootstrap Team Vasant Vihar 110020 New Delhi India
//                       </b>
//                     </p>
//                   </div>
//                   <div className="col-auto">
//                     <p>
//                       <b>BBBootstrap@gmail.com</b>{" "}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="row mt-4">
//                   <div className="col">
//                     <p className="text-muted mb-2">PAYMENT DETAILS</p>
//                     <hr className="mt-0" />
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="NAME" className="small text-muted mb-1">
//                     NAME ON CARD
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control form-control-sm"
//                     name="NAME"
//                     id="NAME"
//                     aria-describedby="helpId"
//                     placeholder="BBBootstrap Team"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="NAME" className="small text-muted mb-1">
//                     CARD NUMBER
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control form-control-sm"
//                     name="NAME"
//                     id="NAME"
//                     aria-describedby="helpId"
//                     placeholder="4534 5555 5555 5555"
//                   />
//                 </div>
//                 <div className="row no-gutters">
//                   <div className="col-sm-6 pr-sm-2">
//                     <div className="form-group">
//                       <label htmlFor="NAME" className="small text-muted mb-1">
//                         VALID THROUGH
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control form-control-sm"
//                         name="NAME"
//                         id="NAME"
//                         aria-describedby="helpId"
//                         placeholder="06/21"
//                       />
//                     </div>
//                   </div>
//                   <div className="col-sm-6">
//                     <div className="form-group">
//                       <label htmlFor="NAME" className="small text-muted mb-1">
//                         CVC CODE
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control form-control-sm"
//                         name="NAME"
//                         id="NAME"
//                         aria-describedby="helpId"
//                         placeholder={183}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row mb-md-5">
//                   <div className="col">
//                     <button
//                       type="button"
//                       name=""
//                       id=""
//                       className="btn  btn-lg btn-block "
//                     >
//                       PURCHASE $37 SEK
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-5">
//             <div className="card border-0 ">
//               <div className="card-header card-2">
//                 <p className="card-text text-muted mt-md-4  mb-2 space">
//                   YOUR ORDER{" "}
//                   <span className=" small text-muted ml-2 cursor-pointer">
//                     EDIT SHOPPING BAG
//                   </span>{" "}
//                 </p>
//                 <hr className="my-2" />
//               </div>
//               <div className="card-body pt-0">
//                 <div className="row  justify-content-between">
//                   <div className="col-auto col-md-7">
//                     <div className="media flex-column flex-sm-row">
//                       <img
//                         className=" img-fluid"
//                         src="https://i.imgur.com/6oHix28.jpg"
//                         width={62}
//                         height={62}
//                       />
//                       <div className="media-body  my-auto">
//                         <div className="row ">
//                           <div className="col-auto">
//                             <p className="mb-0">
//                               <b>EC-GO Bag Standard</b>
//                             </p>
//                             <small className="text-muted">
//                               1 Week Subscription
//                             </small>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className=" pl-0 flex-sm-col col-auto  my-auto">
//                     {" "}
//                     <p className="boxed-1">2</p>
//                   </div>
//                   <div className=" pl-0 flex-sm-col col-auto  my-auto ">
//                     <p>
//                       <b>179 SEK</b>
//                     </p>
//                   </div>
//                 </div>
//                 <hr className="my-2" />
//                 <div className="row  justify-content-between">
//                   <div className="col-auto col-md-7">
//                     <div className="media flex-column flex-sm-row">
//                       <img
//                         className=" img-fluid "
//                         src="https://i.imgur.com/9MHvALb.jpg"
//                         width={62}
//                         height={62}
//                       />
//                       <div className="media-body  my-auto">
//                         <div className="row ">
//                           <div className="col">
//                             <p className="mb-0">
//                               <b>EC-GO Bag Standard</b>
//                             </p>
//                             <small className="text-muted">
//                               2 Week Subscription
//                             </small>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="pl-0 flex-sm-col col-auto  my-auto">
//                     {" "}
//                     <p className="boxed">3</p>
//                   </div>
//                   <div className="pl-0 flex-sm-col col-auto my-auto">
//                     <p>
//                       <b>179 SEK</b>
//                     </p>
//                   </div>
//                 </div>
//                 <hr className="my-2" />
//                 <div className="row  justify-content-between">
//                   <div className="col-auto col-md-7">
//                     <div className="media flex-column flex-sm-row">
//                       <img
//                         className=" img-fluid "
//                         src="https://i.imgur.com/6oHix28.jpg"
//                         width={62}
//                         height={62}
//                       />
//                       <div className="media-body  my-auto">
//                         <div className="row ">
//                           <div className="col">
//                             <p className="mb-0">
//                               <b>EC-GO Bag Standard</b>
//                             </p>
//                             <small className="text-muted">
//                               2 Week Subscription
//                             </small>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="pl-0 flex-sm-col col-auto  my-auto">
//                     {" "}
//                     <p className="boxed-1">2</p>
//                   </div>
//                   <div className="pl-0 flex-sm-col col-auto my-auto">
//                     <p>
//                       <b>179 SEK</b>
//                     </p>
//                   </div>
//                 </div>
//                 <hr className="my-2" />
//                 <div className="row ">
//                   <div className="col">
//                     <div className="row justify-content-between">
//                       <div className="col-4">
//                         <p className="mb-1">
//                           <b>Subtotal</b>
//                         </p>
//                       </div>
//                       <div className="flex-sm-col col-auto">
//                         <p className="mb-1">
//                           <b>179 SEK</b>
//                         </p>
//                       </div>
//                     </div>
//                     <div className="row justify-content-between">
//                       <div className="col">
//                         <p className="mb-1">
//                           <b>Shipping</b>
//                         </p>
//                       </div>
//                       <div className="flex-sm-col col-auto">
//                         <p className="mb-1">
//                           <b>0 SEK</b>
//                         </p>
//                       </div>
//                     </div>
//                     <div className="row justify-content-between">
//                       <div className="col-4">
//                         <p>
//                           <b>Total</b>
//                         </p>
//                       </div>
//                       <div className="flex-sm-col col-auto">
//                         <p className="mb-1">
//                           <b>537 SEK</b>
//                         </p>{" "}
//                       </div>
//                     </div>
//                     <hr className="my-0" />
//                   </div>
//                 </div>
//                 <div className="row mb-5 mt-4 ">
//                   <div className="col-md-7 col-lg-6 mx-auto">
//                     <button
//                       type="button"
//                       className="btn btn-block btn-outline-primary btn-lg"
//                     >
//                       ADD GIFT CODE
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//     </>
//   )
// }

// export default Checkout

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import cookie from "js-cookie"


function Checkout() {
const token = cookie.get("userInfo")
  const getToken = token ? JSON.parse(token) : null
      const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState([]);
    
    const [orderCreate, setOrderCreate] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        products: []
    });
    const navigate = useNavigate();

    // Updated handleChangeOfOrder function
    const handleChangeOfOrder = (e) => {
        setOrderCreate({ ...orderCreate, [e.target.name]: e.target.value });
    };

    // Function to calculate subtotal
    const calculateSubtotal = (cartItems) => {
        return cartItems?.reduce((total, item) => total + (item?.quantity * item?.productId?.price), 0);
    };

    const handleSubmitOfOrder = async (e) => {
        e.preventDefault();
        try {
            const dataOfProductIds = cart?.map((items) => items?.productId?._id);
            console.log(dataOfProductIds,"dataOfProductIds")
            const dataOfProductIdsFromProduct = product?.map((items) => items?._id);
            console.log(dataOfProductIdsFromProduct,"dataOfProductIdsFromProduct")
            const commonProductIds = dataOfProductIdsFromProduct.filter(productId => dataOfProductIds.includes(productId));
            console.log(commonProductIds,"commonProductIds")
            const totalQuantity = cart?.reduce((acc, item) => acc + item?.quantity, 0);

            const updateProducts = {
                ...orderCreate,
                products: commonProductIds,
                quantity: totalQuantity,
                totalAmount: subTotal // Ensure subTotal is calculated before this point
            };

            const res = await axios.post(`http://localhost:6942/user/orderCreate`, updateProducts, {
                headers: {
                    "Authorization": `Bearer ${getToken?.token}`
                }
            });

            setOrderCreate(res.data.body);
            await axios.delete(`http://localhost:6942/user/deleteAllItems`, {
                headers: {
                    "Authorization": `Bearer ${getToken?.token}`
                }
            });
            toast.success("Order is placed successfully");
            navigate("/");
            // window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    const getCartData = async () => {
        try {
            const data = await axios.get(`http://localhost:6942/findAllCart`, {
                headers: {
                    "Authorization": `Bearer ${getToken?.token}`
                }
            });
            console.log(data,"data")
            setCart(data?.data?.body);
            const subtotal = calculateSubtotal(data?.data?.body);
            if (subtotal > 0) {
                setLoading(false); // Stop loading if subtotal is valid
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getProductData = async () => {
        try {
            const data = await axios.get(`http://localhost:6942/user/findProductAll`, {
                headers: {
                    "Authorization": `Bearer ${getToken?.token}`
                }
            });
            setProduct(data?.data?.body);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCartData();
        getProductData();
    }, []);

    const subTotal = calculateSubtotal(cart); // Calculate subtotal

    return (
        <div>
            <>
                {/* Breadcrumb Section */}
                <div className="bg-secondary text-white py-5">
                    <div className="container text-center">
                        <p>Fresh and Organic</p>
                        <h1>Check Out Product</h1>
                    </div>
                </div>

                {/* Checkout Section */}
               
                    <div className="checkout-section my-5">
                        <div className="container">
                            <div className="row">
                                {/* Left Section - Billing Address */}
                                <div className="col-lg-8">
                                    <div className="accordion" id="checkoutAccordion">
                                        <form onSubmit={handleSubmitOfOrder}>
                                            <div className="card">
                                                <div className="card-header bg-primary text-white" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <button
                                                            className="btn btn-link text-white"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseOne"
                                                            aria-expanded="true"
                                                            aria-controls="collapseOne"
                                                        >
                                                            Billing Address
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseOne" className="collapse show" data-bs-parent="#checkoutAccordion">
                                                    <div className="card-body">
                                                        <div className="mb-3">
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                id="name"
                                                                placeholder="Name"
                                                                onChange={handleChangeOfOrder}
                                                                className="form-control"
                                                                required
                                                            />
                                                        </div>
                                                        <div className="mb-3">
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                id="email"
                                                                placeholder="Email"
                                                                onChange={handleChangeOfOrder}
                                                                className="form-control"
                                                                required
                                                            />
                                                        </div>
                                                        <div className="mb-3">
                                                            <input
                                                                type="text"
                                                                name="address"
                                                                id="address"
                                                                placeholder="Address"
                                                                onChange={handleChangeOfOrder}
                                                                className="form-control"
                                                                required
                                                            />
                                                        </div>
                                                        <div className="mb-3">
                                                            <input
                                                                type="number"
                                                                name="phone"
                                                                id="phone"
                                                                placeholder="Phone"
                                                                onChange={handleChangeOfOrder}
                                                                className="form-control"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-warning mt-4">
                                                Place Order
                                            </button>
                                        </form>
                                    </div>
                                </div>

                                {/* Right Section - Order Summary */}
                                <div className="col-lg-4 mt-4 mt-lg-0">
                                    <div className="card">
                                        <div className="card-header bg-primary text-white">
                                            Your Order Details
                                        </div>
                                        <table className="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart?.map((e) => (
                                                    <tr key={e.productId._id}>
                                                        <td>{e.productId.name}</td>
                                                        <td>₹ {e.quantity * e.productId.price}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td>Subtotal</td>
                                                    <td>₹ {subTotal}</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping</td>
                                                    <td>₹ 20</td>
                                                </tr>
                                                <tr>
                                                    <th>Total</th>
                                                    <th>₹ {subTotal + 20}</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </>
        </div>
    );
}

export default Checkout;