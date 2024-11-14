class Triangulo{
    private ladoA: number
    private ladoB: number
    private ladoC: number

    constructor(a: number, b: number, c: number){
        this.ladoA = a
        this.ladoB = b
        this.ladoC = c
    }

    public ehTriangulo(): boolean{
        return(
            this.ladoA + this.ladoB > this.ladoC &&
            this.ladoA + this.ladoC > this.ladoB &&
            this.ladoB + this.ladoC > this.ladoA
        );
    }

    public ehIsoceles(){
        return this.ehTriangulo() && (
            this.ladoA === this.ladoB && this.ladoA !== this.ladoC ||
            this.ladoA === this.ladoC && this.ladoA !== this.ladoB ||
            this.ladoB === this.ladoC && this.ladoB !== this.ladoA
        );
    }

    public ehEscaleno(){
        return this.ehTriangulo() && this.ladoA !== this.ladoB && this.ladoB !== this.ladoC && this.ladoA !== this.ladoC;
    }

    public ehEquilatero(){
        return this.ehTriangulo() && this.ladoA == this.ladoB && this.ladoB == this.ladoC 
    }
}

const queops = new Triangulo(3,4,5)
const resposta1 = queops.ehTriangulo()
const resposta2 = queops.ehEquilatero()
const resposta3 = queops.ehEscaleno()
const resposta4 = queops.ehIsoceles() 

console.log(resposta1)
console.log(resposta2)
console.log(resposta3)
console.log(resposta4)