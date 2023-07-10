/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,

  // Add basePath
  basePath: '/github-pages',

  sassOptions: {
    includePaths: [path.join(__dirname, 'library/scss')],
  },

}

module.exports = nextConfig
