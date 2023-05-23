fetch ('https://fakestoreapi.com/products')
    .then (res => res.json())
    .then(produtos => {

        let str = '';
        let link = new URLSearchParams(window.location.search);
        let ids = parseInt(link.get('id'));
        


        for (let i = 0; i < produtos.length; i++){

            if ((ids - 1) === i){

                let preco = produtos[i].price;
                let imagem = produtos[i].image;
                let estrela = produtos[i].rating.rate;
                let vendas = produtos[i].rating.count;
                let titulo = produtos[i].title;
                let categoria = produtos[i].category;
                let descricao = produtos[i].description;
                
                str+= `<div class="meiuca">


                <div class="falaoqueeh">
    
                    <h1> <strong>${titulo}</strong> </h1>
    
                </div>
    
                <div class="fotinha">
    
                    <img src="${imagem}" width="500px" height="500px">
    
                </div>
    
                <div class="falamais">
    
                    <div class="dois">
                        
                        <h2> ${categoria} </h2>
                        <p> ${descricao} </p>
    
                    </div>
    
                    <div class="maistreis">
    
                        <p> <strong>Preço: </strong> <span> R$${preco}</span></p>
                        <p> <strong>Avaliação:</strong> <span> ${estrela}/5 </span></p>
                        <p> <strong>Comprados:</strong><span> ${vendas} </span></p>
    
    
                    </div>
    
                    <div class="compra">

                        <h3> <a href="#"> Comprar </a> </h3>

                    </div>
                </div>
    
            </div>`

            }

            
        }

        document.getElementById('api').innerHTML = str;


    })
