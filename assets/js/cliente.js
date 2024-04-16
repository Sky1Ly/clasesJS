import { Impuestos } from "./impuestos"

export class Cliente{
    constructor(nombre){
        this._name = nombre
    }

    get nombre(){
        return this._name
    }

    set nombre(newName){
        this._name = newName
    }

    calcularImpuesto(montoBrutoAnual, deducciones){
        let impuesto = new Impuestos(montoBrutoAnual, deducciones)
        return (impuesto._mBrutoAnual - impuesto._deducciones) * 1.21
    }
}