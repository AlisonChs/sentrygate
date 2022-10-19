const { findOne, findByPk } = require('../models/Aluno');
const Conta = require('../models/Conta')


module.exports = {
    async index(req, res) {
        const {
            email,
            senha
        } = req.body;

        const conta = await Conta.findOne({
            where: { email, senha }
        });

        if (!conta) {
            return res.json(404)
        } else {
            return res.json(200)
        }
    },


}
