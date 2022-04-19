

const personagens = require('../model/personagem')



const findAllCharactersService = async () => {
  const characters = await personagens.find();
  return characters;
};

const findByIdCharacterService = async (idParam) => {
  const characters = await personagens.findById(idParam)
  return characters;
};
const createCharacterService = (newCharacter) => {
  const newId = characters.length + 1;
  newCharacter.id = newId;
  characters.push(newCharacter);
  return newCharacter;
};
const updateCharacterService = (idParam, personagemEdit) => {
  personagemEdit["id"] = idParam;
  const personagemIndex = characters.findIndex(
    (character) => character.id == idParam
  );
  characters[personagemIndex] = personagemEdit;
  return personagemEdit;
};
const deleteCharacterService = (idParam) => {
  const personagemIndex = characters.findIndex((character) => character.id ==idParam);
  return characters.splice(personagemIndex,1);
};

module.exports = {
  findAllCharactersService,
  findByIdCharacterService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
