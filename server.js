const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './config.env' });

const app = express();

const port = process.env.PORT;

app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
