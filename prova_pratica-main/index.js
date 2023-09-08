const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3333;
const exphbs = require('express-handlebars');
const mysql2 = require('mysql2');
const { Router } = require('express');

//Importar o módulo conn para as operações com o banco

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.json());

const db = mysql2.createPool ({
  host: "localhost",
  user: "aluno_medio",
  password: "@lunoSenai23.",
  database: "livro_emp",
});

app.post("/cadastro", (request, response)=>{
  const { título, categoria, descrição, preço, quantidade } = request.body
});

const inserirMsql = `INSER INTO livro_emp(título, categoria, descrição, preço, quantidade) VALUES ('${título}', '${categoria}','${descrição}', '${preço}', '${quantidade}' )`
router.get('/cadastrar', (request, response) => {
  return response.render('home')
});

router.put("/produtos/:id", (request, response) =>{
  const { id } = request.params;
  const { título, categoria, descrição, preço, quantidade } = request.body;

  const produtoIndex = produtos.findIndex((produto) => produto.id === id);

  const produtoAtualizado = {
    id,
    título, 
    categoria,
    descrição, 
    preço,
    quantidade
  };
  produtos[produtoIndex] = produtoAtualizado;
  
  return response.json('produtos')
});


//Middleware para arquivos estáticos


app.get('/', (req, res)=>{
  return response.json('produtos')
});

app.listen(PORT, (erro)=>{
  if(error) {
    console.log("deu erro")
  }
  console.log(`Servidor rodando na porta ${PORT}`)
});

