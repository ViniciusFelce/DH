package entities;

public class Administracao {
    private String matriculaProfessor;
    private String matriculaAluno;
    private String nomeAluno;
    private String nomeProfessor;
    private String cpf;

    public Administracao() {
    }

    public Administracao(String matriculaProfessor, String matriculaAluno, String nomeAluno, String nomeProfessor, String cpf) {
        this.matriculaProfessor = matriculaProfessor;
        this.matriculaAluno = matriculaAluno;
        this.nomeAluno = nomeAluno;
        this.nomeProfessor = nomeProfessor;
        this.cpf = cpf;
    }

    // Getters
    public String getMatriculaProfessor() {
        return matriculaProfessor;
    }

    public String getMatriculaAluno() {
        return matriculaAluno;
    }

    public String getNomeAluno() {
        return nomeAluno;
    }

    public String getNomeProfessor() {
        return nomeProfessor;
    }

    public String getCpf() {
        return cpf;
    }

    // Setters - ENVIANDO PARA PROFESSORES
    public void setMatriculaAluno(String matriculaAluno) {
        this.matriculaAluno = matriculaAluno;
    }

    public void setNomeAluno(String nomeAluno) {
        this.nomeAluno = nomeAluno;
    }

    @Override
    public String toString() {
        return "Administracao - { " +
                "matriculaProfessor: " + matriculaProfessor + '\'' +
                ", matriculaAluno: " + matriculaAluno + '\'' +
                ", nomeAluno: " + nomeAluno + '\'' +
                ", nomeProfessor: " + nomeProfessor + '\'' +
                ", cpf: " + cpf + '\'' +
                '}';
    }
}
