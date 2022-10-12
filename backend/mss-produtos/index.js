import express from 'express'
import cors from 'cors'
import { UCGetProductsForResume } from './usecases/get-products-for-resume.js'
import { UCGetProducts } from './usecases/get-products.js'
import { MongoDB } from './repository/mongodb.js'
import { CGetProducts } from './controllers/get-products.js'
import { CGetProductsForResume } from './controllers/get-products-for-resume.js'


const app = express()
app.use(express.json())
app.use(cors())


const repo = new MongoDB() //Define o tipo de repositório a ser usado

const uCGetProductsForResume = new UCGetProductsForResume(repo)
const cGetProductsForResume = new CGetProductsForResume(uCGetProductsForResume)

const uCGetProducts = new UCGetProducts(repo)
const cGetProducts = new CGetProducts(uCGetProducts)

app.get('/products', async (req, res) => {
    res.send(await cGetProducts.getProducts(req.query))
})

app.get('/products-resume', async (req, res) => {
    res.send(await cGetProductsForResume.getProductsForResume(req.params))
})

app.listen(8080, () => {
    console.log('MSS Produtos: Porta 8080')
})