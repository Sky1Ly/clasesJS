export class Impuestos {
    constructor(montoBrutoAnual, deducciones){
        this._mBrutoAnual = montoBrutoAnual
        this._deducciones = deducciones
    }

    get montoBrutoAnual(){
        return this._mBrutoAnual
    }
    get deducciones(){
        return this._deducciones
    }

    set montoBrutoAnual(newMontoBrutoAnual){
        this._mBrutoAnual = newMontoBrutoAnual
    }
    set deducciones(newDeducciones){
        this._deducciones = newDeducciones
    }
}