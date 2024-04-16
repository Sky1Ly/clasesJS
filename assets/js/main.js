import { Cliente } from "./cliente"

let client = new Cliente("Carlos")

console.log(client.nombre)
client.nombre = "Maria"
console.log(client.nombre)


console.log(client.calcularImpuesto(650320, 150360))