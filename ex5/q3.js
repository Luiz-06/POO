var Hotel = /** @class */ (function () {
    function Hotel(quantidadeDeReservas) {
        this.quantReservas = quantidadeDeReservas;
    }
    Hotel.prototype.adicionarReserva = function () {
        this.quantReservas++;
    };
    return Hotel;
}());
var copaCabanaPalacy = new Hotel(2);
console.log(copaCabanaPalacy.quantReservas);
