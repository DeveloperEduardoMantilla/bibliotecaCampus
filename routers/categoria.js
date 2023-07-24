import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";
import validateCategoria from "../middleware/validateCategoria.js";

dotenv.config();
let storageCategoria = Router();

let con = undefined;
storageCategoria.use((req, res, next)=>{
    let conex= JSON.parse(process.env.MY_DB);
    con = mysql.createPool(conex);
    next();
})

storageCategoria.get("/", (req, res)=>{
    
    con.query('select c.nombre as categoria from categoria as c;', (err,data, fil)=>{
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

storageCategoria.get("/cate/",validateCategoria, (req, res)=>{
    
    let {nombre} = req.query;
    let sql = `select * from categoria where categoria.nombre like "%${nombre}%";`;
    con.query(sql, (err,data, fil)=>{
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

export default storageCategoria;