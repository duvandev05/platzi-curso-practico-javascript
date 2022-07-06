const salariosCol = colombia.map(

    function (personita){
        return personita.salary;
    }

);

const salariosColSorted = salariosCol.sort(

    function(salarioA, salarioB){
        return salarioA - salarioB;
    }
);

function esPar(numerito){
    return (numerito % 2 === 0);
};

function calcularPromedio(lista){

    const sumaLista = lista.reduce(
        function(valorAcomulado = 0, nuevoElemento){

            return valorAcomulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularPromedio([personitaMitad1,personitaMitad2]);
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }

};

console.log(
    medianaSalarios(salariosColSorted)
);