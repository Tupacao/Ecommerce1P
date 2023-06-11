fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(produtos => {
    
    let tipo_peca = '';

    const filtro = document.querySelector('#filtro');
    filtro.addEventListener('change', () => {
      tipo_peca = filtro.value;
      filtrarProdutos(produtos, tipo_peca);
    });

    function filtrarProdutos(produtos, categoria) {
      
      let str = '';

      for (let i = 0; i < produtos.length; i++) {

        const produto = produtos[i];

        if (produto.category === categoria) {

          const titulo = produto.title;
          const descricao = produto.description;
          const preco = produto.price;
          const imagem = produto.image;
          const vendas = produto.rating.count;
          const id = produto.id;

          str += `<div class="produto">
            <div class="imagem">
              <a href="detalhes.html?id=${id}"><img src="${imagem}" width="300px" height="300px"></a>
            </div>
            <div class="textao">
              <div class="titulo">
                <h1>${titulo}</h1>
              </div>
              <div class="descricao">
                <p>${descricao}</p>
              </div>
              <div class="extra">
                <p>Preço: <span>R$ ${preco}</span></p>
                <p>Vendidos: <span>${vendas}</span></p>
              </div>
            </div>
          </div>`
          
        }
      }

      document.getElementById('tela').innerHTML = str;
    }
   })
    
