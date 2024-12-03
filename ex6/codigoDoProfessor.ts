
class Conta {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo
    }

    transferir(contaDestino: Conta, valor: number): void {
        // this.saldo = this.saldo - valor;
        // contaDestino.saldo = contaDestino.saldo + valor;

        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
/*
let contas: Conta[] = [];

let conta1 = new Conta('111-1',100);
let conta2 = new Conta('222-2',200);
contas[0] = conta1;
contas.push(conta2);

console.log(contas);
*/

class Banco {
    contas: Conta[];

    constructor() {
        this.contas = [];
    }

    inserir(conta: Conta) {
        this.contas.push(conta);
    }

    consultar(numero: string): Conta {
        let contaProcurada!: Conta;

        for (let conta of this.contas) {
            if (conta.numero == numero) {
                contaProcurada = conta;
                break;
            }
        }


        return contaProcurada;
    }
}

let banco: Banco = new Banco();

banco.inserir(new Conta('111-1', 100));
banco.inserir(new Conta('222-2', 200));

console.log(banco.consultar('111-1'));
console.log(banco.consultar('333-3'));
