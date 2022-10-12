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

const ProductModel = mongoose.model('product', mongoose.Schema({
    productName: {type: String, required:true},
    imgUrl: {type: String, required:true},
    unitPrice: {type: Number, required:true},
    type: {type: String, required:true}
}))

export class MongoDB extends Repository{

    constructor() {
        super()
        mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`)
    }

    async getProducts(productCategory){
        const ret = []
        for await (const doc of ProductModel.find({type: productCategory})){
            ret.push({id: doc._id.toString(), productName: doc.productName, imgUrl: doc.imgUrl,
                      unitPrice: doc.unitPrice, type: doc.type})
        }
        return ret
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