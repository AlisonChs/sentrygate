const Aluno = require('../models/Aluno');
const Conta = require('../models/Conta');
const ContaAluno = require('../models/ContaAluno');


module.exports = {
    async index(req, res) {
        const { id_aluno } = req.params;
        const conta = await Conta.findByPk(id_aluno);
        return res.json(conta)
    },

    async store(req, res) {

        //Recebendo os valores do frontend pelo corpo da requisição
        const {
            email_conta,
            senha_conta,
            cpf_aluno,
        } = req.body;

        //Verifica se existe este usuario no banco de dados
        const aluno = await Aluno.findOne({
                where: { cpf_aluno },
                
        });
        if (aluno === null) {
            return res.status(404).json()
        };


        //Procura se o usuario ja possui uma conta
        const conta_aluno = await ContaAluno.findOne({
            where: {id_aluno : aluno.id},
        })

        
        //Se o usuario não possuir conta, ira ser criada
        if (conta_aluno === null) {

            //Procura se ja existe um email igual
            const [conta, created] = await Conta.findOrCreate({
                where: {
                    email_conta,
                },
                defaults:
                {
                    email_conta,
                    senha_conta,
                },

            });

            await aluno.addConta(conta)

            //Se existir um email citado no banco de dados sera notificado
            if (!created) {
                return res.status(303).json("existing email")
            } else {
                return res.status(200).json(conta)
            }

            //Se não existir um email se

            //Se o usuario ja possui uma conta, ira ser notificado
        } else {
            return res.status(302).json("student already has an account")
        }
    }
}
