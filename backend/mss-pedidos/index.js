import express from 'express'
import cors from 'cors'
import { UCAddOrder } from './usecases/add-order.js'
import { MongoDB } from './repository/mongodb.js'
import { CPostOrder } from './controllers/post-order.js'


const app = express()
app.use(express.json())
app.use(cors())


const repo = new MongoDB() //Define o tipo de repositório a ser usado

const uCAddOrder = new UCAddOrder(repo)
const cPostOrder = new CPostOrder(uCAddOrder)

app.post('/order', async (req, res) => {
    res.sendStatus(201).send(await cPostOrder.postOrder(req.body))
})

app.listen(8081, () => {
    console.log('MSS Pedidos: Porta 8081')
})