const { validationResult } = require("express-validator");
const Book = require('../../models/Book')();
const Catalog = require('../../models/Catalog')();
const Sequelize = require('sequelize');


module.exports.books = async (req, res, next) => {
    Book.findAll({
        include: [{model: Catalog}],
    }).then(arrBook => res.json(arrBook))
}

module.exports.postBooks = (req, res, next) => {
    const {catalog_id, book_name, author, price, description, quantity} = req.body;
    const book_image = req.file.path.split("\\").join('/');
    console.log(book_image);
    Book.create({
        catalog_id: catalog_id,
        book_name: book_name,
        author: author,
        price: price,
        description: description, 
        quantity: quantity,
        image: book_image
    })
    .then(book => res.status(201).send(book))
    .catch(error => res.status(400).send(error));

}