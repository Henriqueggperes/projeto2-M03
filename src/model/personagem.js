const mongoose = require("mongoose");

const persoSchema = new mongoose.Schema({
  personagem: {
    type: String,
    require: true,
  },
  stand: {
    type: String,
    require: true,
  },
  standstatus: {
    type: String,
    require: true,
  },
  habilidades: {
    type: String,
    require: true,
  },
  foto: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
});

const Personagem = mongoose.model('items',persoSchema)

module.exports = Personagem;
