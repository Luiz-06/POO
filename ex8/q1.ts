/*
mudarTitularidadeDaConta(conta: Conta, cpfNovoTitular: string): void {
    let contaProcurada = this.consultarConta(conta.numero);
    let novoTitular = this.consultarCliente(cpfNovoTitular);

    if (!contaProcurada || !novoTitular) {
        console.log("Conta ou cliente não encontrado!");
        return;
    }

    if (contaProcurada.cliente) {
        contaProcurada.cliente.contas = contaProcurada.cliente.contas.filter(outrasContas => outrasContas.numero !== conta.numero);
    }

    contaProcurada.cliente = novoTitular;
    novoTitular.contas.push(contaProcurada);
}
*/
