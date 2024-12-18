class App {
    private banco: Banco;

    constructor() {
        this.banco = new Banco();
    }

    public adicionarCliente(cliente: Cliente): void {
        this.banco.inserirCliente(cliente);
    }
}
