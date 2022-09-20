export class CGetProducts{
    constructor(UCGetProducts){
        this._UCGetProducts= UCGetProducts
    }

    async postHelpOffer(body){
        /*
            Estrutura do body:
            {
                "type" : "XXXXX"
            }
        */
        return await this._UCGetProducts.getProducts(body.type)
    }
}