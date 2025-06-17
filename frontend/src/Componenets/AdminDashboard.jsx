import React from 'react'
import { Link } from 'react-router-dom'

function AdminDashboard() {
  return (
    <>
     <div className="container-fluid">
      <div className="row vh-100">
        {/* Sidebar */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar p-3 border-end">
          <div className="d-flex flex-column h-100">
            <h4 className="mb-4">Admin Dashboard</h4>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Add User</a>
              </li>
              <Link to={"/UserTable"}><li className="nav-item">
                <a className="nav-link" >All Users</a>
              </li></Link>
              <Link to={"/UserEdit"}><li className="nav-item">
                <a className="nav-link" >Settings</a>
              </li></Link>
            </ul>
            <div className="mt-auto pt-4">
              <button className="btn btn-outline-danger w-100">Logout</button>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
          <h2>Welcome to Admin Panel</h2>
          <p>This is the main content area. You can place charts, tables, or forms here.</p>

          {/* Example Card */}
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Users Overview</h5>
              <p className="card-text">This is where you can show summary info.</p>
              <a href="#" className="btn btn-primary">Go to Users</a>
            </div>
          </div>
        </main>
      </div>
    </div>
    </>
  )
}

export default AdminDashboard