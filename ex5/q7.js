var Triangulo = /** @class */ (function () {
    function Triangulo(a, b, c) {
        this.ladoA = a;
        this.ladoB = b;
        this.ladoC = c;
    }
    Triangulo.prototype.ehTriangulo = function () {
        return (this.ladoA + this.ladoB > this.ladoC &&
            this.ladoA + this.ladoC > this.ladoB &&
            this.ladoB + this.ladoC > this.ladoA);
    };
    Triangulo.prototype.ehIsoceles = function () {
        return this.ehTriangulo() && (this.ladoA === this.ladoB && this.ladoA !== this.ladoC ||
            this.ladoA === this.ladoC && this.ladoA !== this.ladoB ||
            this.ladoB === this.ladoC && this.ladoB !== this.ladoA);
    };
    Triangulo.prototype.ehEscaleno = function () {
        return this.ehTriangulo() && this.ladoA !== this.ladoB && this.ladoB !== this.ladoC && this.ladoA !== this.ladoC;
    };
    Triangulo.prototype.ehEquilatero = function () {
        return this.ehTriangulo() && this.ladoA == this.ladoB && this.ladoB == this.ladoC;
    };
    return Triangulo;
}());
var queops = new Triangulo(3, 4, 5);
var resposta1 = queops.ehTriangulo();
var resposta2 = queops.ehEquilatero();
var resposta3 = queops.ehEscaleno();
var resposta4 = queops.ehIsoceles();
console.log(resposta1);
console.log(resposta2);
console.log(resposta3);
console.log(resposta4);
