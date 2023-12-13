package pl.onlineShop;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("pl.onlineShop.entities") // Zastąp odpowiednim pakietem
@EnableJpaRepositories("pl.onlineShop.entities") // Zastąp odpowiednim pakietem

public class OnlineshopApplication {
    public static void main(String[] args) {
        SpringApplication.run(OnlineshopApplication.class, args);
    }
}
