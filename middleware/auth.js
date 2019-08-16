const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  // Retrieving the token from the http header
  const token = req.header('x-auth-token');

  // Check whether a token is available or not
  if (!token) {
    return res
      .status(401)
      .json({ msg: 'No token found, authorization denied' });
  }

  // Verifying the present token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret')); // token verification
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Token is not valid' });
  }
};
