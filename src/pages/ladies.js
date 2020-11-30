import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { connect } from "react-redux"
import "./ladies.css"

function Ladies({ data, addToCart, removeFromCart, cart }) {
  const ladies = data.allContentfulLadies
  return (
    <Layout>
      <section className="new_arrivals_area section_padding_100_0 clearfix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_heading text-center custom-heading">
                <div className="custom-line"></div>
                <h2>For Ladies</h2>
                <div className="custom-line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row karl-new-arrivals">
            <div className="products-container">
              {ladies.edges.map(({ node: lady }, index) => (
                <div
                  className="col-12 col-sm-6 col-md-4 single_gallery_item product-card"
                  key={index}
                >
                  <div className="product-sale">
                    <span>Sale!</span>
                  </div>
                  <Link
                    to={`/ladies/${lady.slug}`}
                    className="col-12 col-sm-6 col-md-4 single_gallery_item product-card"
                  >
                    <div className="product-img">
                      <Img
                        fluid={{ ...lady.images[0].fluid, aspectRatio: 2 / 3 }}
                        alt={lady.name}
                        key={lady.id}
                      />

                      <div className="product-quicview">
                        <Link to={`/ladies/${lady.slug}`}>Quick View</Link>
                      </div>
                    </div>
                  </Link>
                  <div className="product-description">
                    <del>
                      <span className="product-price discounted">
                        {lady.price
                          ? `${Math.floor(
                              lady.price + (lady.price / 100) * 30
                            )} PKR`
                          : "NAN"}
                      </span>
                    </del>
                    <span className="product-price">
                      {lady.price
                        ? `${Math.floor(
                            lady.price +
                              (lady.price / 100) * 30 -
                              (lady.price / 100) * 30
                          )}`
                        : "NAN"}
                    </span>
                    <span className="currency"> Pkr</span>

                    <Link to={`/ladies/${lady.slug}`}>
                      <p>
                        <strong>{lady.name}</strong>
                      </p>
                    </Link>
                    <div className="cart-button">
                      {cart.find(
                        item => item.contentful_id === lady.contentful_id
                      ) ? (
                        <button
                          onClick={() => removeFromCart(lady.contentful_id)}
                          className="add-to-cart-btn custom-btn"
                          type="button"
                        >
                          Remove From Cart
                        </button>
                      ) : (
                        <button
                          onClick={() => addToCart(lady)}
                          className="add-to-cart-btn custom-btn btn-add"
                          type="button"
                        >
                          ADD TO CART
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
    addToCart: lady => dispatch({ type: `ADD_TO_CART`, payload: lady }),
    removeFromCart: _id => dispatch({ type: `REMOVE_FROM_CART`, payload: _id }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ladies)

export const query = graphql`
  query Ladies {
    allContentfulLadies {
      edges {
        node {
          contentful_id
          name
          slug
          price
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
