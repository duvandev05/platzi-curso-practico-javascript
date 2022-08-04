const salariosCol = colombia.map(

    function (personita){
        return personita.salary;
    }

);

//metodo para ordenar de menor a mayor
const salariosColSorted = salariosCol.sort(

    function(salarioA, salarioB){
        return salarioA - salarioB;
    }
);

//Mirar si el numero es par 
function esPar(numerito){
    return (numerito % 2 === 0);
};

//Funcion ~ Calcular el promedio
function calcularPromedio(lista){

    const sumaLista = lista.reduce(
        function(valorAcomulado = 0, nuevoElemento){

            return valorAcomulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//calcular la mediana 
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    //si la lista es par, sacar las dos perosnas de la mitad y sacar la mediana
    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        //calcular el promedio de las dos peronas de la mitad de la lista
        const mediana = calcularPromedio([personitaMitad1,personitaMitad2]);
        return mediana;

    } else {
        //si la lista es impar solamente encontrar la persona de la mitad
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }

};

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//mediana top 10%
//se calcula el 90% de los salarios
const spliceStar = (salariosColSorted.length * 90) / 100;
//se le resta ese 90% al total de salarios para sacar el 10% de los salarios
const spliceCount = salariosColSorted.length - spliceStar;
//arays deonde se va a sacar el 10% de los salarios
const salarioTopCol = salariosColSorted.splice(
    spliceStar,
    spliceCount
);

const medianaTop10Col = medianaSalarios(salarioTopCol);

//imprimir los salarios 
console.log({
    medianaGeneralCol,
    medianaTop10Col,
});
