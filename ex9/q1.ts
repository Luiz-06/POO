class Calculadora {
    private operando1: number;
    private operando2: number;

    constructor(operando1: number, operando2: number) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }

    public somar(): number {
        return this.operando1 + this.operando2;
    }

    public subtrair(): number {
        return this.operando1 - this.operando2;
    }
}

const abaco = new Calculadora(2, 2);
console.log(abaco.somar());  
console.log(abaco.subtrair()); 

