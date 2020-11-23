import React from "react"
import { connect } from "react-redux"
import Img from "gatsby-image"
import Layout from "../components/layout"

function Cart({ cart, removeFromCart }) {
  console.log(cart)
  return (
    <Layout>
      <h1 style={{ display: "none" }}>Meerab Boutique</h1>
      <div className="container">
        <div className="cart__container">
          <div className="cart">
            <div className="cart__freeShipping">
              <h2>GET FREE SHIPPING WITH MB ON ORDER OF 4000PKR EVERY TIME.</h2>
            </div>
            <div className="cart__count">
              <h2>YOUR CART ({cart.length})</h2>
            </div>
            {cart.map(item => (
              <>
                <Card
                  title={item.name}
                  id={item.contentful_id}
                  image={item.images[0].fluid}
                  removeFromCart={() => removeFromCart(item.contentful_id)}
                  price={item.price}
                />
                <hr />
              </>
            ))}
          </div>
          <div className="cart__Summary">
            <h2 className="summary__title">Summary</h2>
            <div className="subtotal">
              <h2>Subtotal</h2>
              <span>{cart.reduce((acc, cur) => acc + cur.price, 0)} PKR</span>
            </div>
            <div className="shipping">
              <h2>
                ESTIMATED SHIPPING & HANDLING
                <br />
                Standard: FREE Arrives 3-5 Days
              </h2>
              <span>0.00 PKR</span>
            </div>
            <div className="total">
              <h2>Total</h2>
              <span>{cart.reduce((acc, cur) => acc + cur.price, 0)} PKR</span>
            </div>
            <div className="cart-button">
              <button className="add-to-cart-btn custom-btn btn-add">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = ({ cart }) => {
  return { cart }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: _id => dispatch({ type: `REMOVE_FROM_CART`, payload: _id }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

const Card = ({ id, image, title, price, removeFromCart }) => {
  return (
    <div className="Cart__Card" key={id}>
      <div className="card__Image">
        <Img fluid={image} />
      </div>
      <div className="card__Description">
        <h2 className="cart__item__title">{title}</h2>
        <p>
          <span>Style: </span>Black
        </p>
        <p>
          <span>Size: </span>Medium
        </p>
        <p>
          <span>Quantity: </span>2
        </p>
        <button
          className="add-to-cart-btn custom-btn"
          style={{ width: "auto", padding: "0.3rem 1rem" }}
          onClick={removeFromCart}
        >
          Remove From Cart
        </button>
      </div>
      <div className="card__Price">{price} PKR</div>
    </div>
  )
}
