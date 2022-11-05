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
    res.send(await cGetProducts.getProducts(req.query).catch((err) => {
        console.log('Erro ao fazer GET na rota http://localhost:8081/products?category=' + req.query.category + ': ' + err.stack)
        return {"message": "Erro ao fazer GET na rota http://localhost:8081/products?category=" + req.query.category + ": " + err.stack} //Retorna um JSON com a mensagem de erro
    }))
})

app.get('/products-resume', async (req, res) => {
    res.send(await cGetProductsForResume.getProductsForResume(req.query).catch((err) => {
        console.log('Erro ao fazer GET na rota http://localhost:8081/products-resume' + req.query.category + ': ' + err.stack)
        return {"message": "Erro ao fazer GET na rota http://localhost:8081/products-resume" + req.query.category + ": " + err.stack} //Retorna um JSON com a mensagem de erro
    }))
})

app.listen(8081, () => {
    console.log('MSS Produtos: Porta 8081')
})