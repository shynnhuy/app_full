const router = require('express').Router();
const connection = require('../connection');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    const query = 'SELECT * FROM account ORDER BY user_id';
    connection.query(query, (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(result);
        }
    });
});

router.get('/:id', (req, res) => {
    const query = 'SELECT * FROM account WHERE user_id = ?';
    connection.query(query, [req.params.id], (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(result);
        }
    });
});

router.post('/login', (req, res) => {
    const query =
        'SELECT * FROM account WHERE account.username = ? AND account.password = ?';
    connection.query(
        query,
        [req.body.username, req.body.password],
        (err, result) => {
            if (result.length > 0) {
                const token = jwt.sign(
                    {
                        detail: 'helo'
                    },
                    process.env.SECRET_JWT
                );
                res.header('auth-token', token).send({
                    access_token: token,
                    result: result[0]
                });
            } else {
                return res.json(err);
            }
        }
    );
});

router.post('/register', (req, res) => {
    const query =
        'INSERT INTO account (username, email, fullname, password) VALUES (?,?,?,?)';
    const { username, email, fullname, password } = req.body;
    connection.query(
        query,
        [username, email, fullname, password],
        (err, result) => {
            if (!err) {
                return res.status(200).json({
                    result
                });
            } else {
                return res.status(403).json({ err });
            }
        }
    );
});

module.exports = router;
