/*
Atualize a classe Conta para incluir os seguintes atributos:
• id: Identificador único da conta (número).
• cliente: Cliente associado à conta.
*/
var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        if (saldo === void 0) { saldo = 0; }
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    Conta.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return;
        }
        console.log("Nao foi possivel realizar o saque");
    };
    Conta.prototype.mostrarNumero = function () {
        console.log(this.numero);
    };
    Conta.prototype.mostrarSaldo = function () {
        console.log(this.saldo);
    };
    return Conta;
}());
