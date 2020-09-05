const app = require('../config/express')();

const port = app.get('port');

// forma express
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
