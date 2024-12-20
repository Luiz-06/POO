var Retangulo = /** @class */ (function () {
    function Retangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Retangulo.prototype.calcularPerimetro = function () {
        var perimetro = (this.base * 2) + (this.altura * 2);
        console.log(perimetro);
    };
    Retangulo.prototype.calcularArea = function () {
        var area = this.base * this.altura;
        console.log(area);
    };
    Retangulo.prototype.eQuadrado = function () {
        return this.base == this.altura;
    };
    return Retangulo;
}());
var retangulo1 = new Retangulo(10, 10);
retangulo1.calcularArea();
retangulo1.calcularPerimetro();
console.log(retangulo1.eQuadrado());
