/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import Discount from "./discount"
import Footer from "./footer"
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <Discount /> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
