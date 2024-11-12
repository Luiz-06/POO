class Circulo {
    private raio : number;
    private pi : number = 3.14;

    constructor(raio : number){
        this.raio = raio
    }

    public mostrarArea() : void {
        const area : number = this.pi * (this.raio ** 2)
        console.log(area)
    }

    public mostrarPerimetro() : void {
        const perimetro = 2 * this.pi * this.raio
        console.log(perimetro.toFixed(2))
    }
}

const bolota = new Circulo(5)
bolota.mostrarArea()
bolota.mostrarPerimetro()