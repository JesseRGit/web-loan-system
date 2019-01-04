/*
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript()
*/

const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')

module.exports = withTypescript(withCSS())
