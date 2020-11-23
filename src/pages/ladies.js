import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { connect } from "react-redux"

function Ladies({ data, addToCart, removeFromCart, cart }) {
  const ladies = data.allContentfulLadies
  console.log("render check")
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
        <div className="container">
          <div className="row karl-new-arrivals">
            {ladies.edges.map(({ node: lady }, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 single_gallery_item"
                key={index}
              >
                <div className="product-img">
                  <Img
                    fluid={{ ...lady.images[0].fluid, aspectRatio: 2 / 3 }}
                    alt={lady.name}
                    key={lady.id}
                  />
                  <div className="product-quicview">
                    <Link to={`/ladies/${lady.slug}`}>
                      <i className="ti-plus"></i>
                    </Link>
                  </div>
                </div>
                <div className="product-description">
                  <h4 className="product-price">
                    {lady.price ? `${lady.price} PKR` : "NAN"}
                  </h4>
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
                      >
                        Remove From Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(lady)}
                        className="add-to-cart-btn custom-btn btn-add"
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
