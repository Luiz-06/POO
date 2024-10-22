class ControleDeAudio {
    private volume : number = 2;

    public aumentarVolume() : void {
        this.volume < 10 ? this.volume ++ : console.log("Volume máximo") 
    } 

    public diminuirVolume() : void {
        this.volume > 0 ? this.volume -- : console.log("Mutado") 
    } 

    public lerVolume() : void{
        console.log(this.volume)
    }
}

const djRojerinho = new ControleDeAudio()
djRojerinho.aumentarVolume()
djRojerinho.lerVolume()
djRojerinho.lerVolume()
djRojerinho.diminuirVolume()