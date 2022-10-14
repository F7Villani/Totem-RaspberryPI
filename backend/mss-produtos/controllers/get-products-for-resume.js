export class CGetProductsForResume{
    constructor(UCGetProductsForResume){
        this._UCGetProductsForResume = UCGetProductsForResume
    }

    async getProductsForResume(params){
        /*
            Estrutura do params:
            {
                productIdsList : ["XXX", "XXX", "XXX", "XXX"]
            }
        */
        return await this._UCGetProductsForResume.getProductsForResume(JSON.parse(params.productIdsList))
    }
}