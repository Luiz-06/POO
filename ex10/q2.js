/*
2. Crie uma classe Calculadora com:
a. Dois tributos privados chamados representando dois operandos;
b. Crie um construtor que inicializa os atributos;
c. Crie um método que retorna a soma dos dois atributos;
d. Teste a classe.
*/
var Calculadora = /** @class */ (function () {
    function Calculadora(op1, op2) {
        this._op1 = op1;
        this._op2 = op2;
    }
    Object.defineProperty(Calculadora.prototype, "op1", {
        get: function () {
            return this._op1;
        },
        set: function (op1) {
            this._op1 = op1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculadora.prototype, "op2", {
        get: function () {
            return this._op2;
        },
        set: function (op2) {
            this._op2 = op2;
        },
        enumerable: false,
        configurable: true
    });
    Calculadora.prototype.somar = function () {
        return this._op1 + this._op2;
    };
    return Calculadora;
}());
