// Ambientação de trabalho para desenvolvimento
const express = require('express')
const cors = require('cors')
const routes = require("./utils/routes")

require('./database/index');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3001);

