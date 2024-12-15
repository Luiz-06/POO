function listarContasSemCliente(): Conta[] {
    return this.contas.filter(conta => !conta.cliente);
}
//Aqui retornamos um array de objetos do tipo conta , objetos esses que nao estão associados a nenhum cliente