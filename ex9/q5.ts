class App {
    private banco: Banco

    constructor() {
        this.banco = new Banco()
    }
    
}

const app = new App()
// console.log(app.banco) Erro: Property 'banco' is private and only accessible within class 'App'
