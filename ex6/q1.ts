/*
Crie uma classe Cliente com os seguintes atributos:
• id: Identificador único do cliente (número).
• nome: Nome completo do cliente (string).
• cpf: CPF único do cliente (string).
• dataNascimento: Data de nascimento do cliente (Date).
• contas: Array de contas associadas ao cliente.
*/
class Cliente {
    private id: number;
    private nome: string;
    private cpf: string;
    private dataDeNasc: Date;
    private contas: Conta[];

    constructor(id: number, nome: string, cpf: string, dataDeNasc: Date) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNasc = dataDeNasc;
        this.contas = []; 
    }

    public adicionarConta(conta: Conta): void {
        this.contas.push(conta);
    }

    public mostrarConta(): void {
        console.log(this.contas);
    }
}
