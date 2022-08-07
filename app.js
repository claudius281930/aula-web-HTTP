const express = require('express')//Usando uma dependencia do "express"

const app = express()//informando que o "app" irara utilizar a dependencia "express"

let cachorros = [
    {
        id: 1,
        nome: 'Astro',
        raca: 'ASD',
        porte: 'Pequeno'
    },
    {
        id: 2,
        nome: 'Ozzy',
        raca: 'Border Collie',
        porte: 'medio'
    },
    {
        id: 3,
        nome: 'Pandora',
        raca: 'Cavalier',
        porte: 'Pequeno'
    }
]

app.use(express.json())//indicando que ao "express" o modo de comunicação que será por "JSON"
app.get('/cachorros', (req, res) => {
    res.send(cachorros)
})

app.listen(3000, ()=>{
    console.log('Rodando na porta 3000')
})