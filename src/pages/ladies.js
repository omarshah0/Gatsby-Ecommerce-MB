import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { connect } from "react-redux"

function Ladies({ data, cart, addToCart, removeFromCart }) {
  const ladies = data.allContentfulLadies
  return (
    <Layout>
      <section className="new_arrivals_area section_padding_100_0 clearfix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_heading text-center">
                <h2>For Ladies</h2>
              </div>
            </div>
          </div>
        </div>
        {cart && <h2>Your Cart - Which is Under Construction </h2>}
        {cart &&
          cart.map((item, index) => (
            <div key={index}>
              <ul>
                <li>{item}</li>
              </ul>
            </div>
          ))}
        <div className="container">
          <div className="row karl-new-arrivals">
            {ladies.edges.map(({ node: lady }) => (
              <div
                className="col-12 col-sm-6 col-md-4 single_gallery_item"
                key={lady.id}
              >
                <div className="product-img">
                  <Img
                    fluid={{ ...lady.images[0].fluid, aspectRatio: 2 / 3 }}
                    alt={lady.name}
                  />
                  <div className="product-quicview">
                    <Link to={`/ladies/${lady.slug}`}>
                      <i className="ti-plus"></i>
                    </Link>
                  </div>
                </div>
                <div className="product-description">
                  <h4 className="product-price">$39.90</h4>
                  <Link to={`/ladies/${lady.slug}`}>
                    <p>
                      <strong>{lady.name}</strong>
                    </p>
                  </Link>
                  <button
                    onClick={() => addToCart(lady.id)}
                    className="add-to-cart-btn"
                  >
                    ADD TO CART
                  </button>
                  <button
                    onClick={() => removeFromCart(lady.id)}
                    className="add-to-cart-btn"
                  >
                    Remove From Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

const mapStateToProps = ({ cart }) => {
  return { cart }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: _id => dispatch({ type: `ADD_TO_CART`, payload: _id }),
    removeFromCart: _id => dispatch({ type: `REMOVE_FROM_CART`, payload: _id }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ladies)

export const query = graphql`
  query Ladies {
    allContentfulLadies {
      edges {
        node {
          id
          name
          slug
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
