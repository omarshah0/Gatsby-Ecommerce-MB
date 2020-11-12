import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import logo from "../images/Logo.svg"
import Img from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      MenImage: file(relativePath: { eq: "Men.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      WomenImage: file(relativePath: { eq: "Women.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      JuniorImage: file(relativePath: { eq: "Junior.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <h1 style={{ display: "none" }}>Meerab Boutique</h1>
      <header>
        <div className="header__logo">
          <img src={logo} alt="Meerab Boutique" />
        </div>
      </header>
      <main>
        <div className="hero">
          <Link to="/ladies">
            <div className="hero__section">
              <div className="hero__section__content">
                <h2>Men</h2>
              </div>
              <Img fluid={data.MenImage.childImageSharp.fluid} />
            </div>
          </Link>
          <Link to="/ladies">
            <div className="hero__section">
              <div className="hero__section__content">
                <h2>Women</h2>
              </div>
              <Img fluid={data.WomenImage.childImageSharp.fluid} />
            </div>
          </Link>
          <Link to="/ladies">
            <div className="hero__section">
              <div className="hero__section__content">
                <h2>Juniors</h2>
              </div>
              <Img fluid={data.JuniorImage.childImageSharp.fluid} />
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}

export default IndexPage
