import express from 'express'
const app = express()
import {Sequelize} from 'sequelize'

const porta = 8080

app.use(express.urlencoded({extended: true}))

const sequelize = new Sequelize("produtosTestes", "root", "290520", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(() => console.log("Autenticado")).catch((razao ) =>console.log(razao))

const Produtos = sequelize.define("produtos", {
    nome: {type: Sequelize.TEXT},
    quantidade: {type: Sequelize.INTEGER},
    descricao: {type: Sequelize.STRING}
})

Produtos.sync()

app.get("/adicionar", (req, res)=>{
    res.sendFile("C:/Users/Felipe/Documents/copia/teste/index.html")
})
app.post("/adicionar", (req, res)=>{

    console.log()

    Produtos.create({
       nome: req.body.produtoNome,
       quantidade: req.body.quantidadeProduto,
       descricao: req.body.descricao
   })
   res.redirect("/adicionar")
})

app.listen(porta, ()=>{
    console.log('Servidor rodando');
})
