import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
  <Link to={"/"}><a
    href="index.html"
    className="navbar-brand d-flex align-items-center px-4 px-lg-5"
  >
    <h2 className="m-0 text-primary">
      <i className="fa fa-car me-3" />
      FixNParts
    </h2>
  </a></Link>
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
      <Link to={"/"}><a href="index.html" className="nav-item nav-link active">
        Home
      </a></Link>
      <Link to={"/AboutH"}><a href="about.html" className="nav-item nav-link active">
        About
      </a></Link>
      <Link to={"/ServMain"}><a href="#" className="nav-item nav-link active">
        Services
      </a></Link>
      <div className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Pages
        </a>
        <div className="dropdown-menu fade-up m-0">
          <Link to={"/BookMain"}><a href="#" className="dropdown-item">
            Booking
          </a></Link>
          <Link to={"/TeamMain"}><a href="team.html" className="dropdown-item">
            Technicians
          </a></Link>
          <Link to={"/TestMain"}><a href="testimonial.html" className="dropdown-item">
            Testimonial
          </a></Link>
          <Link to={"/Error"}><a href="404.html" className="dropdown-item">
            404 Page
          </a></Link>
        </div>
      </div>
      <Link to={'/Contact'}><a className="nav-item nav-link">
        Contact
      </a></Link>
      <Link to={'/Cart'}><a href="contact.html" className="nav-item nav-link">
        Cart
      </a></Link>
      <Link to={'/Signup'}><a href="" className="nav-item nav-link">
        Signup
      </a></Link>
      <Link to={'/Login'}><a href="" className="nav-item nav-link">
        Login
      </a></Link>
    </div>
    <Link to={"/GetQuote"}><a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
      Get A Quote
      <i className="fa fa-arrow-right ms-3" />
    </a></Link>
  </div>
</nav>

    </>
  )
}

export default Navbar