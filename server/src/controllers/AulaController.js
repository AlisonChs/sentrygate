const { findOne } = require('../models/Aula');
const Aula = require('../models/Aula');
const Materia = require('../models/Materia')


module.exports = {
    async index(req, res) {
        const aulas = await Aula.findAll();
        return res.json(aulas);
    },
    async store(req, res) {
        const { id_materia } = req.params;
        //Recebendo os valores do frontend pelo corpo da requisição
        const {
            quantidade_aula,
            data_aula,
        } = req.body;

        const materia = await Materia.findByPk(id_materia) 

        //Criando os valores recebidos na tabela        
        const aula = await Aula.create({
                quantidade_aula,
                data_aula,
                id_materia
        });

            return res.status(200).json();
    }
}
