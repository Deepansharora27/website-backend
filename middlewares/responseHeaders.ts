/**
 * Middleware to attach Cache header.
 * https://support.cloudflare.com/hc/en-us/articles/200172516-Understanding-Cloudflare-s-CDN
 * @todo: Remove the middleware for all routes and modify cache max-age of each route individually as per required
 *
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Express middleware function
 */

module.exports = (req, res, next) => {
  res.header('Cache-Control', 'max-age=0')
  next()
}
