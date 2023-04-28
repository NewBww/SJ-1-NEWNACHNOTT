package sit.int221.sas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import sit.int221.sas.entities.Category;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
    Category findByCategoryName(String categoryName);
    boolean existsByCategoryName(String categoryName);
}
