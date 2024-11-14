class Equipamento {
    private ligado: boolean;

    constructor() {
        this.ligado = false; 
    }

    public ligar(): void {
        this.ligado = true;
    }

    public desligar(): void {
        this.ligado = false;
    }

    public inverter(): void {
        this.ligado = !this.ligado;
    }

    public estaLigado(): boolean {
        return this.ligado;
    }
}

const tvTubao = new Equipamento()
tvTubao.ligar()
console.log(tvTubao.estaLigado())
tvTubao.inverter()
console.log(tvTubao.estaLigado())
tvTubao.ligar()
console.log(tvTubao.estaLigado())
tvTubao.desligar()
console.log(tvTubao.estaLigado())

