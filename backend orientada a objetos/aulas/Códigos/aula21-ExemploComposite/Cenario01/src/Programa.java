import entities.DepComposite;
import entities.DepFinanceiro;
import entities.DepVendas;
import entities.Departamento;

public class Programa {

    public static void main(String[] args) {

        Departamento vendas = new DepVendas(1,"Departamentop de vendas");
        Departamento financeiro = new DepFinanceiro(2, "Departamento Financeiro");

        DepComposite composite = new DepComposite(3, "Composite");

        composite.addDepartamento(vendas);
        composite.addDepartamento(financeiro);

        composite.getName();

    }

}
