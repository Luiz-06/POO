/*
3. Crie uma classe chamada CalculadoraCientifica que herda da classe Calculadora
do exercício passado e:
a. Implemente um método chamado exponenciar que retorne o primeiro
operando elevado ao segundo;
b. Teste a classe;
c. Foi necessária alguma modificação em Calculadora para o acesso aos
atributos?
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

class CalculadoraCientifica extends Calculadora {

    constructor (op1: number, op2: number) {
        super(op1, op2)

        this.op1 = op1
        this.op2 = op2
    }

    public exponenciar(): number {
        return this.op1 ** this.op2
    }
}

const calcCientifica = new CalculadoraCientifica(2, 3)

console.log(calcCientifica.somar())
console.log(calcCientifica.exponenciar())

calcCientifica.op1 = 4
calcCientifica.op2 = 6

console.log(calcCientifica.somar())
console.log(calcCientifica.exponenciar())

