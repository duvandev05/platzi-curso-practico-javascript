function calcularPromedio(lista){

    const sumaLista = lista.reduce(
        function(valorAcomulado = 0, nuevoElemento){

            return valorAcomulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista = [
    200,
    500,
    400000,
    100
]

function ordenamientoArray(a, b){
    return a - b;
}

lista.sort(ordenamientoArray);

function calcularMediana(lista){

const mitadlista = parseInt(lista.length / 2);

function esPar(numerito){
    if(numerito % 2 === 0){ //verificar que el numero sea par
        return true;
    } 
    else{
        return false;
    }
}

let mediana;

if(esPar(lista.length)){
    const elemento1 = lista[mitadlista - 1];
    const elemento2 = lista[mitadlista];

    const promedioElementos1y2 = calcularPromedio([
        elemento1,
        elemento2,
    ])

    mediana = promedioElementos1y2;
}
else{
    mediana = lista[mitadlista];
}
return mediana;
}