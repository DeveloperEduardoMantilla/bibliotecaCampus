import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";


dotenv.config();
let storageAutor = Router();

let con = undefined;
storageAutor.use((req, res, next)=>{
    let conex= JSON.parse(process.env.MY_DB);
    con = mysql.createPool(conex);
    next();
})

storageAutor.get("/", (req, res)=>{
    
    con.query('select a.nombre as autor, a.nacionalidad from autor as a;', (err,data, fil)=>{
        if(err){
            res.status(500).send("Error en la solicitud"+err);
        }else{
            if(Object.entries(data).length === 0){
                res.json({"Mensaje":"No se encontro registro en la base de datos"});
            }else{
                res.send(data);
            }
        }
    })

})
storageAutor.get("/espanola", (req, res)=>{
    
    con.query('select * from autor where autor.nacionalidad like "%Española%"', (err,data, fil)=>{
        if(err){
            res.status(500).send("Error en la solicitud"+err);
        }else{
            if(Object.entries(data).length === 0){
                res.json({"Mensaje":"No se encontro registro en la base de datos"});
            }else{
                res.send(data);
            }
        }
    })

})
export default storageAutor;