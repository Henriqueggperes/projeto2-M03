const mongoose = require("mongoose");
const CharactersService = require("../services/personagem.service");

const findAllCharactersController = async (req, res) => {
  const allCharacters = await CharactersService.findAllCharactersService();
  res.send(allCharacters);
};
const findByIdCharacterController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "Id inválido!" });
  }

  const chosenCharacter = await CharactersService.findByIdCharacterService(
    idParam
  );

  if (!chosenCharacter) {
    return res.status(404).send({ message: "Personagem não encontrado" });
  }
  res.send(chosenCharacter);
};

const createCharacterController = async (req, res) => {
  const personagem = req.body;

  const newPersonagem = await CharactersService.createCharacterService(
    personagem
  );
  res.status(201).send(newPersonagem);
};

const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const editPersonagem = req.body;
  const updatedPersonagem = await CharactersService.updateCharacterService(
    idParam,
    editPersonagem
  );
  res.send(updatedPersonagem);
};
const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;
  await CharactersService.deleteCharacterService(idParam);
  res.send({ message: "Personagem deletado com sucesso!" });
};

module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
