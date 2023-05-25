const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {config} = require('dotenv')
config()
const authRouter = require('./src/routes/auth.routes')
const app = express();
const pool = require('../server/src/database/db')

const PORT = process.env.PORT || 3000

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(authRouter)




app.listen(PORT, () => {
    console.log(`Server is running on the port : `  + PORT);
  });