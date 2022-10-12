import { Repository } from "../repository/repository.js";

export class UCGetProducts{
    constructor(repository){
        if (!repository instanceof Repository){
            throw new Error(`Erro UCAddHelpOffer. Tipo errado para o parâmetro repository (${typeof(repository)})`)
        }
        this._repository = repository
    }

    async getProducts(productCategory){
        return await this._repository.getProducts(productCategory)
    }
}