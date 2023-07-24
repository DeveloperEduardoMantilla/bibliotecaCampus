import express from "express";
import dotenv from "dotenv";

import autor from "./routers/autor.js";
import categoria from "./routers/categoria.js";
import editorial from "./routers/editorial.js";
import estadoLibro from "./routers/estadoLibro.js";

dotenv.config();
let appExpress = express();
appExpress.use(express.json());

appExpress.use("/autor", autor);
appExpress.use("/categoria", categoria);
appExpress.use("/editorial", editorial);
appExpress.use("/estadoLibro",estadoLibro);

let myconfig = JSON.parse(process.env.MY_SERVER);
appExpress.listen(myconfig, ()=>{
    console.log(`http://${myconfig.hostname}:${myconfig.port}`);
})


