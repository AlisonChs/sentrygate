const { findOne, findByPk } = require('../models/Aluno');
const Aluno = require('../models/Aluno');
const Conta = require('../models/Conta')


module.exports = {
    async index(req, res) {
        const contas = await Conta.findAll();
        return res.json(contas);
    },

    async store(req, res) {
        const { id_aluno } = req.params;

        //Recebendo os valores do frontend pelo corpo da requisição
        const {
            email,
            senha,
        } = req.body;

        const aluno = await Aluno.findByPk(id_aluno);

        if (!aluno) {
            return res.status(404).json({ msg: 'Aluno inexistente ou não encontrado' });
        }
        
        //Criando os valores recebidos na tabela        
        const [ conta ] = await Conta.findOrCreate({
            where: {
                id_aluno
            },
            defaults: {
                senha,
                email,
            }
        });

        //Recebendo a respostada da requisição
        return res.json(conta);







    }
}
