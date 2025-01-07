/*
2. Crie uma classe Calculadora com:
a. Dois tributos privados chamados representando dois operandos;
b. Crie um construtor que inicializa os atributos;
c. Crie um método que retorna a soma dos dois atributos;
d. Teste a classe.
*/
var Calculadora = /** @class */ (function () {
    function Calculadora(operando1, operando2) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }
    Object.defineProperty(Calculadora.prototype, "operando1", {
        get: function () {
            return this._operando1;
        },
        set: function (operando1) {
            this._operando1 = operando1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculadora.prototype, "operando2", {
        get: function () {
            return this._operando2;
        },
        set: function (operando2) {
            this._operando2 = operando2;
        },
        enumerable: false,
        configurable: true
    });
    Calculadora.prototype.somar = function () {
        return this._operando1 + this._operando2;
    };
    return Calculadora;
}());
var teste1 = new Calculadora(1, 2);
console.log(teste1.somar()); // saída: 3
teste1.operando1 = 5; // Alterando operando1
teste1.operando2 = 5; // Alterando operando2
console.log(teste1.somar()); // saída: 10
