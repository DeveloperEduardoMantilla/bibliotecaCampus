import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";


dotenv.config();
let storageUsuario = Router();

let con = undefined;
storageUsuario.use((req, res, next)=>{
    let conex= JSON.parse(process.env.MY_DB);
    con = mysql.createPool(conex);
    next();
})

storageUsuario.get("/", (req, res)=>{
    let sql = 'select usuario.nombre, usuario.email from usuario;';
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
export default storageUsuario;