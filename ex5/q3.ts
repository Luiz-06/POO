class Hotel {
    quantReservas : number;
    
    constructor(quantidadeDeReservas : number){
        this.quantReservas = quantidadeDeReservas
    }

    adicionarReserva() : void {
        this.quantReservas++;
    }
}

const copaCabanaPalacy = new Hotel(2)
console.log(copaCabanaPalacy.quantReservas)