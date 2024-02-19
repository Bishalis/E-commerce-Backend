const express = require('express');
const server = express();
const mongoose = require('mongoose');
const productsRouter = require('./routes/Products')
const categoriesRouter = require('./routes/Brands')
const brandsRouter = require('./routes/Categories')
const cors = require('cors');

server.use(cors({
    exposedHeaders:['X-Total-Count']
}))
server.use(express.json());
server.use('/products', productsRouter.router);
server.use('/categories', categoriesRouter.router);
server.use('/brands', brandsRouter.router);
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://shahibishal786526:ecommerce786526@cluster0.lrqvfps.mongodb.net/?retryWrites=true&w=majority');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
server.get('/', (req, res) => {
    res.json({ status: 'success' })
})



server.listen(8080, () => {
    console.log('server started at ' + 8080)
})

