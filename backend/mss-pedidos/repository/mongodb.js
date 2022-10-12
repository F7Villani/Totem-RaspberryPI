import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { Repository } from './repository.js'

dotenv.config()

const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_CLUSTER,
    MONGODB_DATABASE
  } = process.env

const OrderModel = mongoose.model('order', mongoose.Schema({
    productsList: {type: Object, required:true},
    totalPrice: {type: Number, required:true},
    boolPaid: {type: Boolean, required:true},
    boolDelivered: {type: Boolean, required:true}
}))

export class MongoDB extends Repository{

    constructor() {
        super()
        mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`)
    }

    async addOrder(order){
        const orderModel = new OrderModel({
            productsList: order.productsList,
            totalPrice: order.totalPrice,
            boolPaid: order.boolPaid,
            boolDelivered: order.boolDelivered
        })
        
        orderModel.save().then(order => {
            console.log(`Ordem criada: ${order._id}`)
            return order._id
        })
    }

    async deliverOrder(orderId){
        const order = await OrderModel.findById(orderId)
        order.boolDelivered = true
        order.save().then(order => {
            //console.log(`Ordem entregue: ${order._id}`)
            return `Ordem entregue: ${order._id}`
        })
    }
}