class Banco {
    private _contas: Conta[];
    private _clientes: Cliente[];
    private _idClienteAtual: number;
    private _idContaAtual: number;

    constructor() {
        this._contas = [];
        this._clientes = [];
        this._idClienteAtual = 0;
        this._idContaAtual = 0;
    }

    public inserirConta(conta: Conta): void {
        conta.id = this._idContaAtual++;
        this._contas.push(conta);
    }

    private consultarContaPorIndice(numero: string): number {
        let indiceProcurado = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero === numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    }

    public excluir(numero: string): void {
        let indiceProcurado = this.consultarContaPorIndice(numero);
        if (indiceProcurado !== -1) {
            this._contas.splice(indiceProcurado, 1); 
        }
    }

    public sacar(numero: string, valor: number): void {
        let contaProcurada = this.consultarConta(numero);
        if (contaProcurada) {
            contaProcurada.sacar(valor);
        }
    }


    public depositar(numero: string, valor: number): void {
        let contaProcurada = this.consultarConta(numero);
        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }

    public transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        let contaOrigem = this.consultarConta(numeroOrigem);
        let contaDestino = this.consultarConta(numeroDestino);
        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }

    public consultarConta(numero: string): Conta | undefined {
        return this._contas.find(conta => conta.numero === numero);
    }

}
