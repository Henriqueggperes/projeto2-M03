const route = require("express").Router();
const controllerPersonagens = require("../controllers/personagem.controller");

route.get("/all-characters", controllerPersonagens.findAllCharactersController);
route.get("/find-character/:id", controllerPersonagens.findByIdCharacterController);
route.post('/create-character', controllerPersonagens.createCharacterController);
route.put('/update-character/:id', controllerPersonagens.updateCharacterController);
route.delete('/delete-character/:id', controllerPersonagens.deleteCharacterController);
module.exports = route;
