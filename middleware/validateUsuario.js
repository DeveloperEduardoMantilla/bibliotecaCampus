import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { dtoUsuario } from "../controller/dtoUsuario.js"
import { validate } from "class-validator";

const validateUsuario = async (req,res,next)=>{
    try{
        const newLibro = new dtoUsuario();
        Object.assign(newLibro, req.query);
        try {
            const validationErrors = await validate(newLibro);
            let data = plainToClass(dtoUsuario, req.query, {excludeExtraneousValues: true})
            req.query = data;
            next()
          } catch (error) {
            res.status(error.status).send(error.message);
          }
    } catch (err){
        console.log(err);
    }
}
export default validateUsuario;