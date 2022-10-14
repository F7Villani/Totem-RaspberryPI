import express from 'express'
import cors from 'cors'
import { UCAddOrder } from './usecases/add-order.js'
import { UCDeliverOrder } from './usecases/deliver-order.js'
import { MongoDB } from './repository/mongodb.js'
import { CPostOrder } from './controllers/post-order.js'
import { CPutOrder } from './controllers/put-order.js'

const app = express()
app.use(express.json())
app.use(cors())


const repo = new MongoDB() //Define o tipo de repositório a ser usado

const uCAddOrder = new UCAddOrder(repo)
const cPostOrder = new CPostOrder(uCAddOrder)

const uCDeliverOrder = new UCDeliverOrder(repo)
const cPutOrder = new CPutOrder(uCDeliverOrder)

app.post('/order', async (req, res) => {
    res.sendStatus(201).send(await cPostOrder.postOrder(req.body))
})

app.put('/order', async (req, res) => {
    res.sendStatus(200).send(await cPutOrder.putOrder(req.body))
})

app.listen(8082, () => {
    console.log('MSS Pedidos: Porta 8082')
})