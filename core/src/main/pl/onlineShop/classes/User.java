package main.pl.onlineShop.classes;

import org.springframework.data.annotation.Id;

@Entity
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String gender;
    private String password;

    public User(String name, String email, String gender, String password) {
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.password = password;
    }
}
