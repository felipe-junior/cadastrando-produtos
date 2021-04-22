import express from 'express'
import fs from 'fs'


const app = express()
const porta = 8080
const index = fs.readFileSync("C:/Users/Felipe/Documents/NodeSql/aprendendo-node/index.html", "utf-8")
//app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get("/adicionar", (req, res)=>{
    res.send(index)
})
app.post("/adicionar", (req, res)=>{
   console.log(req.body)
   res.send(req.body)
})

app.listen(porta, ()=>{
    console.log('Servidor rodando');
})