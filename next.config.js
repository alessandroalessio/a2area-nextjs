const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const withPurgeCss = require("next-purgecss");

module.exports = withCSS(withPurgeCss(withLess(withImages(withSass({
  env: {
    WEBSITE_NAME: "Alessandro Alessio"
  }
})))));