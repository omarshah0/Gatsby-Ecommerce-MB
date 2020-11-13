exports.createPages = async ({ actions, graphql, reporter }) => {
  //Creating Single Page for Each Product
  const allLadiesSuit = await graphql(`
    {
      allContentfulLadies {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (allLadiesSuit.errors) {
    reporter.panic(
      "Error Loading Recipes",
      JSON.stringify(allLadiesSuit.errors)
    )
  }
  allLadiesSuit.data.allContentfulLadies.edges.forEach(({ node: lady }) => {
    actions.createPage({
      path: `/ladies/${lady.slug}`,
      component: require.resolve("./src/templates/ladies.js"),
      context: {
        slug: lady.slug,
      },
    })
  })
  //Creating Single Page for All Categories
  // const allCategories = await graphql(`
  //   {
  //     allContentfulCategories {
  //       edges {
  //         node {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `)
  // if (allCategories.errors) {
  //   reporter.panic(
  //     "Error Loading Recipes",
  //     JSON.stringify(allCategories.errors)
  //   )
  // }
  // allCategories.data.allContentfulCategories.edges.forEach(
  //   ({ node: category }) => {
  //     actions.createPage({
  //       path: `/category/${category.slug}`,
  //       component: require.resolve("./src/templates/categories.js"),
  //       context: {
  //         slug: category.slug,
  //       },
  //     })
  //   }
  // )
}
