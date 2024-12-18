class Calculadora {
    operando1: number;
    private operando2: number;
    
    constructor(n1: number, n2: number) {
        this.operando1 = n1; 
        this.operando2 = n2
    }

    public somar(): number {
        return this.operando1 + this.operando2
    }

    public subtrair(): number {
        return this.operando1 - this.operando2
    }
}

const abago = new Calculadora(2, 3)
abago.somar()
abago.subtrair()
abago.operando1
//abago.operando2 -> não da certo , pois diferente de operando1 (que nao possui restrições)
//operando2 possui a restrição "private"