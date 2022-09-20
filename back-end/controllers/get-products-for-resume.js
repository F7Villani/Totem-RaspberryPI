export class CGetProductsForResume{
    constructor(UCGetProductsForResume){
        this._UCGetProductsForResume = UCGetProductsForResume
    }

    async getProductsForResume(body){
        /*
            Estrutura do body:
            {
                "productIdsList" : [XXX, XXXX, XXXX, XX]
            }
        */
        return await this._UCGetProductsForResume.getProductsForResume(body.productIdsList)
    }
}