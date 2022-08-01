package Uber;

public class Passageiro implements Comparable<Passageiro>{

    private int id;
    private String nome;
    private String enderecoOrigem;
    private boolean deficiencia;
    private boolean embarcado;

    public Passageiro(int id, String nome, String enderecoOrigem, boolean deficiencia, boolean embarcado) {
        this.id = id;
        this.nome = nome;
        this.enderecoOrigem = enderecoOrigem;
        this.deficiencia = deficiencia;
        this.embarcado = embarcado;
    }

    public int getid() {
        return id;
    }

    public void setid(int id) {
        this.id = id;
    }

    public String getnome() {
        return nome;
    }

    public void setnome(String nome) {
        this.nome = nome;
    }

    public String getenderecoOrigem() {
        return enderecoOrigem;
    }

    public void setenderecoOrigem(String enderecoOrigem) {
        this.enderecoOrigem = enderecoOrigem;
    }

    public boolean isdeficiencia() {
        return deficiencia;
    }

    public void setdeficiencia(boolean deficiencia) {
        this.deficiencia = deficiencia;
    }

    public boolean isEmbarcado() {
        return embarcado;
    }

    public void setEmbarcado(boolean embarcado) {
        this.embarcado = embarcado;
    }

    @Override
    public int compareTo(Passageiro passageiro) {
        if (this.id == passageiro.id){
            return 0;
        } else if (this.id < passageiro.id){
            return -1;
        } else{
            return 1;
        }
    }
}
