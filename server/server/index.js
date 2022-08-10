const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors")

app.use(express.json());
app.use(cors());

//Faz conexão com o banco de dados
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "sentrygate",
});

//Função de cadastro
app.post("/register", (req, res) => {
    const { name } = req.body;
    const { cdgescola } = req.body;
    const { email } = req.body;
    const { password } = req.body;

    let SQL = "INSERT INTO usuarios (nome, cdgEscola, email, senha ) VALUES (?, ?, ?, ?)";

    try {
        db.query(
            SQL,
            [name, cdgescola, email, password],
            (err, result) => {
                if (err) console.log(err);
                else {
                    result.message = 'Usuario cadastrado'
                    res.send(result);
                }
            }
        );
    } catch (err) {
        console.log(err);
    }
});

//Função de login
app.post('/login', (req, res) => {
    const { email } = req.body
    const { password } = req.body

    let SQL = "SELECT * FROM usuarios WHERE email = ? && senha = ?";

    db.query(SQL, [email, password], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

//Avisa em que porta esta usando
app.listen(3001, () => {
    console.log("rodando na porta 3001");
});