# App SPA de Petiscos de Pets

## Contexto

Criar uma aplicação de SPA, com stack HTML, CSS, JS puro, sem pacotes ou dependência para hospedar no GitHub Page.
 
 Aplicação será um cardápio, estilo "lanchonete", porém, para pets: Cachorros e Gatos.
# Recursos do App
1. Carregar os dados do cárdapio a partir de uma estrutura Json contendo todas as informações do produto, outros dados triviais e um destaque para eventuais produtos em promoção, ou kits  do tipo "pague 2 e leve 3".
2. O aplicativo SPA irá carregar já na primeira tela a lista de produtos. Não  exige cadastro até o checkout.
3. O SPA deverá usar a "localstorage" para armazenar os itens no carrinho
4. Ao finalizar a compra no carrinho o usuário então deverá se cadastrar (nome, whatsapp, email e endereço) e durante o cadastro adicionar a localização(geolocalização). Caso o usuário não permita a captura de sua localização encerre o cadastro e não siga.
5. Após p cadastro, pedir as credenciais do dispositivo(Credentials Container) como uma camada extra de segurança e prova de vida.
6. Após validar as credenciais, simular um gateway de pagamento genérico.

## Oque o aplicativo não deve fazer:
1. processar o pagamento. será apenas uma simulação
2. Cadastrar produtos. Iremos carregar os dados de um arquivo Json ficticio, gerado por IA.
3. O aplicativo não controla delivery.

# Json Exemplo
```json
{
  "loja": {
    "nome": "Petiscaria do Bairro",
    "horario_funcionamento": "Ter a Dom, 10h às 22h",
    "whatsapp_pedido": "5511999999999"
  },
  "categorias": ["cachorro", "gato"],
  "produtos": [
    {
      "id": "cachorro-biscoito-osso",
      "nome": "Biscoito de Ossinho",
      "categoria": "cachorro",
      "descricao": "Biscoito crocante sabor carne, embalagem com 500g.",
      "preco": 18.90,
      "imagem": "assets/img/biscoito-osso.png",
      "promocao": false,
      "estoque": true
    },
    {
      "id": "cachorro-kit-pague2-leve3",
      "nome": "Kit Mordedor Natural — Pague 2, Leve 3",
      "categoria": "cachorro",
      "descricao": "Kit com 3 mordedores naturais de couro. O terceiro sai grátis!",
      "preco": 39.80,
      "imagem": "assets/img/kit-mordedor.png",
      "promocao": true,
      "rotulo_promocao": "Pague 2, Leve 3",
      "estoque": true
    },
    {
      "id": "gato-petisco-salmao",
      "nome": "Petisco de Salmão",
      "categoria": "gato",
      "descricao": "Snack de salmão desidratado, 100% natural, 40g.",
      "preco": 14.50,
      "imagem": "assets/img/petisco-salmao.png",
      "promocao": false,
      "estoque": true
    },
    {
      "id": "gato-kit-pague2-leve3",
      "nome": "Kit Erva de Gato — Pague 2, Leve 3",
      "categoria": "gato",
      "descricao": "Kit com 3 unidades de erva de gato premium.",
      "preco": 29.70,
      "imagem": "assets/img/kit-ervagato.png",
      "promocao": true,
      "rotulo_promocao": "Pague 2, Leve 3",
      "estoque": true
    },
    {
      "id": "cachorro-promo-frango",
      "nome": "Petisco de Frango Desidratado",
      "categoria": "cachorro",
      "descricao": "Filé de frango desidratado, 100g.",
      "preco": 22.00,
      "preco_original": 27.50,
      "imagem": "assets/img/frango-desidratado.png",
      "promocao": true,
      "rotulo_promocao": "20% OFF",
      "estoque": true
    },
    {
      "id": "gato-racao-umida",
      "nome": "Patê de Atum",
      "categoria": "gato",
      "descricao": "Sachê de patê sabor atum, 85g.",
      "preco": 6.90,
      "imagem": "assets/img/pate-atum.png",
      "promocao": false,
      "estoque": false
    }
  ]
}
```
**Como o carrinho usa isso (só para confirmar a simplicidade):**

JSON

```json
{
  "itens": [
    { "id": "gato-kit-pague2-leve3", "qtd": 1 },
    { "id": "gato-petisco-salmao", "qtd": 2 }
  ]
}
```

# UI / UX
1. Utilize a paleta de cores #B85809 #E6DC00 #000000 #000DFF
2. Utilize Google Fonts: `Poppins` para títulos e `Open Sans` para texto corrido. E aplique versões condensadas das fontes quando conveniente.
3. **Não use emojis**. Utilize Google Icons.
4. Interface minimalista, fundo branco
5. Adicione pequenas animações em botões e transições de telas.
