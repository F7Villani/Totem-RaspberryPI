import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()
app.use(express.json())
app.use(cors())


app.get('/products', async (req, res) => {
    let consulta = await axios.get('http://localhost:8081/products?category=' + req.query.category).catch((err) => console.log('Erro ao fazer GET na rota http://localhost:8081/products?category=' + req.query.category + ': ' + err))
    res.send(consulta.data)
})

app.get('/products-resume', async (req, res) => {
    let consulta = await axios.get('http://localhost:8081/products-resume', {params: req.params}).catch((err) => console.log('Erro ao fazer GET na rota http://localhost:8081/products-resume: ' + err))
    res.send(consulta.data)
})

app.post('/order', async (req, res) => {
    let consulta = await axios.post('http://localhost:8082/order', req.body).catch((err) => console.log('Erro ao fazer POST na rota http://localhost:8082/order: ' + err))
    res.send(consulta.data)
})

app.put('/order', async (req, res) => {
    let consulta = await axios.put('http://localhost:8082/order', req.body).catch((err) => console.log('Erro ao fazer PUT na rota http://localhost:8082/order: ' + err))
    res.send(consulta.data)
})

app.listen(8080, () => {
    console.log('Barramento: Porta 8080')
})