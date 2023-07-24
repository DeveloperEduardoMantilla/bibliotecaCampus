import { Expose, Transform} from "class-transformer";
import {IsDefined, IsString} from "class-validator";

export class dtoUsuario {
    
    @Expose({ name:"usuario"})
    @IsDefined({message: ()=>{throw{status:400,message:"El parametro usuario es obligatorio "}}})
    @Transform(({value}) => {
        if (isNaN(value)) {
            return value;
        } else {
            throw {status: 400, message: "El parametro usuario no es un string' "};
        }
    })
    usuario:string;

    constructor(usuario:string){
        this.usuario = usuario;
    }
}