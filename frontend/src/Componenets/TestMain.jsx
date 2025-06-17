import React from 'react'
import Testimonial from './Testimonial'

function TestMain() {
  return (
    <>
    <div
  className="container-fluid page-header mb-5 p-0"
  style={{ backgroundImage: "url(img/carousel-bg-1.jpg)" }}
>
  <div className="container-fluid page-header-inner py-5">
    <div className="container text-center">
      <h1 className="display-3 text-white mb-3 animated slideInDown">
        Testimonial
      </h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center text-uppercase">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item text-white active" aria-current="page">
            Testimonial
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>

<Testimonial/>
    </>
  )
}

export default TestMain