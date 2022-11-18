const { findOne } = require('../models/Aula');
const Aula = require('../models/Aula');


module.exports = {
    async index(req, res) {
        const aulas = await Aula.findAll();
        return res.json(aulas);
    },
    async store(req, res) {
        //Recebendo os valores do frontend pelo corpo da requisição
        const {
            quantidade_aula,
            data_aula
        } = req.body;

        //Criando os valores recebidos na tabela        
        const [aula, created] = await Aula.findOrCreate({
            where: { quantidade_aula },
            defaults: {
                quantidade_aula,
                data_aula
            }
        });

        if (!created) {
            return res.status(302).json("class already registered")
        } else {
            //Recebendo a respostada da requisição
            return res.status(200).json();
        }
    }
}
