class Retangulo {
    private base : number;
    private altura : number;

    constructor(base : number, altura : number){
        this.base = base
        this.altura = altura
    }
    
    public calcularPerimetro() : void {
        const perimetro : number = (this.base * 2) + (this.altura * 2);
        console.log(perimetro)
    } 

    public calcularArea() : void {
        const area : number = this.base * this.altura;
        console.log(area)
    }
}

const retangulo1 = new Retangulo(2, 10) 
retangulo1.calcularArea()
retangulo1.calcularPerimetro()