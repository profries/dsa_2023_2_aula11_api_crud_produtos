const produtoRepository = require('../repository/produto_repository')

function listar() {
    return produtoRepository.listar();
}

function inserir(produto) {
    if(produto && produto.nome && produto.preco) {// produto != undefined
        produtoRepository.inserir(produto);
    }
    else {
        throw {id:400, message:"Produto nao possui nome ou preco"};
    }
}

function buscarPorId(id) {
    const produto = produtoRepository.buscarPorId(id);
    if(produto) {
        return produto;
    }
    else {
        throw {id:404, message:"Produto nao encontrado"};
    }
}

function atualizar(id, produtoAtualizado) {
    const produto = produtoRepository.buscarPorId(id);
    if(!produto) {
        throw {id: 404, message: "Produto nao encontrado"};
    }
    
    if(produtoAtualizado && produtoAtualizado.nome && produtoAtualizado.preco){
        produtoRepository.atualizar(id, produtoAtualizado);
    }
    else {
        throw {id: 400, message: "Produto nao possui um dos campos obrigatorios"};
    }
}

function deletar(id) {
    const produtoDeletado = produtoRepository.deletar(id);
    if(produtoDeletado){
        return produtoDeletado;
    }
    else {
        throw {id: 404, message: "Produto nao encontrado"};
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}