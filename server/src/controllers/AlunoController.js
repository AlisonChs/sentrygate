const { findOne } = require('../models/Aluno');
const Aluno = require('../models/Aluno');

module.exports = {
    async index(req, res) {
        const { email, senha } = req.body;


        const user = await Aluno.findOne({
            where: {
                email: email,
                senha: senha
            }
        });
        if (user) {
            res.status(200).json({
                success: true
            })
        } else {
            res.status(402).json({
                success: false
            })
        }


    },
    async store(req, res) {
        const { nome, sobrenome, data_nasc, genero, rg, cpf, cep, cidade, bairro, rua, complemento, tel, email, senha } = req.body;

        const aluno = await Aluno.create({ nome, sobrenome, data_nasc, genero, rg, cpf, cep, cidade, bairro, rua, complemento, tel, email, senha });

        return res.json(aluno);
    }
}
