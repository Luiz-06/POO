var Saudacao = /** @class */ (function () {
    function Saudacao(destinatario, texto) {
        this.destinatario = destinatario;
        this.texto = texto;
    }
    Saudacao.prototype.obterSaudacao = function () {
        console.log("".concat(this.texto, ", ").concat(this.destinatario));
    };
    return Saudacao;
}());
var marilene = new Saudacao("Marilene", "Olá");
marilene.obterSaudacao();
