const Aluno = require('../models/Aluno');
const { findOne } = require('../models/Turma');
const Turma = require('../models/Turma');


module.exports = {
    async index(req, res) {
        const turmas = await Turma.findAll();
        return res.json(turmas);
    },

    async store(req, res) {
        //Recebendo os valores do frontend pelo corpo da requisição
        const {
            nome_turma,
            horario,
            ano,
            cpf_aluno
        } = req.body;

        const aluno = await Aluno.findOne({
            where: { cpf_aluno }
        })

        //Criando os valores recebidos na tabela        
        const [turma, created] = await Turma.findOrCreate({
            where: { nome_turma },
            defaults: {
                nome_turma,
                horario,
                ano
            }
        });

        await aluno.addTurmas(turma);

        if (!created) {
            return res.status(302).json("name already registered")
        } else {
            //Recebendo a respostada da requisição
            return res.status(200).json();
        }

    }
}
