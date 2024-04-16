"use strict";

var _cliente = require("./cliente");
var client = new _cliente.Cliente("Carlos");
console.log(client.nombre);
client.nombre = "Maria";
console.log(client.nombre);
console.log(client.calcularImpuesto(650320, 150360));