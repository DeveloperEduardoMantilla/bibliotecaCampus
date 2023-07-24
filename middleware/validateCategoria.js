import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { dtoCategoria } from "../controller/dtoCategoria.js"
import { validate } from "class-validator";

const validateCategoria = async (req,res,next)=>{
    try{
        const newCategoria = new dtoCategoria();
        Object.assign(newCategoria, req.query);
        try {
            const validationErrors = await validate(newCategoria);
            let data = plainToClass(dtoCategoria, req.query, {excludeExtraneousValues: true})
            req.query = data;
            next()
          } catch (error) {
            res.status(error.status).send(error.message);
          }
    } catch (err){
        console.log(err);
    }
}
export default validateCategoria;