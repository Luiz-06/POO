var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this.pi = 3.14;
        this.raio = raio;
    }
    Circulo.prototype.mostrarArea = function () {
        var area = this.pi * (Math.pow(this.raio, 2));
        console.log(area);
    };
    Circulo.prototype.mostrarPerimetro = function () {
        var perimetro = 2 * this.pi * this.raio;
        console.log(perimetro.toFixed(2));
    };
    return Circulo;
}());
var bolota = new Circulo(5);
bolota.mostrarArea();
bolota.mostrarPerimetro();
