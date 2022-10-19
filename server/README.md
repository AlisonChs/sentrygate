-- TUTORIAL PASSO A PASSO PARA RODAR O BACKEND DO PROJETO --

# ** RODAR O PROJETO **
npm run dev

# ** Configurando backend **

-- Cria o banco de dados (configure os modulos em "src/config/database.js")
npx sequelize db:create

-- Cria uma nova migration 
(exemplo)
npx sequelize migration:create --name=conta

-- Cria as migrations existentes 
npx sequelize db:migrate

-- Desfaz o ultimo comando db:migrate do sistema
npx sequelize db:migrate:undo
