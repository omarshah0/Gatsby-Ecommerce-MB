import React from "react"
import { connect } from "react-redux"

import Layout from "../components/layout"
function Cart({ cart }) {
  console.log(cart)
  return (
    <Layout>
      <h1>This is Cart</h1>
      <p>WAAAT</p>
      {cart.map(item => (
        <div key={item.contentful_id}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </Layout>
  )
}

const mapStateToProps = ({ cart }) => {
  return { cart }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addToCart: _id => dispatch({ type: `ADD_TO_CART`, payload: _id }),
//     removeFromCart: _id => dispatch({ type: `REMOVE_FROM_CART`, payload: _id }),
//   }
// }

export default connect(mapStateToProps, null)(Cart)
