// import React from "react"
// import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"
// import Layout from "../components/layout"

// function Categories({ data: { category } }) {
//   console.log(category)
//   return (
//     <Layout>
//       <div>
//         <h1>Category: {category.edges[0].node.category.fabricType}</h1>
//         {category.edges &&
//           category.edges.map(({ node: suit }) => (
//             <>
//               <p>
//                 Suit Name is:{" "}
//                 <Link to={`/ladies/${suit.slug}`}>{suit.name}</Link>
//               </p>
//               <p>
//                 Brand is:{" "}
//                 <Link to={`/brands/${suit.brand.slug}`}>{suit.brand.name}</Link>
//               </p>
//               <div style={{ display: "flex", width: "100%", gap: "1em" }}>
//                 {suit.images.map(image => (
//                   <div style={{ width: "200px" }}>
//                     <Img
//                       fluid={image.fluid}
//                       style={{
//                         objectFit: "cover",
//                         width: "100%",
//                         height: "100%",
//                       }}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </>
//           ))}
//       </div>
//     </Layout>
//   )
// }

// export default Categories

// export const query = graphql`
//   query($slug: String!) {
//     category: allContentfulLadies(
//       filter: { category: { slug: { eq: $slug } } }
//     ) {
//       edges {
//         node {
//           slug
//           name
//           images {
//             fluid {
//               ...GatsbyContentfulFluid
//             }
//           }
//           brand {
//             name
//             slug
//           }
//           category {
//             fabricType
//             slug
//           }
//         }
//       }
//     }
//   }
// `
