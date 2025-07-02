import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cookie from "js-cookie";
import Swal from 'sweetalert2';
import { useCart } from './CartProvider';
import { toast } from 'react-toastify';

function Cart() {
  const { setCartCount } = useCart();
  const [products, setProducts] = useState([]);

  const token = cookie.get("userInfo");
  const getToken = token ? JSON.parse(token) : null;

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:6942/findAllCart", {
        headers: { Authorization: `Bearer ${getToken?.token}` }
      });
      setProducts(res.data.body);
      setCartCount(res.data.body.length);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const incFunction = async (id, quant) => {
    try {
      await axios.put(`http://localhost:6942/updateCartItem/${id}`, { quantity: quant + 1 }, {
        headers: { Authorization: `Bearer ${getToken?.token}` }
      });
      toast.success("Quantity updated");
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const decFunction = async (id, quant) => {
    try {
      if (quant === 1) return;
      await axios.put(`http://localhost:6942/updateCartItem/${id}`, { quantity: quant - 1 }, {
        headers: { Authorization: `Bearer ${getToken?.token}` }
      });
      toast.success("Quantity updated");
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserrrData = async (id) => {
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
        await axios.delete(`http://localhost:6942/deleteSingleCartItem/${id}`, {
          headers: { Authorization: `Bearer ${getToken?.token}` }
        });
        fetchProducts();
        Swal.fire("Deleted!", "Item removed from cart.", "success");
      }
    });
  };

  const subTotal = products?.reduce((acc, item) => acc + item?.productId?.price * item?.quantity, 0);

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <h2 className="mb-4">Shopping Cart</h2>
        <div className="row">
          <div className="col-lg-8">
            {products.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              products.map((item) => (
                <div className="card mb-3 shadow-sm" key={item._id}>
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        src={`http://localhost:6942/image/productImage/${item?.productId?.image}`}
                        alt={item?.productId?.title}
                        className="img-thumbnail"
                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                      />
                      <div className="ms-3">
                        <h5>{item?.productId?.title}</h5>
                        <p className="text-muted small">{item?.productId?.description}</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="btn-group me-3">
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => decFunction(item._id, item.quantity)}>-</button>
                        <button className="btn btn-outline-dark btn-sm disabled">{item.quantity}</button>
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => incFunction(item._id, item.quantity)}>+</button>
                      </div>
                      <div className="text-end me-3">
                        <h6 className="mb-0">${item.productId.price}</h6>
                        <small className="text-muted">Total: ${item.productId.price * item.quantity}</small>
                      </div>
                      <button className="btn btn-danger btn-sm" onClick={() => deleteUserrrData(item._id)}>
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Summary</h5>
                <hr />
                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <strong>${subTotal.toFixed(2)}</strong>
                </div>
                <p className="text-muted small mt-2">Shipping and taxes will be calculated at checkout.</p>
                <Link to="/Checkout" className="btn btn-primary w-100 mt-3">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
            <Link to="/" className="btn btn-link mt-3">← Continue Shopping</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
