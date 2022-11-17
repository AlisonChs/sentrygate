const { findOne } = require('../models/Professor');
const Professor = require('../models/Professor');


module.exports = {
    async index(req, res) {
        const professores = await Professor.findAll();
        return res.json(professores);
    },
    async store(req, res) {
        //Recebendo os valores do frontend pelo corpo da requisição
        const {
            nome_professor,
            sobrenome_professor,
            nome_social_professor,
            data_nasc_professor,
            genero_professor,
            rg_professor,
            cpf_professor,
            cep_professor,
            cidade_professor,
            bairro_professor,
            rua_professor,
            tel_professor,
            matricula_professor
        } = req.body;

        //Criando os valores recebidos na tabela        
        const [professor, created] = await Professor.findOrCreate({
            where: { cpf_professor },
            defaults: {
                nome_professor,
                sobrenome_professor,
                nome_social_professor,
                data_nasc_professor,
                genero_professor,
                rg_professor,
                cpf_professor,
                cep_professor,
                cidade_professor,
                bairro_professor,
                rua_professor,
                tel_professor,
                matricula_professor
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
