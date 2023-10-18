const express = require('express')
const produtoRouter = require('./router/produto_router');

const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.use('/api/produtos', produtoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})