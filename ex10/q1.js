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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Veiculo = /** @class */ (function () {
    function Veiculo(placa, ano) {
        this._placa = placa;
        this._ano = ano;
    }
    Object.defineProperty(Veiculo.prototype, "placa", {
        get: function () {
            return this.placa;
        },
        set: function (placa) {
            this._placa = placa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculo.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (ano) {
            this._ano = ano;
        },
        enumerable: false,
        configurable: true
    });
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(placa, ano, modelo) {
        var _this = _super.call(this, placa, ano) || this;
        _this.placa = placa;
        _this.ano = ano;
        _this._modelo = modelo;
        return _this;
    }
    Object.defineProperty(Carro.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    return Carro;
}(Veiculo));
var CarroEletrico = /** @class */ (function (_super) {
    __extends(CarroEletrico, _super);
    function CarroEletrico(placa, ano, modelo, autonomiaDeBateria) {
        var _this = _super.call(this, placa, ano, modelo) || this;
        _this.placa = placa;
        _this.ano = ano;
        _this.modelo = modelo;
        _this._autonomiaDeBateria = autonomiaDeBateria;
        return _this;
    }
    Object.defineProperty(CarroEletrico.prototype, "autonomiaDeBateria", {
        get: function () {
            return this._autonomiaDeBateria;
        },
        set: function (autonomiaDeBateria) {
            this._autonomiaDeBateria = autonomiaDeBateria;
        },
        enumerable: false,
        configurable: true
    });
    return CarroEletrico;
}(Carro));
var carroca = new Veiculo("123-4", 2000);
var celta = new Carro("222-2", 2008, "celta");
var carroDoElonMusk = new CarroEletrico("333-3", 2024, "teslaTruk", 2000);
console.log(carroca);
console.log(celta);
console.log(carroDoElonMusk);
carroca.placa = "333-3";
carroca.ano = 1972;
celta.placa = "444-4";
celta.ano = 2010;
celta.modelo = "celtaFlex";
carroDoElonMusk.placa = "555-5";
carroDoElonMusk.ano = 2025;
carroDoElonMusk.modelo = "versao transformers";
carroDoElonMusk.autonomiaDeBateria = 222222222222222222222222222222222;
console.log(carroca);
console.log(celta);
console.log(carroDoElonMusk);
