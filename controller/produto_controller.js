const produtoService = require('../service/produto_service')


function listar(req, res) {
    const listaProdutos = produtoService.listar();
    res.json(listaProdutos);
}

function inserir(req, res) {
    let produto = req.body;
    try {
      produtoService.inserir(produto);
      res.status(201).json({msg:'Inserido com sucesso!'})
    }
    catch(err) {
      //id-> 400 / msg -> msg de erro
      res.status(err.id).json({msg: err.message});
    }
}

function buscarPorId(req, res) {
    const id = +req.params.id;
    try {
      const prod = produtoService.buscarPorId(id);
      res.json(prod);
    }
    catch(err) {
      //id-> 404 / msg -> msg de erro
      res.status(err.id).json({msg: err.message});
    }
}

function atualizar (req, res) {
    const id = +req.params.id;
    let produto = req.body;
  
    try{ 
      produtoService.atualizar(id, produto);
      res.json({msg:'Produto atualizado com sucesso'});
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }
}

function deletar(req, res) {
    const id = +req.params.id;
    try{ 
      const produtoDeletado = produtoService.deletar(id);
      res.json(produtoDeletado);
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }   
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}