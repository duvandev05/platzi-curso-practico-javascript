function calcularPromedio(lista){

    const sumaLista = lista.reduce(
        function(valorAcomulado = 0, nuevoElemento){

            return valorAcomulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [
    100,
    200,
    500,
    40000000
]

const mitadlista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    if(numerito % 2 === 0){ //verificar que el numero sea par
        return true;
    } 
    else{
        return false;
    }
}

let mediana;

if(esPar(lista1.length)){
    const elemento1 = lista1[mitadlista1 - 1];
    const elemento2 = lista1[mitadlista1];

    const promedioElementos1y2 = calcularPromedio([
        elemento1,
        elemento2,
    ])

    mediana = promedioElementos1y2;
}
else{
    mediana = lista1[mitadlista1];
}