function retornarNumeros(lista) {
    return lista.map(function (num) { return num.toString(); }).join(" - ");
}
function main() {
    var lista = [1, 2, 3, 4, 5];
    var numerosEmFormatoString = retornarNumeros(lista);
    console.log(numerosEmFormatoString);
    typeof (numerosEmFormatoString);
}
main();
