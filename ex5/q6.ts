class Saudacao{
    texto: string
    destinatario: string

    constructor(destinatario: string, texto: string){
        this.destinatario = destinatario
        this.texto = texto
    }

    obterSaudacao(): void{
        console.log(`${this.texto}, ${this.destinatario}`)
    }
}

const marilene = new Saudacao("Marilene", "Olá") 
marilene.obterSaudacao()