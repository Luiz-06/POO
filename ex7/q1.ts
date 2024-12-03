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

    consultarPorIndice(numero : number): number {
        let index: number = -1;

        for (let i: number = 0; i < this.contas.length; i ++){
            if (this.contas[i].numero == numero){
                index = i;
                break
            }
        }
        return index;
    }

    atualizar(conta: Conta): void{
        let index: number = this.consultarPorIndice(conta.numero);

        if (index != -1){
            this.contas[index] = conta;
        }
    }

    excluirConta(numero: number): void{
        let index: number = this.consultarPorIndice(numero);

        if(index != -1){
            for(let i = index; i <= this.contas.length - 1; i ++){
                this.contas[index] = this.contas[index + 1]
            }
        }

        this.contas.pop()
    }

    sacar(numero: number, valor: number): void {
        let contaProcurada = this.consultarContaPeloNumero(numero)

        if (contaProcurada != null){
            contaProcurada.sacar(valor)
        }
    }

    depositar(numero: number, valor: number): void {
        let contaProcurada = this.consultarContaPeloNumero(numero)

        if (contaProcurada != null){
            contaProcurada.depositar(valor)
        }
    }

    
}

