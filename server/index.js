const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const authRouter = require('./src/routes/auth.routes')
const app = express();
const pool = require('../server/src/database/db')


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(authRouter)




app.listen(3000, () => {
    console.log(`Server is running on the port : 3000`);
  });