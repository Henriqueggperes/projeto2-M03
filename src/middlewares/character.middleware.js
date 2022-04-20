const mongoose = require("mongoose");

const idValidation = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "Id inválido!" });
  }
  next();
};

const objectBodyValidation = (req, res, next) => {
    const objectBody = req.body;
    if(
        !objectBody||
        !objectBody.personagem||
        !objectBody.stand||
        !objectBody.standstatus||
        !objectBody.habilidades||
        !objectBody.foto||
        !objectBody.descricao
        ) {
         return res 
            .status(400)
            .send({message: 'Por favor, complete todos os campos'});
      };

      next();
};

module.exports = {
    idValidation,
    objectBodyValidation,
}
