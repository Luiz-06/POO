/*
2. Crie uma classe Calculadora com:
a. Dois tributos privados chamados representando dois operandos;
b. Crie um construtor que inicializa os atributos;
c. Crie um método que retorna a soma dos dois atributos;
d. Teste a classe.
*/

class Calculadora {
    private _operando1: number
    private _operando2: number

    constructor (operando1: number, operando2: number){
        this._operando1 = operando1
        this._operando2 = operando2
    }

    set operando1 (operando1: number){
        this._operando1 = operando1
    }
    
    set operando2 (operando2: number){
        this._operando2 = operando2
    }

    get operando1 (): number{
        return this._operando1
    }

    get operando2 (): number{
        return this._operando2
    }

    public somar (): number{
        return this._operando1 + this._operando2
    }
}

const teste1 = new Calculadora(1, 2)
console.log(teste1.somar())  // saída: 3

teste1.operando1 = 5  // Alterando operando1
teste1.operando2 = 5  // Alterando operando2
console.log(teste1.somar())  // saída: 10

