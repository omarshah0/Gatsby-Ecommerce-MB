import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
function Ladies({ data: { lady } }) {
  return (
    <Layout>
      <div>Ladies : Stuff</div>
      <p>Name of Product: {lady.name}</p>

      <p>
        Category is:{" "}
        <Link to={`/category/${lady.category.slug}`}>
          {lady.category.fabricType}
        </Link>
      </p>

      <p>
        Brand is:{" "}
        <Link to={`/brands/${lady.brand.slug}`}>{lady.brand.name}</Link>
      </p>
    </Layout>
  )
}

export default Ladies

export const query = graphql`
  query($slug: String!) {
    lady: contentfulLadies(slug: { eq: $slug }) {
      name
      slug
      images {
        fluid {
          src
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
