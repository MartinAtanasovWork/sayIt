let express = require("express");
const { expressConfig } = require("./config/express");

const { databaseConfig } = require("./config/database");
const { router } = require("./config/routes");

async function start(){    
    let app = express();

    await databaseConfig();
    expressConfig(app);
    app.use(router);
      

    app.listen(3000,()=>{
        console.log("started");
    })
} 

start();
