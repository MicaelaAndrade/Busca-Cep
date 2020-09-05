const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { secret } = require('../../config/auth');

module.exports = async (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken) return res.status(401).json({ error: 'token obrigatório' });

  const PreToken = authToken.split(' ');
  let token;
  if (PreToken.length > 1) [, token] = PreToken;
  else [token] = PreToken;

  try {
    await promisify(jwt.verify)(token, secret);

    return next();
  } catch (e) {
    return res.status(401).json({ error: 'token invalido' });
  }
};
