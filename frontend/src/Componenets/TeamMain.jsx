import React, { useEffect, useState } from 'react'
import axios from 'axios'

function TeamMain() {
  const [mechanics, setMechanics] = useState([])

  useEffect(() => {
    const fetchMechanics = async () => {
      try {
        const res = await axios.get("http://localhost:6942/user/findMechAll")
        setMechanics(res.data || [])
      } catch (err) {
        console.error("Error fetching mechanics:", err)
      }
    }
    fetchMechanics()
  }, [])

  return (
    <>
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url(img/carousel-bg-2.jpg)" }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Technicians
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">
                  Technicians
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">// Our Technicians //</h6>
            <h1 className="mb-5">Our Expert Technicians</h1>
          </div>
          <div className="row g-4">
            {mechanics.map((mech, index) => (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.1 + (index % 4) * 0.2}s`}
                key={index}
              >
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img
                    style={{ height: "250px", width: "300px" }} 
                      src={mech?.picImg} alt="" />
                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                      <a className="btn btn-square mx-1" href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square mx-1" href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square mx-1" href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="bg-light text-center p-4">
                    <h5 className="fw-bold mb-0">{mech.name}</h5>
                    <small>{mech.designation}</small>
                  </div>
                </div>
              </div>
            ))}
            {mechanics.length === 0 && (
              <p className="text-center text-muted">No mechanics found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamMain
