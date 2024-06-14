var carrinho = [];

        function adicionarAoCarrinho() {
            var pecaSelecionada = document.getElementById('peca').value;
            carrinho.push(pecaSelecionada);

            atualizarCarrinho();
        }

        function atualizarCarrinho() {
            var carrinhoList = document.getElementById('carrinhoList');
            carrinhoList.innerHTML = '';

            carrinho.forEach(function(peca) {
                var li = document.createElement('li');
                li.textContent = peca;
                carrinhoList.appendChild(li);
            });
        }