const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { secret } = require('../../../../../config/auth');
const AuthService = require('../AuthService');

// Teste unitário
test('gerando token', async () => {
  const token = AuthService();

  await expect(promisify(jwt.verify)(token, secret)).resolves.not.toBeNull();
});
