const express = require('express')
const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send("Estamos programando tudo para você, aproveite o tempo e relaxe.")
})