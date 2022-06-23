//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 
//console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log("Los lados del traingulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2  + "cm, " + baseTriangulo + "cm");


//const alturaTriangulo = 5.5;
//console.log("la altura del triangulo es: " + alturaTriangulo + "cm");

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
function perimetroTriangulo(lado1, lado2, base){
    return Number(lado1) + Number(lado2) + Number(base);
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();


//Codigo del circulo
console.group("Circulos");

//radio
//const radioCirculo = 4;
//console.log("el radio del circulo es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}
//const diametroCirculo = radioCirculo * 2;
//console.log("el diametro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("el PI del circulo es: " + PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//const perimetroCirculo = diametroCirculo * PI;
//console.log("el perimetro del circulo es: " + perimetroCirculo + "cm");

//area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("el area del circulo es: " + areaCirculo + "cm^2");


console.groupEnd();



//Aqui interactuamos con el HTML
//se hacen las operaciones correspondientes con los valores ingresados del usuario

//CUADRADO

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert (perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert (area);
}


//TRIANGULO

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const lado1 = input1.value;
    const input2 = document.getElementById("InputLado2");
    const lado2 = input2.value;
    const input3 = document.getElementById("InputBase");
    const base = input3.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
        alert (perimetro);
}

function AlturaTriangulo(lado1, lado2,  base){
    const altura = Math.sqrt((lado1*lado2) - (base*base)/4 );
    return altura;
} 

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const lado1 = input1.value;
    const input2 = document.getElementById("InputLado2");
    const lado2 = input2.value;
    const input3 = document.getElementById("InputBase");
    const base = input3.value;

    if(lado1 === lado2 && lado1 != base){
        const altura = AlturaTriangulo(lado1, lado2, base);
       console.log(altura);
       return altura; 
    }else{
        altura = false;
    }
}


function calcularAreaTriangulo(){
    const input3 = document.getElementById("InputBase");
    const base = input3.value;

   const altura = calcularAlturaTriangulo();

   if(altura == altura){
   const area = areaTriangulo(base, altura);
   alert(Math.round(area));
    }else if(altura == false){
        alert("No es un triangulo isoseles");
    }
}



// CIRCULO

function calcularDiametroCirculo(){
    const input = document.getElementById("inputRadio");
    const radio = input.value;

    const diametro = diametroCirculo(radio);
    console.log(diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputRadio");
    const radio = input.value;

    const diametro = calcularDiametroCirculo();

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputRadio");
    const radio = input.value;

    const area = areaCirculo(radio);
    alert(area);
}