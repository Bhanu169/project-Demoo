import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
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
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                  className="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: 65 }}
                                />
                              </div>
                              <div className="ms-3">
                                <h5>Iphone 11 pro</h5>
                                <p className="small mb-0">256GB, Navy Blue</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: 50 }}>
                                <h5 className="fw-normal mb-0">2</h5>
                              </div>
                              <div style={{ width: 80 }}>
                                <h5 className="mb-0">$900</h5>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}>
                                <i className="fas fa-trash-alt" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                                  className="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: 65 }}
                                />
                              </div>
                              <div className="ms-3">
                                <h5>Samsung galaxy Note 10 </h5>
                                <p className="small mb-0">256GB, Navy Blue</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: 50 }}>
                                <h5 className="fw-normal mb-0">2</h5>
                              </div>
                              <div style={{ width: 80 }}>
                                <h5 className="mb-0">$900</h5>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}>
                                <i className="fas fa-trash-alt" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                                  className="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: 65 }}
                                />
                              </div>
                              <div className="ms-3">
                                <h5>Canon EOS M50</h5>
                                <p className="small mb-0">Onyx Black</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: 50 }}>
                                <h5 className="fw-normal mb-0">1</h5>
                              </div>
                              <div style={{ width: 80 }}>
                                <h5 className="mb-0">$1199</h5>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}>
                                <i className="fas fa-trash-alt" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-3 mb-lg-0">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                                  className="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: 65 }}
                                />
                              </div>
                              <div className="ms-3">
                                <h5>MacBook Pro</h5>
                                <p className="small mb-0">1TB, Graphite</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: 50 }}>
                                <h5 className="fw-normal mb-0">1</h5>
                              </div>
                              <div style={{ width: 80 }}>
                                <h5 className="mb-0">$1799</h5>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}>
                                <i className="fas fa-trash-alt" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Card details</h5>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              className="img-fluid rounded-3"
                              style={{ width: 45 }}
                              alt="Avatar"
                            />
                          </div>
                          <p className="small mb-2">Card type</p>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-mastercard fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-visa fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-amex fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-paypal fa-2x" />
                          </a>
                          <form className="mt-4">
                            <div
                              data-mdb-input-init=""
                              className="form-outline form-white mb-4"
                            >
                              <input
                                type="text"
                                id="typeName"
                                className="form-control form-control-lg"
                                siez={17}
                                placeholder="Cardholder's Name"
                              />
                              <label className="form-label" htmlFor="typeName">
                                Cardholder's Name
                              </label>
                            </div>
                            <div
                              data-mdb-input-init=""
                              className="form-outline form-white mb-4"
                            >
                              <input
                                type="text"
                                id="typeText"
                                className="form-control form-control-lg"
                                siez={17}
                                placeholder="1234 5678 9012 3457"
                                minLength={19}
                                maxLength={19}
                              />
                              <label className="form-label" htmlFor="typeText">
                                Card Number
                              </label>
                            </div>
                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div
                                  data-mdb-input-init=""
                                  className="form-outline form-white"
                                >
                                  <input
                                    type="text"
                                    id="typeExp"
                                    className="form-control form-control-lg"
                                    placeholder="MM/YYYY"
                                    size={7}
                                    minLength={7}
                                    maxLength={7}
                                  />
                                  <label className="form-label" htmlFor="typeExp">
                                    Expiration
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div
                                  data-mdb-input-init=""
                                  className="form-outline form-white"
                                >
                                  <input
                                    type="password"
                                    id="typeText"
                                    className="form-control form-control-lg"
                                    placeholder="●●●"
                                    size={1}
                                    minLength={3}
                                    maxLength={3}
                                  />
                                  <label className="form-label" htmlFor="typeText">
                                    Cvv
                                  </label>
                                </div>
                              </div>
                            </div>
                          </form>
                          <hr className="my-4" />
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">$4798.00</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">$20.00</p>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">$4818.00</p>
                          </div>
                          {/* <button
                            type="button"
                            className="btn btn-block btn-outline-primary btn-lg">
                            <Link to={"/Checkout"}><div className="d-flex justify-content-between">
                              <Link to="/Checkout" className="btn btn-block btn-outline-primary btn-lg d-flex justify-content-between align-items-center px-4" style={{ whiteSpace: 'nowrap' }}>
                                <span className="fw-bold">$4818.00 </span>
                                <span className="d-flex align-items-center">
                                  CHECKOUT <i className="fas fa-long-arrow-alt-right ms-2"></i>
                                </span>
                              </Link>

                            </div></Link>
                          </button> */}
                          <div className="row mt-3 mb-3">
                            <div className="col-md-7 col-lg-6 mx-auto text-center bg-white rounded p-2">
                              <button
                                type="button"
                                className="btn btn-outline-danger btn-lg fw-bold custom-hover px-4 py-2"
                              >
                                CHECKOUT <i className="fas fa-long-arrow-alt-right ms-2"></i>
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
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