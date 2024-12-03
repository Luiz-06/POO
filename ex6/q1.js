/*
Crie uma classe Cliente com os seguintes atributos:
• id: Identificador único do cliente (número).
• nome: Nome completo do cliente (string).
• cpf: CPF único do cliente (string).
• dataNascimento: Data de nascimento do cliente (Date).
• contas: Array de contas associadas ao cliente.
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
var Cliente = /** @class */ (function () {
    function Cliente(id, nome, cpf, dataDeNasc) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNasc = dataDeNasc;
        this.contas = [];
    }
    Cliente.prototype.adicionarConta = function (conta) {
        this.contas.push(conta);
    };
    Cliente.prototype.mostrarConta = function () {
        console.log(this.contas);
    };
    return Cliente;
}());
var cliente = new Cliente(1, "Luiz", "123.456.789-00", new Date("06/01/2005"));
var conta1 = new Conta(101, 500);
var conta2 = new Conta(102, 1000);
cliente.adicionarConta(conta1);
cliente.adicionarConta(conta2);
cliente.mostrarConta();
