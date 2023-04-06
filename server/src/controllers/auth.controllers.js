const { newUser, userLogin, getProfile } = require("../services/consultas");
const jwt = require("jsonwebtoken");

const {config} = require('dotenv');
config()
const { getToken } = require("../helper/obtainToken");
const createUser = async (req, res) => {
  try {
    const user = req.body;
    await newUser(user);
    res.send('Usuario registrado con éxito');
  } catch (error) {
    res.status(500).send(error);
  }
};

const createLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    await userLogin(email, password);
    const token = jwt.sign({ email }, process.env.SECRET_KEY);
    res.send(token);
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error);
  }
};



const getUsuarios = async(req, res) => {
  try {
    const { email }= jwt.decode(getToken(req.header("Authorization")));
    console.log(email)
    const usuario = await getProfile(email);
    res.json(usuario)
  } catch (error) {
    console.log(error);
		res.status(error.code || 500).send(error);
  }
};
module.exports = {
  createUser,
  createLogin,
  getUsuarios,
};
