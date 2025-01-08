/*
2. Crie uma classe Calculadora com:
a. Dois tributos privados chamados representando dois operandos;
b. Crie um construtor que inicializa os atributos;
c. Crie um método que retorna a soma dos dois atributos;
d. Teste a classe.
*/

class Calculadora {
    private _op1
    private _op2

    constructor(op1: number, op2: number) {
        this._op1 = op1
        this._op2 = op2
    }

    public set op1(op1: number) {
        this._op1 = op1
    }

    public get op1() : number {
        return this._op1
    }

    public set op2(op2: number) {
        this._op2 = op2
    }

    public get op2() : number {
        return this._op2
    }

    public somar(): number {
        return this._op1 + this._op2
    }
}

const calc = new Calculadora(5, 3)

console.log(calc.somar()) 

calc.op1 = 10
calc.op2 = 20

console.log(calc.somar())
