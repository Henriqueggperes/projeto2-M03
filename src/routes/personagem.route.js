const route = require("express").Router();
const controllerPersonagens = require("../controllers/personagem.controller");
const {idValidation, objectBodyValidation} = require('../middlewares/character.middleware')

route.get("/all-characters",controllerPersonagens.findAllCharactersController);
route.get("/find-character/:id", idValidation, controllerPersonagens.findByIdCharacterController);
route.post('/create-character', objectBodyValidation ,controllerPersonagens.createCharacterController);
route.put('/update-character/:id',idValidation, objectBodyValidation ,controllerPersonagens.updateCharacterController);
route.delete('/delete-character/:id',idValidation ,controllerPersonagens.deleteCharacterController);
module.exports = route;
