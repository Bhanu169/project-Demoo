import React, { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import cookie from "js-cookie"
function Login() {
const navigate=useNavigate()

  const [data, setData] = useState("")
  const handleChange = (e) => {
    console.log(e.target)
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const log = await axios.post(`http://localhost:6942/user/logIn`, data)
      console.log(log)

      if (log.data.status !== 200) {
        toast.error(log.data.message)
      }
      else {
        setData(log.data.body)
        toast.success(log.data.message)
        // localStorage.setItem("userInfo",JSON.stringify(log.data.body))
        // sessionStorage.setItem("userInfo",JSON.stringify(log.data.body))
        cookie.set("userInfo",JSON.stringify(log.data.body))
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="w-100" style={{ maxWidth: '500px' }}>
          {/* Pills navs */}
          <br />
          <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li className="nav-item" role="presentation">
              <Link to={"/Signup"}>
                <a
                  className="nav-link active"
                  id="tab-login"
                  data-mdb-pill-init=""
                  href="#pills-login"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                >
                  Sign Up
                </a>
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link to={"/Login"}><a
                className="nav-link"
                id="tab-register"
                data-mdb-pill-init=""
                href="#pills-register"
                role="tab"
                aria-controls="pills-register"
                aria-selected="false"
              >
                Log In
              </a></Link>
            </li>
          </ul>
          {/* Pills navs */}
          {/* Pills content */}
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <form onChange={handleChange} onSubmit={handleSubmit}>
                <div className="text-center mb-3">
                  <p>Log in with:</p>
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-google" />
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-twitter" />
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-github" />
                  </button>
                </div>
                <p className="text-center">or:</p>
                {/* Email input */}
                <div data-mdb-input-init="" className="form-outline mb-4">
                  <input type="email" name="email" id="loginName" className="form-control" />
                  <label className="form-label" htmlFor="loginName">
                    Email or username
                  </label>
                </div>
                {/* Password input */}
                <div data-mdb-input-init="" className="form-outline mb-4">
                  <input type="password" name="password" id="loginPassword" className="form-control" />
                  <label className="form-label" htmlFor="loginPassword">
                    Password
                  </label>
                </div>
                {/* 2 column grid layout */}
                <div className="row mb-4">
                  <div className="col-md-6 d-flex justify-content-center">
                    {/* Checkbox */}
                    <div className="form-check mb-3 mb-md-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="loginCheck"
                        defaultChecked=""
                      />
                      <label className="form-check-label" htmlFor="loginCheck">
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center">
                    {/* Simple link */}
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>
                {/* Submit button */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Log in
                  </button>
                </div>
                {/* Register buttons */}
                <div className="text-center">
                  <p>
                    Not a member? <Link to={"/Signup"}><a href="#!">Sign Up</a></Link>
                  </p>
                </div>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="pills-register"
              role="tabpanel"
              aria-labelledby="tab-register"
            >
              <form>
                <div className="text-center mb-3">
                  <p>Log in with:</p>
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-google" />
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-twitter" />
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-github" />
                  </button>
                </div>
                <p className="text-center">or:</p>
                {/* Name input */}
                <div data-mdb-input-init="" className="form-outline mb-4">
                  <input type="text" id="registerName" className="form-control" />
                  <label className="form-label" htmlFor="registerName">
                    Name
                  </label>
                </div>
                {/* Username input */}
                <div data-mdb-input-init="" className="form-outline mb-4">
                  <input type="text" id="registerUsername" className="form-control" />
                  <label className="form-label" htmlFor="registerUsername">
                    Username
                  </label>
                </div>
                {/* Email input */}
                <div data-mdb-input-init="" className="form-outline mb-4">
                  <input type="email" id="registerEmail" className="form-control" />
                  <label className="form-label" htmlFor="registerEmail">
                    Email
                  </label>
                </div>
                {/* Password input */}
                <div data-mdb-input-init="" className="form-outline mb-4">
                  <input
                    type="password"
                    id="registerPassword"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="registerPassword">
                    Password
                  </label>
                </div>
                {/* Repeat Password input */}
                <div data-mdb-input-init="" className="form-outline mb-4">
                  <input
                    type="password"
                    id="registerRepeatPassword"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="registerRepeatPassword">
                    Repeat password
                  </label>
                </div>
                {/* Checkbox */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="registerCheck"
                    defaultChecked=""
                    aria-describedby="registerCheckHelpText"
                  />
                  <label className="form-check-label" htmlFor="registerCheck">
                    I have read and agree to the terms
                  </label>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-primary btn-block mb-3"
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
          {/* Pills content */}
        </div>
      </div>

    </>
  )
}

export default Login