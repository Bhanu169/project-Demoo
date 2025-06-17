import React from 'react'

function ServicesH() {
  return (
    <>
    <div
  className="container-fluid page-header mb-5 p-0"
  style={{ backgroundImage: "url(img/carousel-bg-2.jpg)" }}
>
  <div className="container-fluid page-header-inner py-5">
    <div className="container text-center">
      <h1 className="display-3 text-white mb-3 animated slideInDown">
        Services
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
            Services
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>  
    </>
  )
}

export default ServicesH