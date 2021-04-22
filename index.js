import express from 'express'
import fs from 'fs'

const app = express()
const porta = 8080
const index = fs.readFileSync("C:/Users/Felipe/Documents/NodeSql/aprendendo-node/index.html", "utf-8")
app.get("/adicionar", (req, res)=>{
    res.send(index)
})
app.post("/adicionar", (req, res)=>{
    res.render('<h1>Enviado</h1>')
})

app.listen(porta, ()=>{
    console.log('Servidor rodando');
})