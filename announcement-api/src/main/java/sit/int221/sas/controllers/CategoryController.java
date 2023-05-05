package sit.int221.sas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
}
