import express from 'express'
import cors from 'cors'
import { UCAddOrder } from './usecases/add-order.js'
import { UCGetProductsForResume } from './usecases/get-products-for-resume.js'
import { UCGetProducts } from './usecases/get-products.js'
import { MongoDB } from './repository/mongodb.js'
import { CGetProducts } from './controllers/get-products.js'
import { CGetProductsForResume } from './controllers/get-products-for-resume.js'
import { CPostOrder } from './controllers/post-order.js'


const app = express()
app.use(express.json())
app.use(cors())


const repo = new MongoDB() //Define o tipo de repositório a ser usado

const uCAddOrder = new UCAddOrder(repo)
const cPostOrder = new CPostOrder(uCAddOrder)

const uCGetProductsForResume = new UCGetProductsForResume(repo)
const cGetProductsForResume = new CGetProductsForResume(uCGetProductsForResume)

const uCGetProducts = new UCGetProducts(repo)
const cGetProducts = new CGetProducts(uCGetProducts)

app.post('/order', async (req, res) => {
    res.sendStatus(201).send(await cPostOrder.postOrder(req.body))
})

app.get('/products', async (req, res) => {
    res.send(await cGetProducts.getProducts(req.body))
})

app.get('/products-resume', async (req, res) => {
    res.send(await cGetProductsForResume.getProductsForResume(req.body))
})

app.listen(8080, () => {
    console.log('MSS Porta 8080')
})