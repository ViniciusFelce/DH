package entities;

public class Turmas extends Disciplinas {
    private String anoTurma;
    private String serieTurma;

    public Turmas() {
    }

    public Turmas(String anoTurma, String serieTurma) {
        this.anoTurma = anoTurma;
        this.serieTurma = serieTurma;
    }

    // Getters
    public String getAnoTurma() {
        return anoTurma;
    }

    public String getSerieTurma() {
        return serieTurma;
    }

    // Setters
    public void setAnoTurma(String anoTurma) {
        this.anoTurma = anoTurma;
    }

    public void setSerieTurma(String serieTurma) {
        this.serieTurma = serieTurma;
    }

    @Override
    public String toString() {
        return "Turmas{" +
                "anoTurma='" + anoTurma + '\'' +
                ", serieTurma='" + serieTurma + '\'' +
                '}';
    }
}
