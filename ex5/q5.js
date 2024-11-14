var Conta = /** @class */ (function () {
    function Conta(idDoUsuario, saldo) {
        this.idDoUsuario = idDoUsuario;
        this.saldo = saldo;
    }
    Conta.prototype.depositar = function (valorDepositado) {
        this.saldo += valorDepositado;
    };
    Conta.prototype.sacar = function (valorSacado) {
        this.saldo -= valorSacado;
    };
    Conta.prototype.transferir = function (destinatario, valorTransferido) {
        this.saldo -= valorTransferido;
        destinatario.saldo += valorTransferido;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return Conta;
}());
var c1 = new Conta("1", 100);
var c2 = new Conta("2", 100);
var c3;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2, 50);
var saldo1 = c1.consultarSaldo();
var saldo2 = c2.consultarSaldo();
var saldo3 = c3.consultarSaldo();
console.log(saldo1);
console.log(saldo2);
console.log(saldo3);
//a. Qual o resultado dos dois "prints"? Justifique sua resposta.
//90 e 90
//b. O que acontece com o objeto para o qual a referência c1 apontava?
//como todas as contas apontam para o mesmo objeto , eles acabam dividindo o saldo , voce trasnfere 50 , entao c1 ficaria com 40 e c2 ficaria com 140 , mas como todos eles apontam para o mesmo , voce esta retirando 50 , ficando com 40 , e ao mesmo tempo recebeno 50 , ficando com 90
