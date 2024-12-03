/*
Atualize a classe Conta para incluir os seguintes atributos:
• id: Identificador único da conta (número).
• cliente: Cliente associado à conta.
*/
class Conta {
    private numero: number;
    private saldo: number;

    constructor(numero: number, saldo: number = 0) {
        this.numero = numero;
        this.saldo = saldo;
    }

    public depositar(valor: number): void {
        this.saldo += valor;
    }

    public sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return 
        }
        console.log("Nao foi possivel realizar o saque")
    }

    public mostrarNumero() : void {
        console.log(this.numero);
    }

    public mostrarSaldo() : void {
        console.log(this.saldo);
    }
}
