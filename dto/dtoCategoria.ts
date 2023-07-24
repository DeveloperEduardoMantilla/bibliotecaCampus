import { Expose, Transform} from "class-transformer";
import {IsDefined} from "class-validator";

export class dtoCategoria {
    
    @Expose({ name:"nombre"})
    //@IsDefined({message: ()=>{throw{status:400,message:"El parametro nombre es obligatorio "}}})
    @Transform(({value}) => {
        if (isNaN(value)) {
            return value;
        } else {
            throw {status: 400, message: "El parametro nombre no es un string' "};
        }
    })
    nombre:string;

    constructor(nombre:string){
        this.nombre = nombre;
    }
}