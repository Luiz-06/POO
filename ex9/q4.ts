class Conta {
    private _id: number = 0;
    private _numero: string;
    private _saldo: number;
    private _cliente!: Cliente;

    constructor(numero: string, saldo: number) {
        this._numero = numero;
        this._saldo = saldo;
    }

    public sacar(valor: number): void {
        this._saldo -= valor;
    }

    public depositar(valor: number): void {
        this._saldo += valor;
    }

    public transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get numero(): string {
        return this._numero;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public get cliente(): Cliente {
        return this._cliente;
    }

    public set cliente(cliente: Cliente) {
        this._cliente = cliente;
    }
}

class Cliente {
    private _id: number = 0;
    private _nome: string;
    private _cpf: string;
    private _dataNascimento: Date;
    private _contas: Conta[] = [];

    constructor(nome: string, cpf: string, dataNascimento: Date) {
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get nome(): string {
        return this._nome;
    }

    public get cpf(): string {
        return this._cpf;
    }

    public adicionarConta(conta: Conta): void {
        this._contas.push(conta);
    }
}
