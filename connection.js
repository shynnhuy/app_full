const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'appfull'
});

connection.connect(err => {
    if (!err) {
        console.log('MySQL successfully connected');
    } else {
        console.error(err);
    }
});

module.exports = connection;
