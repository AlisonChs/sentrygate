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
        //Cria um parametro para a rota
        const { id_aluno } = req.params;
        //Recebe os valores do corpo do frontend
        const {
            nome,
            sobrenome,
            data_nasc,
            cpf,
            rg,
            tel
        } = req.body;



        //Procura o aluno por meio da chave primaria
        const aluno = await Aluno.findByPk(id_aluno);

        //Caso não ache o aluno envia uma mensagem de erro
        if (!aluno) {
            return res.json(404)
        }
        const responsavel_aluno = await ResponsavelAluno.findOne({
            where: { id_aluno }
        });
        if (!responsavel_aluno) {
            //Cria os valores e os insere na tabela
            const [responsavel] = await Responsavel.findOrCreate({
                where: {
                    cpf,
                },
                defaults: {
                    nome,
                    sobrenome,
                    data_nasc,
                    rg,
                    tel
                }
            });

            await aluno.addResponsaveis(responsavel);

            return res.json(200);
        } else {
            return res.json(302)
        }

    }
}
