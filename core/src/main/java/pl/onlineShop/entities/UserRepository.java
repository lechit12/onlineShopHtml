package pl.onlineShop.entities;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository {
    User findByEmail(String email);
    User findByName(String name);
}
