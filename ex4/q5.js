function exibir() {
    var lista = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        lista[_i] = arguments[_i];
    }
    lista.forEach(function (item) { return console.log(item); });
}
var lista = ["a", "b", "c", "d"];
exibir.apply(void 0, lista);
