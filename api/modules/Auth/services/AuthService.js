const jwtk = require('jsonwebtoken');
const { secret, ttl } = require('../../../../config/auth');

/**
 * Retorna um Token Válido
 *
 * @returns string token jwt
 */

const AuthServe = () => {
  // gerando token
  return jwtk.sign({}, secret, { expiresIn: ttl });
};

module.exports = AuthServe;
