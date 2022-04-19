const route = require("express").Router();
const controllerPersonagens = require("../controllers/personagem.controller");

route.get("/todos-personagens", controllerPersonagens.findAllCharactersController);
route.get("/find-personagem/:id", controllerPersonagens.findByIdCharacterController);
route.post('/create', controllerPersonagens.createCharacterController);
route.put('/update/:id', controllerPersonagens.updateCharacterController);
route.delete('/delete/:id', controllerPersonagens.deleteCharacterController);
module.exports = route;
