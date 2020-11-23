import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { connect } from "react-redux"

function Ladies({ data: { lady }, cart, addToCart, removeFromCart }) {
  const [productImage, setProductImage] = useState({
    srcSet: lady.images[0].fluid,
    title: lady.images[0].title,
  })
  console.log(lady)
  return (
    <Layout>
      <div className="container">
        <div className="breadcumbs">BreadCumbs Goes Here</div>
        <div className="product">
          {/* Product Images Thumbnailss */}
          <div className="product__imageThumbnail">
            {lady.images.map((image, index) => (
              <div
                className="thumbnail-wrapper"
                key={index}
                onClick={() =>
                  setProductImage({ srcSet: image.fluid, title: image.title })
                }
              >
                <Img fluid={image.fluid} alt={image.title} />
              </div>
            ))}
          </div>

          {/* Product Main Image */}
          <div className="product__image">
            <div className="gatsby-wrapper">
              <Img
                fluid={productImage.srcSet}
                alt={productImage.title}
                fadeIn={true}
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="product__info">
            <h1 className="product__title">{lady.name}</h1>
            <p className="model__info">
              MTF401049-10262419<br></br> The model is wearing size: M; Model
              height: 5.11ft / 180cm
            </p>
            <hr />
            <h2 className="product__price">
              PKR: {lady.price ? lady.price : "4,296"}
            </h2>
            <p>
              Color: <strong>BLK</strong>
            </p>
            <div className="product__quantity">Quantity Goes Here</div>
            <div className="product__cta">
              {/* ///////////////////////////////////////////////// */}
              {cart.find(item => item.contentful_id === lady.contentful_id) ? (
                <button
                  className="add-to-cart-btn custom-btn"
                  type="button"
                  onClick={() => removeFromCart(lady.contentful_id)}
                >
                  REMOVE FROM CART
                </button>
              ) : (
                <button
                  className="add-to-cart-btn custom-btn btn-add"
                  type="button"
                  onClick={() => addToCart(lady)}
                >
                  ADD TO CART
                </button>
              )}
              {/* ///////////////////////////////////////////////// */}

              <button className="ctaButton Add_To_WishList" type="button">
                ADD TO WISHLIST
              </button>
            </div>
            <div className="product__description">
              <p>
                Fit: <span>Regular</span>
              </p>
              <p>Composition & Care:</p>
              <ul>
                <li>100% Cotton</li>
                <li>Machine wash up to 30°C/86°F gentle cycle</li>
                <li>Iron up to 110°C/230°F</li>
                <li>Do not tumble dry</li>
                <li>Do not bleach</li>
                <li>Do not dry clean</li>
              </ul>
            </div>
            <div className="product__social">Fb | Twitter | Google | ETC</div>
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
    addToCart: lady => dispatch({ type: `ADD_TO_CART`, payload: lady }),
    removeFromCart: _id => dispatch({ type: `REMOVE_FROM_CART`, payload: _id }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ladies)

export const query = graphql`
  query($slug: String!) {
    lady: contentfulLadies(slug: { eq: $slug }) {
      contentful_id
      name
      slug
      price
      images {
        id
        title
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      brand {
        name
        slug
      }
      category {
        fabricType
        slug
      }
    }
  }
`
