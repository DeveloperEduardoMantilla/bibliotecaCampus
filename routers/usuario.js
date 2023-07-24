import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";
import validateUsuario from "../middleware/validateUsuario.js";

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
storageUsuario.get("/prestamos", validateUsuario, (req, res)=>{
    let {usuario} = req.query;
    let sql = `select libro.titulo, prestamo.fecha_prestamo, prestamo.fecha_devolucion, prestamo.estado, usuario.nombre as usuario, usuario.apellido, usuario.direccion, usuario.telefono, usuario.email from prestamo inner join usuario on usuario.id_usuario=prestamo.id_usuario inner join libro on libro.id_libro=prestamo.id_libro where usuario.nombre like '%${usuario}%';`;
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