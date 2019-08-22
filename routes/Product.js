const router = require('express').Router();
const jwt = require('jsonwebtoken');
const connection = require('../connection');

router.get('/', (req, res) => {
    const query = 'SELECT * FROM product ORDER BY product.product_id';
    connection.query(query, (err, result) => {
        if (!err) {
            return res.json({ result });
        } else {
            return res.json({ err });
        }
    });
});

module.exports = router;
