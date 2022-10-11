const { findOne } = require('../models/Aluno');
const Aluno = require('../models/Aluno');


module.exports = {
    async index(req, res) {
        const alunos = await Aluno.findAll();
        return res.json(alunos);
    },
    async store(req, res) {
        //Recebendo os valores do frontend pelo corpo da requisição
        const {
            nome,
            sobrenome,
            data_nasc,
            genero,
            rg,
            cpf,
            cep,
            cidade,
            bairro,
            rua,
            complemento,
            tel,
        } = req.body;

        //Criando os valores recebidos na tabela        
        const [aluno, created] = await Aluno.findOrCreate({
            where: { cpf },
            defaults: {
                nome,
                sobrenome,
                data_nasc,
                genero,
                rg,
                cpf,
                cep,
                cidade,
                bairro,
                rua,
                complemento,
                tel,
            }
        });

        if (!created) {
            return res.status(302).json({ msg: "Aluno ja cadastrado" });
        }

        //Recebendo a respostada da requisição
        return res.json(aluno);







    }
}
