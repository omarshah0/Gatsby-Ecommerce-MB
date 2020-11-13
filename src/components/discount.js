import React from "react"
import { Link } from "gatsby"
function Discount() {
  return (
    <section className="top-discount-area d-md-flex align-items-center">
      <div className="single-discount-area">
        <h5>Free Shipping &amp; Returns</h5>
        <h6>
          <Link to="/">BUY NOW</Link>
        </h6>
      </div>

      <div className="single-discount-area">
        <h5>20% Discount for all dresses</h5>
        <h6>USE CODE: OmarFarooq</h6>
      </div>

      <div className="single-discount-area">
        <h5>20% Discount for students</h5>
        <h6>USE CODE: Student</h6>
      </div>
    </section>
  )
}

export default Discount
