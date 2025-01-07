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
autonomiaBateria:
*/

class Veiculo {
    private _placa: string
    private _ano: number

    constructor(placa: string, ano: number) {
        this._placa = placa
        this._ano = ano
    }

    set placa(placa: string) {
        this._placa = placa
    }

    get placa(): string {
        return this._placa
    }

    set ano(ano: number) {
        this._ano = ano
    }

    get ano(): number {
        return this._ano
    }
}

class Carro extends Veiculo {
    private _modelo: string

    constructor(placa: string, ano: number, modelo: string) {
        super(placa, ano)
        this._modelo = modelo
    }

    set modelo(modelo: string) {
        this._modelo = modelo
    }

    get modelo(): string {
        return this._modelo
    }
}

class CarroEletrico extends Carro {
    private _autonomiaBateria: number

    constructor(placa: string, ano: number, modelo: string, autonomiaBateria: number) {
        super(placa, ano, modelo)
        this._autonomiaBateria = autonomiaBateria
    }

    set autonomiaBateria(autonomiaBateria: number) {
        this._autonomiaBateria = autonomiaBateria
    }

    get autonomiaBateria(): number {
        return this._autonomiaBateria
    }
}
