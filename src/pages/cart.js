import React, { useEffect } from "react"
import Layout from "../components/layout"
import { createClient } from "contentful"
function Cart() {
  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("root"))
    async function fetchData() {
      try {
        const client = await createClient({
          space: `${process.env.CONTENTFUL_SPACE_ID}`,
          accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
          host: "cdn.contentful.com",
        })
        const entries = await client.getEntries({
          content_type: "ladies",
          "sys.id[in]": orders.cart,
        })
        console.log("Entries is ", entries)
      } catch (error) {
        console.log("Error Block")
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <Layout>
      <h1>This is Cart</h1>
      <p>WAAAT</p>
      <p>{process.env.CONTENTFUL_SPACE_ID}</p>
      <p>{process.env.CONTENTFUL_ACCESS_TOKEN}</p>
    </Layout>
  )
}

export default Cart
