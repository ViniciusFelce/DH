package entities;

import java.util.ArrayList;
import java.util.List;

public class DepComposite implements Departamento {

    private int id;
    private String nome;
    private List<Departamento> filhosDepartamento;

    public DepComposite(int id, String nome) {
        this.id = id;
        this.nome = nome;
        this.filhosDepartamento = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public void getName() {
        filhosDepartamento.forEach(Departamento::getName);
    }

    public void addDepartamento(Departamento departamento) {
        filhosDepartamento.add(departamento);
    }

    public void remDepartamento(Departamento departamento) {
        filhosDepartamento.remove(departamento);
    }

}
