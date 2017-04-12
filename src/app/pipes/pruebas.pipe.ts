import {Pipe,PipeTransform} from "@angular/core";

@Pipe({
    name:"pruebas"
})

export class PruebasPipe implements PipeTransform{
    transform(value:number,por:number):string{
        let result="Resultado:"+(value*por);
        return result;
    }
}