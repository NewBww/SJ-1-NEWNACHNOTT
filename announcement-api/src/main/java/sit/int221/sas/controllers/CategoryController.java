package sit.int221.sas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sit.int221.sas.entities.Category;
import sit.int221.sas.services.CategoryService;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:5173/", "http://localhost:4173/", "http://ip22sj1.sit.kmutt.ac.th/", "http://intproj22.sit.kmutt.ac.th/sj1/"})
@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    @Autowired
    private CategoryService service;

    @GetMapping
    public List<Category> getAllCategories() {
        return service.findAll();
    }

    @GetMapping("/default")
    public Category getDefaultCategory() {return service.findDefaultCategory();}

    @GetMapping("/{id}")
    public Category getCategoryById(@PathVariable Integer id) {return service.findCategoryById(id);}

    @PostMapping
    public Category postCategory(@RequestBody Category category) {return service.createCategory(category);}
}
