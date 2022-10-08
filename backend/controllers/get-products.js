export class CGetProducts{
    constructor(UCGetProducts){
        this._UCGetProducts= UCGetProducts
    }

    async getProducts(query){
        /*
            query param necessario:
            {
                "category" : "XXXXX"
            }
        */
        return await this._UCGetProducts.getProducts(query.category)
    }
}