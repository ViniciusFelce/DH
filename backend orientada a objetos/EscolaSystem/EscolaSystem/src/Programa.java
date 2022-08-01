import entities.Professores;
import entities.Disciplinas;
import entities.Alunos;
import entities.Turmas;

import java.io.PrintStream;

public class Programa {

        public static void main(String[] args) {
            // Alunos
            System.out.println("Dados do aluno: ");
            Alunos a1 = new Alunos("João da Silva", "000001", "2022", "1ºB");
            System.out.println(a1);
            System.out.println("");
            //(String nomeAluno, String matriculaAluno, String anoAluno, String turmaAluno)

            // Professores
            System.out.println("Dados do professor: ");
            Professores p1 = new Professores("0001", 9.0, "João da Silva", true, "Matemática", "1ºB");
            System.out.println(p1);

            // Professores(Média)
            p1.calcularMedia(7.0 + 8.2 + 9.89 + 9.0);
            System.out.println(p1);
            System.out.println("");

            // Disciplinas
            System.out.println("Dados da discplina: ");
            Disciplinas d1 = new Disciplinas("Matemática", 9.89);
            System.out.println(d1);
            System.out.println("");

            // Turmas
            System.out.println("Dados da turma: ");
            Turmas t1 = new Turmas("2022", "1ºB");
            System.out.println(t1);
            System.out.println("");
        }
    }
