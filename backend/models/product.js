export class Product{
    constructor(id, productName, imgUrl, unitPrice, type){
        this._id = id
        this._productName = productName
        this._imgUrl = imgUrl
        this._unitPrice = unitPrice
        this._type = type
    }

    get id(){
        return this._id
    }

    get productName(){
        return this._productName
    }

    get imgUrl(){
        return this._imgUrl
    }

    get unitPrice(){
        return this._unitPrice
    }

    get type(){
        return this._type
    }

    set id(id){
        this._id = id
    }

    set productName(productName){
        this._productName = productName
    }

    set imgUrl(imgUrl){
        this._imgUrl = imgUrl
    }

    set unitPrice(unitPrice){
        this._unitPrice = unitPrice
    }

    set type(type){
        this._type = type
    }
}