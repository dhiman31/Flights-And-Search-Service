const express = require("express");
const { PORT } = require('./config/serverconfig');

const setupAndStartServer = async () => {

    // create server object
    const app = express();
    app.listen(PORT , () => {
        console.log(`Server started at port ${PORT}`);
        console.log(process.env.PORT)
    })
}

setupAndStartServer();