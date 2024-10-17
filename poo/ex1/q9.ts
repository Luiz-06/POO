class SituacaoFinanceira{
    private valorCreditos : number;
    private valorDebitos  : number;

    constructor(creditos : number, debitos : number){
        this.valorCreditos = creditos
        this.valorDebitos  = debitos
    }

    public calcularSaldo() : void {
        const saldo = this.valorCreditos - this.valorDebitos
        console.log(saldo)
    }
}

const veaco = new SituacaoFinanceira(1000, 20000)
veaco.calcularSaldo()