package br.com.roadmap.volkswagen.service;

import br.com.roadmap.volkswagen.dto.UsuarioDTO;
import br.com.roadmap.volkswagen.entities.Usuario;
import br.com.roadmap.volkswagen.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Component;

@Component
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    public Usuario cadastroUsuario(Usuario usuario) throws Exception {
        if (findByCpf(UsuarioDTO.convert(usuario)) != null){
            throw new DataIntegrityViolationException("CPF Já Cadastrado!");

        }return usuarioRepository.save(usuario);
    }

    public Usuario findByCpf(UsuarioDTO usuarioDTO) {
        Usuario usuario = usuarioRepository.findByCpf(usuarioDTO.getCpf());
        if (usuario != null){
            return usuario;
        }
        return null;
    }

}
