package entities;

public class Professores extends Administracao {

    private String disciplina;
    private double notaAluno;
    private String turmaProfessor;
    private boolean statusAluno;

    public Professores() {
    }

    public Professores(String matriculaAluno, double notaAluno, String nomeAluno, boolean statusAluno, String disciplina, String turmaProfessor) {
        this.disciplina = disciplina;
        this.notaAluno = 0.0;
        this.turmaProfessor = turmaProfessor;
        this.statusAluno = statusAluno;
    }

    public void nota(double valor ) {
        this.notaAluno = this.notaAluno + valor;
        System.out.println("Sua nota agora é: " + this.notaAluno);
    }

    public void calcularMedia (double valor){
        this.notaAluno = notaAluno + (valor / 4);
        if(notaAluno >= 6.0){
            System.out.println("Aluno aprovado: " + this.notaAluno);
        }else {
            System.out.println("Aluno reprovado: " + this.notaAluno);
        }
    }


    // Getters and Setters (ENCAPSULAMENTO)
    public String getDisciplina() {
        return disciplina;
    }

    public void setDisciplina(String disciplina) {
        this.disciplina = disciplina;
    }

    public double getNotaAluno() {
        return notaAluno;
    }

    public void setNotaAluno(double notaAluno) {
        this.notaAluno = notaAluno;
    }

    public String getTurmaProfessor() {
        return turmaProfessor;
    }

    public void setTurmaProfessor(String turmaProfessor) {
        this.turmaProfessor = turmaProfessor;
    }

    public boolean isStatusAluno() {
        return statusAluno;
    }

    public void setStatusAluno(boolean statusAluno) {
        this.statusAluno = statusAluno;
    }

    @Override
    public String toString() {
        return "Professores{" +
                "disciplina='" + disciplina + '\'' +
                ", notaAluno=" + notaAluno +
                ", turmaProfessor='" + turmaProfessor + '\'' +
                ", statusAluno=" + statusAluno +
                '}';
    }
}

