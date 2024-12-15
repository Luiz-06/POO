function excluirCliente(cpf: string): void {
    let clienteProcurado: Cliente = this.consultarCliente(cpf)

    if (!clienteProcurado) {
        console.log("Cliente não encontrado")
        return
    }

    for (let conta of clienteProcurado.contas) {
        conta.cliente = undefined
    }

    this.clientes = this.clientes.filter(outrosClientes => outrosClientes.cpf != clienteProcurado.cpf)
}

//Quando se exclui um cliente , voce deve dessasociar todas as contas vinculadas a ele .