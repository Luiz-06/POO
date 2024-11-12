var SituacaoFinanceira = /** @class */ (function () {
    function SituacaoFinanceira(creditos, debitos) {
        this.valorCreditos = creditos;
        this.valorDebitos = debitos;
    }
    SituacaoFinanceira.prototype.calcularSaldo = function () {
        var saldo = this.valorCreditos - this.valorDebitos;
        console.log(saldo);
    };
    return SituacaoFinanceira;
}());
var veaco = new SituacaoFinanceira(1000, 20000);
veaco.calcularSaldo();
