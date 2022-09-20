export class Pedido{
    constructor(id, productsList, totalPrice, boolPaid){
        this._id = id
        this._productsList = productsList
        this._totalPrice = totalPrice
        this._boolPaid= boolPaid
    }

    get id(){
        return this._id
    }

    get productsList(){
        return this._productsList
    }

    get totalPrice(){
        return this._totalPrice
    }

    get boolPaid(){
        return this._boolPaid
    }

    set id(id){
        this._id = id
    }

    set productsList(productsList){
        this._productsList = productsList
    }

    set totalPrice(totalPrice){
        this._totalPrice = totalPrice
    }

    set boolPaid(boolPaid){
        this._boolPaid = boolPaid
    }
}