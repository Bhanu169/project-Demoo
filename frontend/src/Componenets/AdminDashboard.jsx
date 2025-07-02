import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUsers, faGears, faChartLine, faCheckCircle, faServer } from "@fortawesome/free-solid-svg-icons";
import userss from "../imgg/group.png"
import userAd from "../imgg/add-group.png"
import system from "../imgg/updated.png"
import server from "../imgg/load-balancer.png"
function AdminDashboard() {
  const navigate = useNavigate()
  return (
    <>
      <div className="container-fluid">
        <div className="row vh-100">
          {/* Sidebar */}
          <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar p-4 shadow-sm border-end">
            <div className="d-flex flex-column h-100">
              <h4 className="mb-4 text-primary fw-bold">Admin Dashboard</h4>
              <ul className="nav flex-column gap-2">
                <li className="nav-item">
                  <a className="nav-link active fw-semibold text-dark" href="#">
                    <FontAwesomeIcon icon={faChartLine} className="me-2" />
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">
                    <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                    Add User
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/UserTable" className="nav-link text-dark">
                    <FontAwesomeIcon icon={faUsers} className="me-2" />
                    All Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/UserEdit" className="nav-link text-dark">
                    <FontAwesomeIcon icon={faGears} className="me-2" />
                    Settings
                  </Link>
                </li>
              </ul>
              <div className="mt-auto pt-4">
                <button className="btn btn-outline-danger w-100 fw-semibold">
                  Logout
                </button>
              </div>
            </div>
          </nav>

          {/* Main content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-5 py-4 bg-light">
            <h2 className="mb-4 fw-bold text-dark">Welcome to Admin Panel</h2>
            <p className="text-muted">
              This is the main content area. You can place charts, tables, or
              forms here.
            </p>

            {/* Overview Cards */}
            <div className="row g-4">
              <div className="col-md-6 col-xl-3">
                <div className="card shadow-sm border-0 text-center">
                  {/* Icon area */}
                  <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "120px" }} onClick={() => navigate('/UserTable')}>
                    <img src={userss} alt="" style={{ height: "100px" }} />
                  </div>

                  {/* Card content */}
                   
                  <div className="card-body" onClick={() => navigate('/UserTable')}>
                    <h6 className="card-subtitle mb-2 text-muted">Total Users</h6>
                    <h4 className="card-title fw-bold">1,240</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-3">
                <div className="card shadow-sm border-0 text-center">
                  {/* Icon area */}
                  <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "120px" }}>
                    <img src={userAd} alt="" style={{ height: "100px" }} />
                  </div>

                  {/* Card content */}
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">New Signups</h6>
                    <h4 className="card-title fw-bold">75</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-3">
                <div className="card shadow-sm border-0 text-center">
                  {/* Icon area */}
                  <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "120px" }}>
                   <img src={system} alt="" style={{ height: "100px" }} />
                  </div>

                  {/* Card content */}
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">System Status</h6>
                    <h4 className="card-title fw-bold">Operational</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-3">
                <div className="card shadow-sm border-0 text-center">
                  {/* Icon area */}
                  <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "120px" }}>
                    <img src={server} alt="" style={{ height: "100px" }} />
                  </div>

                  {/* Card content */}
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">Server Load</h6>
                    <h4 className="card-title fw-bold">58%</h4>
                  </div>
                </div>
              </div>


              {/* Example Content Card */}
              {/* <div className="card mt-5 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Users Overview</h5>
                  <p className="card-text text-muted">
                    This is where you can show summary info.
                  </p>
                  <Link to="/UserTable" className="btn btn-primary">
                    Go to Users
                  </Link>
                </div> 
              </div> */}
              </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard