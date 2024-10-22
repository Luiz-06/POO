var ControleDeAudio = /** @class */ (function () {
    function ControleDeAudio() {
        this.volume = 2;
    }
    ControleDeAudio.prototype.aumentarVolume = function () {
        this.volume < 10 ? this.volume++ : console.log("Volume máximo");
    };
    ControleDeAudio.prototype.diminuirVolume = function () {
        this.volume > 0 ? this.volume-- : console.log("Mutado");
    };
    ControleDeAudio.prototype.lerVolume = function () {
        console.log(this.volume);
    };
    return ControleDeAudio;
}());
var djRojerinho = new ControleDeAudio();
djRojerinho.aumentarVolume();
djRojerinho.lerVolume();
djRojerinho.diminuirVolume();
djRojerinho.lerVolume();
