const express = require("express")
const app = express()

app.get('/',(requisicao, resposta) => {
    resposta.send("estou funcionando!")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})
