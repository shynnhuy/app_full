const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './config.env' });

const app = express();

const port = process.env.PORT;

const User = require('./routes/User');
const Product = require('./routes/Product');
const Category = require('./routes/Category');

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use('/api/user', User);
app.use('/api/product', Product);
app.use('/api/category', Category);
