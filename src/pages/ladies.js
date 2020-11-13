import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

function Ladies({ data }) {
  console.log(data)
  const Ladies = data.allContentfulLadies
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
            {Ladies.edges.map(({ node: lady }) => (
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
                  <Link to="/ladies" className="add-to-cart-btn">
                    ADD TO CART
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Ladies

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
