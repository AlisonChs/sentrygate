const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors")

app.use(express());
app.use(cors())

const db = mysql.createPool ({
    host: "localhost",
    user: "root",
    password: "",
    database: "sentrygate"
});

app.post("/grading", (req, res) => {
    const { avaliacao } = req.body;
    const { nota } = req.body;

    let SQL = "INSERT INTO notas (avaliacao1, nota1) VALUES (?, ?)";

    try {
        db.query(
            SQL,
            [avaliacao, nota],
            (err, result) => {
                if (err) console.log(err);
                else {
                    result.message = 'Notas Enviadas'
                    res.send(result);
                }
            }
        );
    } catch (err) {
        console.log(err);
    }
});

app.listen(3001, () => {
    console.log("Rodando na porta 3001");
})