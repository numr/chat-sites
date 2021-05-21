/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
// exports.createPages = ({ actions }) => {
//     const { createPage } = actions
  
//     const dogData = [
//       {
//         name: "Fido",
//         breed: "Sheltie",
//       },
//       {
//         name: "Sparky",
//         breed: "Corgi",
//       },
//     ]
//     dogData.forEach(dog => {
//       createPage({
//         path: `/${dog.name}`,
//         component: require.resolve(`./src/templates/dog-template.js`),
//         context: { dog },
//       })
//     })
//   }