/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
// import Footer from "./Footer"
import Discount from "./discount"
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Discount />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}
export default Layout
