import React from 'react'

function Testimonial() {
  return (
    <>
<div className="container-xxl py-5">
  <div className="container">
    <div className="text-center">
      <h6 className="text-primary text-uppercase">// Testimonial //</h6>
      <h1 className="mb-5">Our Clients Say!</h1>
    </div>

    <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        {/* First item - must be active */}
        <div className="carousel-item active text-center">
          <img
            className="bg-light rounded-circle p-2 mx-auto mb-3"
            src="img/testimonial-1.jpg"
            alt="Client 1"
            style={{ width: 80, height: 80 }}
          />
          <h5 className="mb-0">Client Name</h5>
          <p>Profession</p>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">
              
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
        </div>

        <div className="carousel-item text-center">
          <img
            className="bg-light rounded-circle p-2 mx-auto mb-3"
            src="img/testimonial-2.jpg"
            alt="Client 2"
            style={{ width: 80, height: 80 }}
          />
          <h5 className="mb-0">Client Name</h5>
          <p>Profession</p>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
        </div>

        {/* Add more .carousel-item as needed */}

      </div>

      {/* Optional navigation buttons */}
      <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>


    </>
  )
}

export default Testimonial