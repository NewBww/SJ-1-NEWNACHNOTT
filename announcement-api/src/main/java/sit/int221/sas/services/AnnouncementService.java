package sit.int221.sas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import sit.int221.sas.entities.Announcement;
import sit.int221.sas.entities.Category;
import sit.int221.sas.exceptions.ItemNotFoundException;
import sit.int221.sas.repositories.AnnouncementRepository;
import sit.int221.sas.repositories.CategoryRepository;

import java.util.List;

@Service
public class AnnouncementService {
    @Autowired
    private AnnouncementRepository announcementRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    private static final String DEFAULT_CATEGORY_NAME = "General";
    public List<Announcement> findAll() { return announcementRepository.findAll(Sort.by(Sort.Direction.DESC, "id")); }
    public Announcement findById(Integer id) { return announcementRepository.findById(id).orElseThrow(() -> new ItemNotFoundException("Announcement ID " + id + " do not exist!")); }
    public Announcement createAnnouncement(Announcement announcement) {
        Category category = announcement.getAnnouncementCategory();
        if (category.getCategoryName() == null || category.getCategoryName().isEmpty()) {
            announcement.setAnnouncementCategory(categoryRepository.findByCategoryName(DEFAULT_CATEGORY_NAME));
            return announcementRepository.saveAndFlush(announcement);
        }
        String categoryName = category.getCategoryName();
        if (Boolean.TRUE.equals(categoryRepository.existsByCategoryName(categoryName))) {
            announcement.setAnnouncementCategory(categoryRepository.findByCategoryName(categoryName));
        } else {
            Category newCategory = new Category();
            newCategory.setCategoryName(categoryName);
            categoryRepository.saveAndFlush(newCategory);
            announcement.setAnnouncementCategory(newCategory);
        }
        return announcementRepository.saveAndFlush(announcement);
    }
}
