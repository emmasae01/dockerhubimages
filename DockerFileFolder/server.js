const express = require('express');
const dotenv =  require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const responseTime = require('response-time');
const usuariosRouter = require('./endpoints/usuarios.js');

const authRouter = require('./endpoints/auth.js');
const surveysRouter = require('./endpoints/encuestas.js')
const encuestadosRouter = require('./endpoints/encuestados.js')

const MONGODB_URI = process.env.MONGODB_URI;


mongoose.connect(MONGODB_URI).then(() => console.log('Base de datos conectada')).catch((error)=> console.log(error));

//const routerApi = require('./endpoints/index.js');
const router = express.Router();


dotenv.config();
const app = express();

const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


    app.use('/api', usuariosRouter);
    //router.use('/usuarios', usuariosRouter);


    app.use('/auth',authRouter);
    app.use('/surveys', surveysRouter);
    app.use('/respondents', encuestadosRouter);



const serv = app.listen(port, () => console.log(`El servidor se inicio en el puerto ${port}`));

module.exports = {app, serv};



