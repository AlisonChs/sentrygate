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

        const aluno = await Aluno.findByPk(id_aluno);

        const {
            email,
            senha,
        } = req.body;

        if (!aluno) {
            return res.status(404).json({ msg: 'Aluno inexistente ou não encontrado' });
        }
        //Recebendo os valores do frontend pelo corpo da requisição

        //Criando os valores recebidos na tabela        
        const [conta] = await Conta.findOrCreate({
            where: {
                id_aluno,
                email,
            }
        });

        await aluno.addAlunos(conta);
        //Recebendo a respostada da requisição
        return res.json(aluno_conta);







    }
}
