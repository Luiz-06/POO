class Postagem{
    id: number
    texto: string
    qtdCurtidas: number

    constructor(id: number, texto: string){
        this.id = id
        this.texto = texto
        this.qtdCurtidas = 0
    }

    curtir(): void {
        this.qtdCurtidas ++
    }

    toString(): string {
        let qtdDeCurtidasStr = this.qtdCurtidas.toString()
        const concat = `Postagem : ${this.texto}
                        Quantidade de curtidas : ${qtdDeCurtidasStr}`
        return concat
    }
}

class MicroBlog{
    posts: Postagem[]

    constructor() {
        this.posts = []
    }

    buscarPostagem(id: number): Postagem | undefined{
        for (let postagens of this.posts){
            if(postagens.id == id){
                return postagens
            }
        }

        return undefined
    }

    incluirPostagem(p: Postagem): void {
        if (this.buscarPostagem(p.id) != undefined){
            this.posts.push(p)
        }else{
            console.log("Não foi possivel adicionar essa postagem")
        }
    }

    buscarIndex(id: number): number {
        let index: number = -1

        for (let i = 0; i < this.posts.length; i ++){
            if (this.posts[i].id == id){
                index = i
                break
            }
        }

        return index
    }

    excluir(id: number){
        let index = this.buscarIndex(id)

        for (let i = index; i <= this.posts.length - 1; i ++){
            this.posts[i] = this.posts[i + 1]
        }

        this.posts.pop()
    }

    postagemMaisCurtida(): Postagem | null {
        let maisCurtida: Postagem | null = null; 
        let maior: number = -Infinity;
    
        for (let i = 0; i < this.posts.length; i++) {
            if (this.posts[i].qtdCurtidas > maior) {
                maior = this.posts[i].qtdCurtidas;
                maisCurtida = this.posts[i]; 
            }
        }
    
        return maisCurtida; 
    }

    curtir(id: number): void{
        let postagemDesejada: Postagem | undefined = this.buscarPostagem(id)

        if (postagemDesejada != undefined){
            postagemDesejada.curtir()
        }
    }
    
}