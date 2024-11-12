function tratamento(nome, pronome) {
    if (pronome == undefined) {
        pronome = "Sr(a)";
    }
    var saudacao = "".concat(pronome, ". ").concat(nome);
    console.log(saudacao);
}
tratamento("Luiz");
