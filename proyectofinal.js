// Declara las variables necesarias
const BAJO_PESO = 18.5;
const PESO_NORMAL = 24.9;
const SOBREPESO = 29.9;

// Datos de entrada
let peso = 60; // en kilogramos
let altura = 1.80; // en metros

// Calcula el IMC (peso / (altura * altura))
let imc = peso / (altura * altura);

// Determina la categoría
let categoria;
if (imc < BAJO_PESO) {
    categoria = "Bajo de peso";
} else if (imc <= PESO_NORMAL) {
    categoria = "Peso normal";
} else if (imc <= SOBREPESO) {
    categoria = "Sobrepeso";
} else {
    categoria = "Obesidad";
}

// Muestra el resultado
console.log(`Tu IMC es ${imc.toFixed(2)}`);
console.log(`Categoría: ${categoria}`);
