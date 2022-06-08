//Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el area del cuadrado es: " + areCuadrado + "cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del traingulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2  + "cm, " + baseTriangulo + "cm");


const alturaTriangulo = 5.5;
console.log("la altura del triangulo es: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 +ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();


//Codigo del circulo
console.group("Circulos");

//radio
const radioCirculo = 4;
console.log("el radio del circulo es: " + radioCirculo + "cm");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("el diametro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("el PI del circulo es: " + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("el perimetro del circulo es: " + perimetroCirculo + "cm");

//area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("el area del circulo es: " + areaCirculo + "cm^2");


console.groupEnd();
