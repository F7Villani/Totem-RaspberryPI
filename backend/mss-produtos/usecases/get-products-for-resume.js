import { Repository } from "../repository/repository.js"

export class UCGetProductsForResume{
    constructor(repository){
        if (!repository instanceof Repository){
            throw new Error(`Erro UCConsultHelpOffer. Tipo errado para o parâmetro repository (${typeof(repository)})`)
        }
        this._repository = repository
    }

    async getProductsForResume(productIdsList){
        return await this._repository.getProductsForResume(productIdsList)
    }
}