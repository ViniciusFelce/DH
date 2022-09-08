package br.com.dh.integradoraVII.servers;

import br.com.dh.integradoraVII.entities.Usuario;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UsuarioServer  implements IDao<Usuario>{

    //simulando um DB
    private static Map<Integer, Usuario> usuarios = new HashMap<>();

    @Override //simulando o método Put(save)
    public Usuario salvar(Usuario usuario) {
        usuarios.put(usuario.getId(), usuario);
        return usuario;
    }

    @Override
    public List<Usuario> buscarTodos() {
        return new ArrayList<>(usuarios.values());
    }

    @Override
    public String excluir(Integer id) {
        usuarios.remove(id);
        return "O registro foi removido!";
    }
}
