// Ambientação de trabalho para desenvolvimento
const express = require('express')
const routes = require("./utils/routes")

require('./database/index');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3001);

