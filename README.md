# Totem 

**Sobre o Projeto:**
Um totem de fast food que permite o usuário montar seu pedido e pagá-lo. Ao realizar o pagamento o totem também emite uma notificação para a cozinha enviando detalhes os detalhes do pedido. Tudo numa interface bonita e intuitiva para o usuário.
#
**Tecnologias Utilizadas:**
- node.js
#
**Realizadores:**
- Felipe Freitas Villani &ensp;&ensp;&ensp;&nbsp; 19.01370-0
- Renan Scheidt Reschke  &ensp;19.02009-0
#
**.env necessário para o back-end:**
```env
MONGODB_USER=""
MONGODB_PASSWORD=""
MONGODB_CLUSTER=""
MONGODB_DATABASE=""
```
#
## Informações do backend
#### Microsserviços

* Barramento de eventos (porta 8080)
    * Onde serão feitas as requisições 
* Produtos (porta 8082)
    * Fornece rotas para buscar informações de produtos, como nome, preço e categoria
* Pedidos (porta 8081)
    * Fornece uma rota para criação e consulta de pedidos no banco de dados

#### Rotas
##### Acesso ao Microsserviço de Produtos
**GET localhost:8080/products?category={nome_categoria}**
Retorna uma lista de produtos da categoria {nome_categoria}
Exemplo de retorno para localhost:8080/products?category=Combo:
```json
[
  {
    "id": "632a23ea91f72ff64b5128cb",
    "productName": "Combo Fritas e Hamburguer com Bacon",
    "imgUrl": "",
    "unitPrice": 40.99,
    "type": "Combo"
  }
]
```

**GET localhost:8080/products-resume**
Retorna uma lista com dados de produtos baseado em um array de IDs passados.
Ao fazer a requisição com axios, é necessário passar o objeto `params` contendo `productIdsList`, uma lista de IDs de produtos.
Exemplo de `params`:
```json
{
    params: {
                productIdsList: ["632a23ea91f72ff64b5128cb", "632a201891f72ff64b5128c7"]
            }
}
```
Retorno esperado com o `params` passado acima:
```json
[
  {
    "id": "632a23ea91f72ff64b5128cb",
    "productName": "Combo Fritas e Hamburguer com Bacon",
    "imgUrl": "",
    "unitPrice": 40.99,
    "type": "Combo"
  },
  {
    "id": "632a201891f72ff64b5128c7",
    "productName": "Hamburguer com Salada",
    "imgUrl": "",
    "unitPrice": 30.1,
    "type": "Lanche"
  }
]
```

##### Acesso ao Microsserviço Pedidos
**POST localhost:8080/order**
Cria um pedido no MongoDB
Body que deve ser passado:
```json
{
    "productIdsList" : {"XXX": YY, "XXX": ZZ, "XXX": AA, "XXX": C}, YY/ZZ/AA/C representam quantidades (int), "XXX" representa ID do produto
    "totalPrice" : YY.YY,
    "boolPaid" : true/false
    "boolDelivered" : true/false
}
```
Retorno: ID da ordem criada

**PUT localhost:8080/order**
Atualiza o status de um pedido para entregue
Body que deve ser passado:
```json
{
    "orderId": "XXXXXXX"
}
```
Retorno: "Ordem {orderID} entregue"

### Como iniciar os microsserviços
OBS: Antes de iniciar, é necessário criar o .env com a estrutura demonstrada anteriormente no README.
Cada microsserviço possui seu Dockerfile na raiz do projeto. Para criar as imagens, partindo da pasta `backend`, basta seguir o script a seguir:
```
docker build -t {nome-desejado-barramento} ./barramento
docker build -t {nome-desejado-mss-pedidos} ./mss-pedidos
docker build -t {nome-desejado-mss-produtos} ./mss-produtos
```
{nome-desejado-mss-pedidos} e {nome-desejado-mss-produtos} devem ser substituidos pelo nome desejado para as imagens.

É possível verificar as imagens criadas usando `docker image ls`

Com as imagens criadas, agora é possível subir os contêineres com os comandos abaixo:
`docker run -p 8081:8081 {nome-desejado-mss-produtos}`
`docker run -p 8082:8082 {nome-desejado-mss-pedidos}`
`docker run -p 8080:8080 {nome-desejado-barramento}`

### Como criar contêiner para o frontend
O frontend possui um Dockerfile localizado na pasta `frontend`. Para realizar o build basta usar o comando:
`docker build -t {nome-conteiner-frontend} .`

Com a imagem criada, basta executar o contêiner com o comando
`docker run -p 3000:3000 {nome-conteiner-frontend}`

### Usando o kubernetes para rodar os contêineres
A partir da raiz do projeto:
`cd kubernetes`
`kubectl apply -f pods.yaml`
`kubectl apply -f deployment.yaml`