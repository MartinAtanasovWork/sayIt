let express = require("express");
const { expressConfig } = require("./config/express");

const { databaseConfig } = require("./config/database");
const { router } = require("./config/routes");

async function start() {
    let app = express();

    await databaseConfig();
    expressConfig(app);
    app.use(router);
    
    app.listen(3000, async () => {
        console.log("Started on port 3000");                   
    })
}

start();
