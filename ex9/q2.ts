class Hora {
    private hora: number;
    private minutos: number;
    private segundos: number;

    constructor(hora: number, minutos: number, segundos: number) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    public queHorasSao(): string {
        return `${this.hora.toString().padStart(2, '0')}:${this.minutos.toString().padStart(2, '0')}:${this.segundos.toString().padStart(2, '0')}`;
    }
}

const hora = new Hora(10, 5, 30);
console.log(hora.queHorasSao());  

