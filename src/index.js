const express = require("express");
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverconfig');
const apiRoutes = require('./routes/index');
const db = require('./models/index');

const setupAndStartServer = async () => {

    // create server object
    const app = express();
    app.use(bodyParser.json()); //middleware
    app.use(bodyParser.urlencoded({extended:true})); //middleware
    app.use('/api',apiRoutes);

    app.listen(PORT , async () => {
        console.log(`Server started at port ${PORT}`);
        // if(process.env.SYNC_DB)
        // {
        //     db.sequelize.sync({alter:true});
        // }
    })
}

setupAndStartServer();