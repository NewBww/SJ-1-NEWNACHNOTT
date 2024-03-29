package sit.int221.sas.entities;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import sit.int221.sas.validators.CategoryIdNotNull;

@CategoryIdNotNull
@Entity
@Data
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    @Column(name = "categoryId")
    private Integer id;
    @Column(nullable = false, length = 50)
    private String categoryName;
}
