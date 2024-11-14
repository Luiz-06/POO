var Equipamento = /** @class */ (function () {
    function Equipamento() {
        this.ligado = false;
    }
    Equipamento.prototype.ligar = function () {
        this.ligado = true;
    };
    Equipamento.prototype.desligar = function () {
        this.ligado = false;
    };
    Equipamento.prototype.inverter = function () {
        this.ligado = !this.ligado;
    };
    Equipamento.prototype.estaLigado = function () {
        return this.ligado;
    };
    return Equipamento;
}());
var tvTubao = new Equipamento();
tvTubao.ligar();
console.log(tvTubao.estaLigado());
tvTubao.inverter();
console.log(tvTubao.estaLigado());
tvTubao.ligar();
console.log(tvTubao.estaLigado());
tvTubao.desligar();
console.log(tvTubao.estaLigado());
