let carrinho = [];

function adicionarProduto(){
    let produto = document.getElementById("produto").value;

    // Verifica se o produto não está vazio
    if (produto !== "") {
        carrinho.push(produto);
        document.getElementById("produto").value = "";
        // Limpa o campo de texto
        exibirCarrinho();// Atualiza a lista do carrinho
    } else {
        alert("Por favor, insira um produto.");
    }
}

function removerProduto(index) {
    carrinho.splice(index, 1); // Remover produto do array
    exibirCarrinho(); //atualiza a lista do carrinho
}

function exibirCarrinho() {
    let lista = document.getElementById("listaCarrinho");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    carrinho.forEach(function(produto, index) {
        lista.innerHTML += `<li>${produto} <button 
        onclick="removerProduto(${index})">Remover</button></li>`;
    });
}