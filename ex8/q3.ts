function excluirConta(numeroDaconta: string): void {
    let contaProcurada: Conta = this.consultarConta(numeroDaconta)

    if (contaProcurada) {
        if (contaProcurada.cliente) {
            contaProcurada.cliente.contas = contaProcurada.cliente.contas.filter(conta => conta.numero != contaProcurada.numero)
            contaProcurada.cliente = undefined
            this.contas = this.contas.filter(conta => conta.numero != contaProcurada.numero)
        }
    }
}

//Quando se exclui uma conta , dessasociamos ela do cliente e a retiramos do array de contas do cliente e do banco 