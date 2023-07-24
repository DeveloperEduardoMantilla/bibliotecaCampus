import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { dtoLibro } from "../controller/dtoLibro.js"
import { validate } from "class-validator";

const validateUsuario = async (req,res,next)=>{
    try{
        const newLibro = new dtoLibro();
        Object.assign(newLibro, req.query);
        try {
            const validationErrors = await validate(newLibro);
            let data = plainToClass(dtoLibro, req.query, {excludeExtraneousValues: true})
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