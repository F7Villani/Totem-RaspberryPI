import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()
app.use(express.json())
app.use(cors())


app.get('/products', async (req, res) => {
    await axios.get('http://localhost:8081/products?category=' + req.query.category).then((response) => {res.status(200).send(response.data)}).catch((err) => {
        console.log('Erro ao fazer GET na rota http://localhost:8081/products?category=' + req.query.category + ': ' + err)

        res.status(500).send({message: 'Erro ao fazer GET na rota http://localhost:8081/products?category=' + req.query.category + ': ' + err})
    })
})

app.get('/products-resume', async (req, res) => {
    await axios.get('http://localhost:8081/products-resume', {params: req.params}).then((response) => res.status(200).send(response.data)).catch((err) => {
        console.log('Erro ao fazer GET na rota http://localhost:8081/products-resume: ' + err)

        res.status(500).send({message: 'Erro ao fazer GET na rota http://localhost:8081/products-resume: ' + err})
    })
})

app.post('/order', async (req, res) => {
    await axios.post('http://localhost:8082/order', req.body).then((response) => res.status(201).send(response.data)).catch((err) => {
        console.log('Erro ao fazer POST na rota http://localhost:8082/order: ' + err)

        res.status(500).send({message: 'Erro ao fazer POST na rota http://localhost:8082/order: ' + err})
    })
    await axios.get('http://localhost:1880/ubidots').then((res) => console.log('Ubidots atualizado')).catch((err) => console.log('Erro ao fazer GET na rota http://localhost:1880/ubidots: ' + err))
})

app.put('/order', async (req, res) => {
    await axios.put('http://localhost:8082/order', req.body).then((response) => res.status(201).send(response.data)).catch((err) => {
        console.log('Erro ao fazer PUT na rota http://localhost:8082/order: ' + err)

        res.status(500).send({message: 'Erro ao fazer PUT na rota http://localhost:8082/order: ' + err})
    })
})

app.listen(8080, () => {
    console.log('Barramento: Porta 8080')
})