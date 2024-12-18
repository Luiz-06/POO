class Hora {
    private horas: number;
    private minutos: number;
    private segundos: number;

    public definirHoras(h: number): void{
        this.horas = h
    }   

    public definirMinutos(m: number): void{
        this.minutos = m 
    }

    public definirSegundos(s: number): void{
        this.segundos = s
    }

    public horario(): string{
        return `${this.horas}:${this.minutos}:${this.segundos}`
    }
}

const relogioDoBen10 = new Hora()
relogioDoBen10.definirHoras(12)
relogioDoBen10.definirMinutos(40)
relogioDoBen10.definirSegundos(30)
relogioDoBen10.horario()