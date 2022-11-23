const Responsavel = require('../models/Responsavel');
const Aluno = require('../models/Aluno');
const ResponsavelAluno = require('../models/ResponsavelAluno');

module.exports = {
    async index(req, res) {
        const { id_aluno } = req.params;
        const responsaveis = await Aluno.findByPk(id_aluno)

        return res.json(responsaveis);
    },
    async store(req, res) {


        //Recebe os valores do corpo do frontend
        const {
            nome_responsavel,
            sobrenome_responsavel,
            data_nasc_responsavel,
            cpf_responsavel,
            rg_responsavel,
            tel_responsavel,
            cpf_aluno,
        } = req.body;

        const aluno = await Aluno.findOne({
            where: { cpf_aluno },
       

        })

        if (aluno === null) {
            return res.status(404).json("Student not found")
        }

        
        
        const responsavel_aluno = await ResponsavelAluno.findOne({
            where: {id_aluno : aluno.id},
        });

        if (responsavel_aluno === null) {
            //Cria os valores e os insere na tabela
            const [responsavel] = await Responsavel.findOrCreate({
                where: {
                    cpf_responsavel,
                },
                defaults: {
                    nome_responsavel,
                    sobrenome_responsavel,
                    data_nasc_responsavel,
                    cpf_responsavel,
                    rg_responsavel,
                    tel_responsavel,
                }
            });
            
            await aluno.addResponsavel(responsavel)

            return res.status(200).json()
        } else {
            return res.status(302).json("student already has a responsible")
        }

    }
}
