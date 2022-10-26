const { findOne, findByPk } = require('../models/Aluno');
const Conta = require('../models/Conta')
const Aluno = require('../models/Aluno')


module.exports = {
    async index(req, res) {
        const {
            email,
            senha
        } = req.body;

        const conta = await Conta.findOne({
            where: { email, senha }
        });


        if (conta) {
            const aluno = await Aluno.findOne({
                where: conta.id_aluno
            })
            return res.status(200).json(aluno)
        } else {
            return res.status(404)
        }
        


    },


}
