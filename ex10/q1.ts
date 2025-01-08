/*
1. As classes Carro, Veiculo e CarroEletrico são bem semelhantes. Reescreva as
classes usando herança para que os atributos duplicados não sejam mais
necessários.
class Veiculo {
placa: String;
ano: number;
}

class Carro {
placa: String;
ano: number;
modelo: String;
}

class CarroEletrico {
placa: String;
ano: number;
modelo: String;
autonomiaBateria: number;
*/

class Veiculo {
    private _placa: string;
    private _ano: number;

    constructor (placa: string, ano: number) {
        this._placa = placa
        this._ano = ano
    }

    public set placa(placa: string) {
        this._placa = placa
    }

    public set ano(ano: number) {
        this._ano = ano
    }

    public get placa(): string {
        return this.placa
    }

    public get ano(): number {
        return this._ano
    }
}


class Carro extends Veiculo {
    private _modelo: string;

    constructor (placa: string, ano: number, modelo: string) {
        super(placa, ano)

        this.placa = placa
        this.ano = ano
        this._modelo = modelo
    }

    set modelo(modelo) {
        this._modelo = modelo
    }

    get modelo(): string {
        return this._modelo
    }
}

class CarroEletrico extends Carro {
    private _autonomiaDeBateria: number;

    constructor (placa: string, ano: number, modelo: string, autonomiaDeBateria: number){
        super(placa, ano, modelo)

        this.placa = placa
        this.ano = ano
        this.modelo = modelo

        this._autonomiaDeBateria = autonomiaDeBateria
    }

    set autonomiaDeBateria(autonomiaDeBateria: number) {
        this._autonomiaDeBateria = autonomiaDeBateria
    }

    get autonomiaDeBateria(): number {
        return this._autonomiaDeBateria
    }
}

const carroca = new Veiculo("123-4", 2000)
const celta = new Carro("222-2", 2008, "celta")
const carroDoElonMusk = new CarroEletrico("333-3", 2024, "teslaTruk", 2000)

console.log(carroca)
console.log(celta)
console.log(carroDoElonMusk)

carroca.placa = "333-3"
carroca.ano = 1972

celta.placa = "444-4"
celta.ano = 2010
celta.modelo = "celtaFlex"

carroDoElonMusk.placa = "555-5"
carroDoElonMusk.ano = 2025
carroDoElonMusk.modelo = "versao transformers"
carroDoElonMusk.autonomiaDeBateria = 222222222222222222222222222222222

console.log(carroca)
console.log(celta)
console.log(carroDoElonMusk)


