const Aluno = require('../models/Aluno');


module.exports = {
    async index(req, res) {
        const alunos = await Aluno.findAll();
        return res.json(alunos);
    },
    async store(req, res) {
        //Recebendo os valores do frontend pelo corpo da requisição
        const {
            nome_aluno,
            sobrenome_aluno,
            data_nasc_aluno,
            genero_aluno,
            rg_aluno,
            cpf_aluno,
            cep_aluno,
            cidade_aluno,
            bairro_aluno,
            rua_aluno,
            complemento_aluno,
            tel_aluno
        } = req.body;

        //Criando os valores recebidos na tabela        
        const [aluno, created] = await Aluno.findOrCreate({
            where: { cpf_aluno },
            defaults: {
                nome_aluno,
                sobrenome_aluno,
                data_nasc_aluno,
                genero_aluno,
                rg_aluno,
                cpf_aluno,
                cep_aluno,
                cidade_aluno,
                bairro_aluno,
                rua_aluno,
                complemento_aluno,
                tel_aluno
            }
        });

        if (!created) {
            return res.status(302).json("cpf already registered")
        } else {
            //Recebendo a respostada da requisição
            return res.status(200).json();
        }








    }
}
