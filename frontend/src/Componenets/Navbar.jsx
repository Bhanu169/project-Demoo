import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from './CartProvider'

function Navbar() {
    const {cartCount}=useCart()
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <NavLink
  to="/"
  className="navbar-brand d-flex align-items-center px-4 px-lg-5"
>
  <h2 className="m-0 text-primary">
    <i className="fa fa-car me-3" />
    FixNParts
  </h2>
</NavLink>

<button
  type="button"
  className="navbar-toggler me-4"
  data-bs-toggle="collapse"
  data-bs-target="#navbarCollapse"
>
  <span className="navbar-toggler-icon" />
</button>

<div className="collapse navbar-collapse" id="navbarCollapse">
  <div className="navbar-nav ms-auto p-4 p-lg-0">
    <NavLink
      to="/"
      end
      className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
    >
      Home
    </NavLink>

    <NavLink
      to="/AboutH"
      className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
    >
      About
    </NavLink>

    <NavLink
      to="/ServMain"
      className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
    >
      Services
    </NavLink>

    <div className="nav-item dropdown">
      <span
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        role="button"
      >
        Pages
      </span>
      <div className="dropdown-menu fade-up m-0">
        <NavLink
          to="/BookMain"
          className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")}
        >
          Booking
        </NavLink>

        <NavLink
          to="/TeamMain"
          className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")}
        >
          Technicians
        </NavLink>

        <NavLink
          to="/TestMain"
          className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")}
        >
          Testimonial
        </NavLink>

        <NavLink
          to="/Error"
          className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")}
        >
          404 Page
        </NavLink>
      </div>
    </div>

    <NavLink
      to="/Contact"
      className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
    >
      Contact
    </NavLink>

    {/* Optional Cart link (commented) */}
    {/* <NavLink to="/Cart" className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}>
      Cart
    </NavLink> */}

    <NavLink
      to="/Signup"
      className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
    >
      Signup
    </NavLink>

    <NavLink
      to="/ProductPage"
      className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
    >
      Products
    </NavLink>

    <NavLink
      to="/Cart"
      style={{ display: 'flex', alignItems: 'center', height: '75px' }}
    >
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <i
          className="fas fa-shopping-cart fa-2x me-4"
          style={{ color: '#D81324', fontSize: '25px' }}
        ></i>
        <span
          className="me-4"
          style={{
            position: 'absolute',
            top: '-6px',
            right: '-10px',
            background: 'red',
            color: 'white',
            fontSize: '11px',
            borderRadius: '50%',
            padding: '2px 6px',
            minWidth: '18px',
            textAlign: 'center',
            fontWeight: 'bold',
            lineHeight: '1',
          }}
        >
         {cartCount?cartCount:0}
        </span>
      </div>
    </NavLink>
  </div>

  {/* Get A Quote Button */}
  <NavLink
    to="/GetQuote"
    className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
  >
    Get A Quote
    <i className="fa fa-arrow-right ms-3" />
  </NavLink>
</div>
      </nav>

    </>
  )
}

export default Navbar