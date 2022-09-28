const Responsavel = require('../models/Responsavel');

module.exports = {
    async index(req, res) {
        const responsaveis = await Responsavel.findAll();

        return res.json(responsaveis);
    },
    async store(req, res) {
        //Recebe os valores do corpo do frontend
        const {
            nome,
            sobrenome,
            data_nasc,
            cpf,
            rg,
            tel } = req.body;

        //Cria os valores e os insere na tabela
        const responsaveis = await Responsavel.create({
            nome,
            sobrenome,
            data_nasc,
            cpf,
            rg,
            tel
        });

        return res.json(responsaveis);
    }
}