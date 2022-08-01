package entities;

public class Alunos extends Administracao {

    private String anoAluno;
    private String turmaAluno;
    private String nomeAluno;
    private String matriculaAluno;

    public Alunos() {
    }

    public Alunos(String nomeAluno, String matriculaAluno, String anoAluno, String turmaAluno) {
        this.matriculaAluno = matriculaAluno;
        this.nomeAluno = nomeAluno;
        this.anoAluno = anoAluno;
        this.turmaAluno = turmaAluno;
    }

    // Getters and Setters

    public String getAnoAluno() {
        return anoAluno;
    }

    public void setAnoAluno(String anoAluno) {
        this.anoAluno = anoAluno;
    }

    public String getTurmaAluno() {
        return turmaAluno;
    }

    public void setTurmaAluno(String turmaAluno) {
        this.turmaAluno = turmaAluno;
    }

    @Override
    public String getNomeAluno() {
        return nomeAluno;
    }

    @Override
    public void setNomeAluno(String nomeAluno) {
        this.nomeAluno = nomeAluno;
    }

    @Override
    public String getMatriculaAluno() {
        return matriculaAluno;
    }

    @Override
    public void setMatriculaAluno(String matriculaAluno) {
        this.matriculaAluno = matriculaAluno;
    }

    @Override
    public String toString() {
        return "Alunos{" +
                "anoAluno='" + anoAluno + '\'' +
                ", turmaAluno='" + turmaAluno + '\'' +
                ", nomeAluno='" + nomeAluno + '\'' +
                ", matriculaAluno='" + matriculaAluno + '\'' +
                '}';
    }
}
