const category = require('express').Router();
const connection = require('../connection');

category.get('/', (req, res) => {
    const query = 'SELECT * FROM category ORDER BY category_id';
    connection.query(query, (err, result) => {
        if (err) {
            return res.json({
                err
            });
        } else {
            return res.json(result);
        }
    });
});

category.get('/:id', (req, res) => {
    const query =
        'SELECT * FROM product INNER JOIN category ON product.category = category.category_id WHERE category.category_id = ?';
    connection.query(query, [req.params.id], (err, result) => {
        if (err) {
            return res.json({ err });
        } else {
            return res.json({ result });
        }
    });
});

module.exports = category;
