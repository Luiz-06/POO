
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
    clientes: Cliente[];

    constructor() {
        this.contas = [];
        this.clientes = [];
    }

    inserirConta(conta: Conta): boolean {
        const contaExistente = this.consultarContaPeloNumero(conta.numero);
        if (contaExistente) {
            console.log("Erro: Já existe uma conta com este número.");
            return false;
        }
        this.contas.push(conta);
        return true;
    }

    inserirCliente(cliente: Cliente): boolean {
        const clienteExistente = this.consultarClientePeloCpf(cliente.cpf);
        if (clienteExistente) {
            console.log("Erro: Já existe um cliente com o mesmo CPF ou ID.");
            return false;
        }
        this.clientes.push(cliente);
        return true;
    }

    consultarContaPeloNumero(numero: number): Conta | undefined {
        for (let conta of this.contas){
            if (conta.numero == numero){
                return conta
            }
        }
        return undefined
    }
    
    consultarClientePeloCpf(cpf: string): Cliente | undefined {
        for (let cliente of this.clientes){
            if (cliente.cpf == cpf){
                return cliente
            }
        }
        return undefined
    }

    associarContaCliente(numeroConta: number, cpfCliente: string): boolean {
        const conta = this.consultarContaPeloNumero(numeroConta);
        const cliente = this.consultarClientePeloCpf(cpfCliente);

        if (!conta) {
            console.log("Erro: Conta não encontrada.");
            return false;
        }

        if (!cliente) {
            console.log("Erro: Cliente não encontrado.");
            return false;
        }

        cliente.adicionarConta(conta);
        return true;
    }

    listarContasCliente(cpf: string): Conta[] | undefined {
        const cliente = this.consultarClientePeloCpf(cpf);
        return cliente ? cliente.contas : undefined;
    }

    totalizarSaldoCliente(cpf: string): number {
        const cliente = this.consultarClientePeloCpf(cpf);
        if (!cliente) {
            console.log("Erro: Cliente não encontrado.");
            return 0;
        }
        return cliente.contas.reduce((total, conta) => total + conta.saldo, 0);
    }
}

const banco = new Banco();

const cliente1 = new Cliente(1, "João Silva", "123.456.789-00", new Date(1990, 6, 15));
const cliente2 = new Cliente(2, "Maria Oliveira", "987.654.321-00", new Date(1985, 3, 20));

banco.inserirCliente(cliente1);
banco.inserirCliente(cliente2);

const conta1 = new Conta(101, 500);
const conta2 = new Conta(102, 1500);

banco.inserirConta(conta1);
banco.inserirConta(conta2);

banco.associarContaCliente(101, "123.456.789-00"); 
banco.associarContaCliente(102, "987.654.321-00"); 

console.log(banco.totalizarSaldoCliente("123.456.789-00")); // Exibe 500




