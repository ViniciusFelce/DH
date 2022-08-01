package entities;

public class Disciplinas extends Administracao {
    private String nomeDisciplina;
    private double notaAluno;

    public Disciplinas() {
    }

    public Disciplinas(String nomeDisciplina, double notaAluno) {
        this.nomeDisciplina = nomeDisciplina;
        this.notaAluno = notaAluno;
    }

    // Getters and Setters

    public String getNomeDisciplina() {
        return nomeDisciplina;
    }

    public void setNomeDisciplina(String nomeDisciplina) {
        this.nomeDisciplina = nomeDisciplina;
    }

    public double getNotaAluno() {
        return notaAluno;
    }

    public void setNotaAluno(double notaAluno) {
        this.notaAluno = notaAluno;
    }

    @Override
    public String toString() {
        return "Disciplinas{" +
                "nomeDisciplina='" + nomeDisciplina + '\'' +
                ", notaAluno=" + notaAluno +
                '}';
    }
}
