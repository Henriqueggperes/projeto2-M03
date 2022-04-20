

const personagens = require('../model/personagem')



const findAllCharactersService = async () => {
  const characters = await personagens.find();
  return characters;
};

const findByIdCharacterService = async (idParam) => {
  const characters = await personagens.findById(idParam)
  return characters;
};
const createCharacterService = async (newCharacter) => {
  const  createdCharacter = await personagens.create(newCharacter);
  return createdCharacter;
};
const updateCharacterService = async (idParam, editCharacter) => {
  const updatedCharacter = await personagens.findByIdAndUpdate(idParam,editCharacter)
  return updatedCharacter;
};
const deleteCharacterService = async (idParam) => {
  return await personagens.findByIdAndDelete(idParam);
};

module.exports = {
  findAllCharactersService,
  findByIdCharacterService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
