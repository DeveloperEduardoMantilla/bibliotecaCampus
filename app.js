import express from "express";
import dotenv from "dotenv";

import autor from "./routers/autor.js";

dotenv.config();
let appExpress = express();
appExpress.use(express.json());

appExpress.use("/autor", autor);

let myconfig = JSON.parse(process.env.MY_SERVER);
appExpress.listen(myconfig, ()=>{
    console.log(`http://${myconfig.hostname}:${myconfig.port}`);
})

