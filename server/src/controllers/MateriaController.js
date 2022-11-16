const Materia = require('../models/Materia');


module.exports = {
    async index(req, res) {
        const materias = await Materia.findAll();
        return res.json(materias);
    },

    async store(req, res) {
        //Recebendo os valores do frontend pelo corpo da requisição
        const {
            nome
        } = req.body;

        //Criando os valores recebidos na tabela        
        const [materia, created] = await Materia.findOrCreate({
            where: { nome },
            defaults: {
                nome
            }
        });

        if (!created) {
            return res.status(302).json("subject already registered")
        } else {
            //Recebendo a respostada da requisição
            return res.status(200).json();
        }








    }
}
