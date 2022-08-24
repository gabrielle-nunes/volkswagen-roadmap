package br.com.roadmap.volkswagen.service;

import br.com.roadmap.volkswagen.dto.UserDTO;
import br.com.roadmap.volkswagen.entities.User;
import br.com.roadmap.volkswagen.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

@Component
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User cadastroUser(User user){
        return userRepository.save(user);
    }
}
