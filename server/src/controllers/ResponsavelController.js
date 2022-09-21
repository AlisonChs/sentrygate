const Responsavel = require('../models/Responsavel');

module.exports = {
    async index(req, res) {
        const responsaveis = await Responsavel.findAll();

        return res.json(responsaveis);
    },
    async store(req, res) {
        const { nome, data_nasc, cpf, rg } = req.body;

        const responsaveis = await Responsavel.create({ nome, data_nasc, cpf, rg });

        return res.json(responsaveis);
    }
}