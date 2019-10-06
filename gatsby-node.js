/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
  const config = getConfig();

  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom'
      }
    },
    node: {
      fs: "empty"
    },
  })
}
