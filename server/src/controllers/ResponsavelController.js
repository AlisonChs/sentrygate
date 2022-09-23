const Responsavel = require('../models/Responsavel');

module.exports = {
    async index(req, res) {
        const responsaveis = await Responsavel.findAll();

        return res.json(responsaveis);
    },
    async store(req, res) {
        const { nome, sobrenome, data_nasc, cpf, rg, tel } = req.body;

        const responsaveis = await Responsavel.create({ nome, sobrenome, data_nasc, cpf, rg, tel });

        return res.json(responsaveis);
    }
}