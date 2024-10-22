public class ControleDeAudio {
    private int volume = 2;

    public void aumentarVolume() {
        if (this.volume < 10) {
            this.volume++;
        } else {
            System.out.println("Volume máximo");
        }
    }

    public void diminuirVolume() {
        if (this.volume > 0) {
            this.volume--;
        } else {
            System.out.println("Mutado");
        }
    }

    public void lerVolume() {
        System.out.println(this.volume);
    }

    public static void main(String[] args) {
        ControleDeAudio djRojerinho = new ControleDeAudio();
        djRojerinho.aumentarVolume();
        djRojerinho.lerVolume();
        djRojerinho.lerVolume();
        djRojerinho.diminuirVolume();
    }
}
