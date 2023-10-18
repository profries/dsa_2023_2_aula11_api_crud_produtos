let listaProdutos = [];
let idGerador = 1;

function listar() {
    return listaProdutos;
}

function geraId() {
    return idGerador++;
}

function inserir(produto) {
    produto.id = geraId();
    listaProdutos.push(produto);
}

function buscarPorId(id){
    return listaProdutos.find(function(produto) {
        return(produto.id === id);        
    })   
}


function atualizar(id, produto) {
    for(let ind in listaProdutos) {
        if(listaProdutos[ind].id === id) {
            listaProdutos[ind] = produto;
            listaProdutos[ind].id = id;
            return;
        }
    }
}

function deletar(id) {
    for(let ind in listaProdutos) {
        if(listaProdutos[ind].id === id) {
            return listaProdutos.splice(ind,1)[0];
        }
    }
}

function pesquisarPorCategoria(categoria) {
    return listaProdutos.filter(
        (produto) => {
            return produto.categoria === categoria;
        }
    );
}

function pesquisarPorLikeNome(nome) {
    return listaProdutos.filter(
        (produto) => {
            return produto.nome.toUpperCase().includes(nome.toUpperCase());
        }
    )
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar,
    pesquisarPorCategoria,
    pesquisarPorLikeNome
}