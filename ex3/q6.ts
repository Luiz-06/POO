class Profissional {
    private nome:string;
    private prazoDePagamento:number;
    private linguagem:string;

    constructor(nome:string, prazoDePagamento:number, linguagem:string){
        this.nome = nome;
        this.prazoDePagamento = prazoDePagamento;
        this.linguagem = linguagem;
    }

    public exibirTemplate() : void {
        const mensagem = `
        ${this.nome}
        My payment time is ${this.prazoDePagamento}
        and
        my preffered language is ${this.linguagem}
        `

        console.log(mensagem)
    }
}

const p1 = new Profissional("Ely", 120.56, "TypeScript")
p1.exibirTemplate()