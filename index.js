const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/personagem.route");
const connectToDataBase = require('./src/database/database')
//Configurando nossa aplicaçao para trabalhar com json
const port = 3000;
const app = express();

connectToDataBase();

app.use(express.json());
app.use(cors());
app.use("/personagens",routes)
// Definindo dados para usar na aplicacao


app.listen(port, () => {
  console.log(`A aplicação está rodando em http://localhost:${port}`);
});
 