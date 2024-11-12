var Profissional = /** @class */ (function () {
    function Profissional(nome, prazoDePagamento, linguagem) {
        this.nome = nome;
        this.prazoDePagamento = prazoDePagamento;
        this.linguagem = linguagem;
    }
    Profissional.prototype.exibirTemplate = function () {
        var mensagem = "\n        ".concat(this.nome, "\n        My payment time is ").concat(this.prazoDePagamento, "\n        and\n        my preffered language is ").concat(this.linguagem, "\n        ");
        console.log(mensagem);
    };
    return Profissional;
}());
var p1 = new Profissional("Ely", 120.56, "TypeScript");
p1.exibirTemplate();
