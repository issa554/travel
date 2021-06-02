


const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
        countries:allStrapiCountries {
        nodes {
          slug
        }
      }

      journeys :allStrapiJourneys {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.journeys.nodes.forEach(journey => {
    createPage({
      path: `/journey/${journey.slug}`,
      component: path.resolve(`src/templates/journey.jsx`),
      context: {
        slug: journey.slug,
      },
    })
  })

  result.data.countries.nodes.forEach(countrie => {
    createPage({
      path: `/countrie/${countrie.slug}`,
      component: path.resolve(`src/templates/countrie.jsx`),
      context: {
        slug: countrie.slug,
      },
    })
  })}