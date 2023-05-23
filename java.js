fetch ('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then( produtos => {

        let str = '';
        let str2 = '';
        
        for(let i = 0; i < 6; i++){
            
            let titulo = produtos[i].title;
            let descricao = produtos[i].description;
            let preco = produtos[i].price;
            let imagem = produtos[i].image;
            let vendas = produtos[i].rating.count;
            let id = produtos[i].id;


            str += `<div class="produto">

            <div class="imagem">
                <a href = "detalhes.html?id=${id}"> <img src="${imagem}" width="300px" height="300px"> <a>
            </div>

            <div class="textao">
                
                <div class="titulo">

                    <h1>${titulo}</h1>

                </div>

                <div class="descricao">

                    <p>${descricao}</p>

                </div>

                <div class="extra">

                    <p><strong>Preço:</strong><span> R$${preco}</span></p>
                    <p><strong>Vendidos:</strong><span> ${vendas}</span></p>

                </div>

            </div>

        </div>`;

        }

        for(let i = 6; i < 9; i++){

            let ids = 0;
            let preco = produtos[i].price;
            let imagem = produtos[i].image;
            let estrela = produtos[i].rating.rate;
            let vendas = produtos[i].rating.count;
            let id = produtos[ids];

            str2+= `<div class="lados">
    
            <div class="produto_lado">

                <div class="foto">

                    <a href= "detalhes.html?id=${id}"><img src="${imagem}" width="100px" height="100px"> </a>

                </div>

                <div class="detalhes">

                    <p> <strong> Avaliação: </strong> <span id="rate">${estrela}</span></p>
                    <p> <strong> Vendidos: </strong> <span id="count">${vendas}</span></p>
                    <p> <strong> Preços: </strong> <span id="price">R$ ${preco}</span></p>

                </div>

            </div>

        </div>`
            
        ids++;
        }

        document.getElementById('tela').innerHTML = str;
        document.getElementById('api1').innerHTML = str2;
        
        
    })

