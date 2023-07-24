import dotenv from "dotenv";
import mysql from "mysql2";
import {Router} from "express";


dotenv.config();
let storagePrestamo = Router();

let con = undefined;
storagePrestamo.use((req, res, next)=>{
    let conex= JSON.parse(process.env.MY_DB);
    con = mysql.createPool(conex);
    next();
})

storagePrestamo.get("/", (req, res)=>{
    let sql = 'select p.fecha_prestamo, p.fecha_devolucion, p.estado from prestamo as p;';
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
export default storagePrestamo;