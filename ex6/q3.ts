/*
Atualize a classe Banco para incluir os seguintes atributos e métodos:
• clientes: Array de objetos do tipo Cliente, além do array de contas.

Além dos métodos já criados, crie também
a) Adicionar cliente
• Método: inserirCliente(cliente: Cliente): void
• Insere o cliente passado por parâmetro no array de clientes.

b) Consultar cliente pelo CPF
• Método: consultarCliente(cpf: string): Cliente
• Retorne o cliente correspondente ao CPF;

c) Associar um cliente a uma conta
• Método: associarContaCliente(numeroConta: string, cpfCliente:
string): void
• Procure o cliente e a conta com os dados fornecidos e associe-os,
respeitando considernado que o cliente não pode ter a mesma conta
adicionada mais de uma vez.

d) Listar contas de um cliente
• Método: listarContasCliente(cpf: string): Conta[]
• Retorne todas as contas associadas ao cliente cujo CPF foi
informado.

e) Totalizar saldo por cliente
• Método: totalizarSaldoCliente(cpf: string): number
• Calcule e retorne o saldo total de todas as contas de um cliente.

f) Incluir um cliente
• Método: inserirCliente(cliente: Cliente): void
• Adicione o cliente ao array de clientes, respeitando as seguintes
regras:
• Não permitir que um cliente com o mesmo id ou cpf seja cadastrado
mais de uma vez.

g) Alterar o método de incluir uma conta
• Método: inserirConta(conta: Conta): void
• Adicione a conta ao array de contas, não permitindo que uma conta
com o mesmo id ou numero seja criada.
*/

class Conta {
    numero: number;
    saldo: number;

    constructor(numero: number, saldo: number = 0) {
        this.numero = numero;
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return 
        }
        console.log("Nao foi possivel realizar o saque")
    }

    mostrarNumero() : void {
        console.log(this.numero);
    }

    mostrarSaldo() : void {
        console.log(this.saldo);
    }
}

class Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataDeNasc: Date;
    contas: Conta[];

    constructor(id: number, nome: string, cpf: string, dataDeNasc: Date) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNasc = dataDeNasc;
        this.contas = []; 
    }

    adicionarConta(conta: Conta): void {
        this.contas.push(conta);
    }

    mostrarConta(): void {
        console.log(this.contas);
    }
}

class Banco {
    contas: Conta[];
    clientes: Cliente[]

    constructor() {
        this.contas = [];
        this.clientes = []
    }

    inserirConta(conta: Conta) {
        this.contas.push(conta);
    }

    inserirCliente(cliente: Cliente) {
        this.clientes.push(cliente);
    }

    consultarContaPeloNumero(numero: number): Conta | undefined {
        for (let conta of this.contas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return undefined; 
    }
    
    consultarClientePeloCpf(cpf: string): Cliente | undefined {
        for (let cliente of this.clientes) {
            if (cliente.cpf === cpf) {
                return cliente;
            }
        }
        return undefined; 
    }

    associarContaCliente(numeroConta: number, cpfCliente: string): boolean {
        for (let conta of this.contas) {
            if (conta.numero === numeroConta) {
                for (let cliente of this.clientes) {
                    if (cliente.cpf === cpfCliente) {
                        return true
                    }
                }
            }
        }
        return false
    }
    
    listarContasCliente(cpf: string): Conta[] | undefined {
        for (let cliente of this.clientes) {
            if (cliente.cpf === cpf) {
                return cliente.contas;
            }
        }
        return undefined
    }

    totalizarSaldoCliente(cpf: string): number {
        let saldoTotal: number = 0

        for (let cliente of this.clientes) {
            if (cliente.cpf === cpf) {
                for (let contaDoCliente of cliente.contas){
                    saldoTotal += contaDoCliente.saldo
                }
                return saldoTotal
            }
        }
        return 0
    }
}


