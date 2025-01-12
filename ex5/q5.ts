class Conta {
    idDoUsuario : string 
    saldo : number

    constructor(idDoUsuario : string, saldo : number){
        this.idDoUsuario = idDoUsuario
        this.saldo = saldo
    }

    public depositar(valorDepositado : number){
        this.saldo += valorDepositado
    }

    public sacar(valorSacado : number){
        this.saldo -= valorSacado
    }

    public transferir(destinatario : Conta, valorTransferido: number){
        this.saldo -= valorTransferido
        destinatario.saldo += valorTransferido
    }

    public consultarSaldo(): number{
        return this.saldo
    }
}

let c1: Conta = new Conta("1",100);
let c2: Conta = new Conta("2",100);
let c3: Conta;

c1 = c2;
c3 = c1;

c1.sacar(10);
c1.transferir(c2,50);

const saldo1 = c1.consultarSaldo()
const saldo2 = c2.consultarSaldo()
const saldo3 = c3.consultarSaldo()

console.log(saldo1);
console.log(saldo2);
console.log(saldo3);

//a. Qual o resultado dos dois "prints"? Justifique sua resposta.
//90 e 90
//b. O que acontece com o objeto para o qual a referência c1 apontava?
//como todas as contas apontam para o mesmo objeto , eles acabam dividindo o saldo , voce trasnfere 50 , entao c1 ficaria com 40 e c2 ficaria com 140 , mas como todos eles apontam para o mesmo , voce esta retirando 50 , ficando com 40 , e ao mesmo tempo recebeno 50 , ficando com 90