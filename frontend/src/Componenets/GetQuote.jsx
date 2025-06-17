import React from 'react'

function GetQuote() {
  return (
    <>
    <div className="container1">
  <div className="quote-box1">
    <div className="info-section1">
      <h1>Get a quote</h1>
      <p>Fill up the form and our Team will get back to you within 24 hours.</p>
      <div className="info1">
        <div class="contact-button1">
  <i className="fa fa-phone-alt me-3" />
          +012 345 67890
</div>
<br/>
<div class="contact-button1">
  <i className="fa fa-envelope me-3" />
          info@example.com
</div>
<br/>
<div class="contact-button1">
  <i className="fa fa-map-marker-alt me-3" />
          123 Street, New York, USA
</div>

      </div>
      <div className="social-icons1   d-inline-flex align-items-center">
        <a className="btn btn-sm-square bg-white text-primary me-1" href="">
          <i className="fab fa-facebook-f" />
        </a>
        <a className="btn btn-sm-square bg-white text-primary me-1" href="">
          <i className="fab fa-twitter" />
        </a>
        <a className="btn btn-sm-square bg-white text-primary me-0" href="">
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
    <div className="form-section1">
      <form1>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" placeholder="Enter your name" />
        <label htmlFor="email">Mail</label>
        <input type="email" id="email" placeholder="your@email.com" />
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Message" defaultValue={""} /><br/>
        <button type="submit">Send Message</button>
      </form1>
    </div>
  </div>
</div>

    </>
  )
}

export default GetQuote