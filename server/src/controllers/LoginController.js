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
            return res.status(404).json({ msg: "email ou senha invalidos" })
        } else {
            return res.status(302).json({ msg: "login feito com sucesso" })
        }
    },


}
