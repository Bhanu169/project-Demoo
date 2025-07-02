import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import cookie from "js-cookie";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Checkout() {
const stripe = useStripe();
const elements = useElements();
const token = cookie.get("userInfo");
const getToken = token ? JSON.parse(token) : null;

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

const handleChangeOfOrder = (e) => {
setOrderCreate({ ...orderCreate, [e.target.name]: e.target.value });
};

const calculateSubtotal = (cartItems) => {
return cartItems.reduce((total, item) => {
const price = item?.productId?.price ?? 0;
const quantity = item?.quantity ?? 0;
return total + (price * quantity);
}, 0);
};

const cardElementOptions = {
style: {
base: {
fontSize: '16px',
color: '#32325d',
'::placeholder': {
color: '#aab7c4',
},
},
invalid: {
color: '#fa755a',
},
},
};

const handleSubmitOfOrder = async (e) => {
e.preventDefault();
try {
// const dataOfProductIds = cart
// ?.map((item) => item?.productId?._id)
// .filter(Boolean);
// const dataOfProductIdsFromProduct = product?.map((item) => item?._id);


const dataOfProductIds = cart
  ?.map((item) => item?.productId?._id)
  .filter(Boolean);

const dataOfProductIdsFromProduct = product?.map((item) => item?._id);

const commonProductIds = dataOfProductIdsFromProduct.filter(productId =>
  dataOfProductIds.includes(productId)
);




const totalQuantity = cart?.reduce((acc, item) => acc + (item?.quantity ?? 0), 0);

const subTotal = calculateSubtotal(cart);
const totalAmount = subTotal + 20; // Subtotal + Shipping

// Create Payment Method
const { error, paymentMethod } = await stripe.createPaymentMethod({
type: 'card',
card: elements.getElement(CardElement),
});

if (error) {
console.error('[Stripe Error]', error);
toast.error("Payment method creation failed!");
return;
}

// Get client secret from backend
const response = await axios.post(`http://localhost:6942/paymentSubmit`, {
amount: totalAmount * 100, // amount in paise
});

const { clientSecret } = response.data;

// Confirm Card Payment
const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
payment_method: paymentMethod.id,
});

if (confirmError) {
console.error('[Payment Error]', confirmError);
toast.error("Payment failed!");
return;
}

const updateProducts = {
...orderCreate,
products: commonProductIds,
quantity: totalQuantity,
totalAmount: subTotal
};

const res = await axios.post(`http://localhost:6942/orderCreate`, updateProducts, {
headers: {
"Authorization": `Bearer ${token?.token}`
}
});

await axios.delete(`http://localhost:6942/deleteCart`, {
headers: {
"Authorization": `Bearer ${token?.token}`
}
});

toast.success("Payment successful! Order placed.");
navigate("/");
} catch (error) {
console.log("Order creation failed:", error);
toast.error("Failed to place order. Try again.");
}
};

const getCartData = async () => {
try {
const data = await axios.get(`http://localhost:6942/findAllCart`, {
headers: {
"Authorization": `Bearer ${getToken?.token}`
}
});
const filtered = data?.data?.body?.filter(item => item?.productId !== null) || [];
setCart(filtered);
if (calculateSubtotal(filtered) > 0) {
setLoading(false);
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

const subTotal = calculateSubtotal(cart);

return (
<div>
<>
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

          {/* Stripe Card Element */}
          <div className="mb-3">
            <label className="form-label">Card Details</label>
            <div className="form-control p-3">
              <CardElement options={cardElementOptions} />
            </div>
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

export default Checkout;
