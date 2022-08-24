package br.com.roadmap.volkswagen.service;

import br.com.roadmap.volkswagen.dto.UserDTO;
import br.com.roadmap.volkswagen.entities.User;
import br.com.roadmap.volkswagen.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Component;

@Component
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User cadastroUser(User user) throws Exception {
        if (findByCpf(UserDTO.convert(user)) != null){
            throw new DataIntegrityViolationException("CPF Já Cadastrado!");

        }return userRepository.save(user);
    }

    private  User findByCpf(UserDTO userDTO) {
        User user = userRepository.findByCpf(userDTO.getCpf());
        if (user != null){
            return user;
        }
        return null;
    }
}
