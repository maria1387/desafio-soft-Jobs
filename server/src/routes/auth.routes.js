const {Router} = require('express');


const {createLogin,  createUser, getUsuarios, } = require('../controllers/auth.controllers');
const { reportQuery } = require('../middlewares/report');
const { verifyToken } = require('../middlewares/verifyToken');
const { checkCredentials } = require('../middlewares/checkCredentials');


const router = Router();
//crear datos

router.post('/login', reportQuery, checkCredentials, createLogin)

router.post('/usuarios',reportQuery,  createUser)
//obtener datos
router.get('/usuarios', reportQuery, verifyToken, getUsuarios)

module.exports = router;