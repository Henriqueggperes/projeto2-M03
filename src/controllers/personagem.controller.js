const  mongoose  = require('mongoose');
const pesrsonagensService = require('../services/personagem.service')

const findAllCharactersController = async (req,res) => {
const personagens = await pesrsonagensService.findAllCharactersService();
res.send(personagens);
};
const findByIdCharacterController = async (req,res) => {
    const idParam = req.params.id;
   
    if(!mongoose.Types.ObjectId.isValid(idParam)){
      return res.status(400).send({ message: 'Id inválido!'});
    }
   
    const chosenCharacter = await pesrsonagensService.findByIdCharacterService(idParam)
   
    if(!chosenCharacter){
      return res.status(404).send({message:'Personagem não encontrado'});
    }
    res.send(chosenCharacter);
  }
const createCharacterController = (req,res) =>{
const personagem = req.body;
const newPersonagem = pesrsonagensService.createCharacterService(personagem);
res.send(newPersonagem);
};
const updateCharacterController = (req,res) =>{
  const idParam = req.params.id;
  const personagemEdit = req.body;
  const updatedPersonagem = paletasService.updateCharacterService(idParam, personagemEdit);
  res.send(updatedPersonagem);
};
const deleteCharacterController = (req,res) =>{
  const idParam = req.params.id;
  pesrsonagensService.deleteCharacterService(idParam);
  res.send({ message: 'Personagem deletado com sucesso!' });
};


module.exports = {
findAllCharactersController,
findByIdCharacterController,
createCharacterController,
updateCharacterController,
deleteCharacterController,

};
