import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { Repository } from './repository.js'
import { Order } from '../models/order.js'
import { Product } from '../models/product.js'

dotenv.config()

const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_CLUSTER,
    MONGODB_DATABASE
  } = process.env

const ProductModel = mongoose.model('product', mongoose.Schema({
    productName: {type: String, required:true},
    imgUrl: {type: String, required:true},
    unitPrice: {type: Number, required:true},
    type: {type: String, required:true}
}))

const OrderModel = mongoose.model('order', mongoose.Schema({
    productsList: {type: Object, required:true},
    totalPrice: {type: Number, required:true},
    boolPaid: {type: Boolean, required:true}
}))

export class MongoDB extends Repository{

    constructor() {
        super()
        mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`)
    }

    async getProducts(productCategory){
        const ret = []
        console.log(`CATEGORIA: ${productCategory}`)
        for await (const doc of ProductModel.find({type: productCategory})){
            ret.push({id: doc._id.toString(), productName: doc.productName, imgUrl: doc.imgUrl,
                      unitPrice: doc.unitPrice, type: doc.type})
        }
        return ret
    }

    async addOrder(order){
        const orderModel = new OrderModel({
            productsList: order.productsList,
            totalPrice: order.totalPrice,
            boolPaid: order.boolPaid
        })
        
        orderModel.save().then(order => {
            console.log(`Ordem criada: ${order._id}`)
            return order._id
        })
    }

    async getProductsForResume(productIdsList){
        const ret = []

        for await (const doc of ProductModel.find({'_id': { $in: productIdsList}})){
            ret.push({id: doc._id.toString(), productName: doc.productName, imgUrl: doc.imgUrl,
                unitPrice: doc.unitPrice, type: doc.type})
        }
        return ret
    }
}