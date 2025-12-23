const express = require("express");
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverconfig');

const setupAndStartServer = async () => {

    // create server object
    const app = express();
    app.use(bodyParser.json()); //middleware
    app.use(bodyParser.urlencoded({extended:true})); //middleware

    app.listen(PORT , () => {
        console.log(`Server started at port ${PORT}`);
        console.log(process.env.PORT)
    })
}

setupAndStartServer();