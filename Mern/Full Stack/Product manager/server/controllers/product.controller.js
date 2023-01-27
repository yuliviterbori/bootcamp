const { Product } = require('../models/product.model');

module.exports.createProduct = (req,res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
    .then(pro => res.json(pro))
    .catch(err => res.json(err))
}