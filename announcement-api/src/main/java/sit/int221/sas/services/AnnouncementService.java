package sit.int221.sas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
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

    public List<Announcement> findAll() {
        return announcementRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    public Announcement findById(Integer id) {
        return announcementRepository.findById(id).orElseThrow(() -> new ItemNotFoundException("Announcement id " + id + " does not exist!"));
    }

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

    public Announcement updateAnnouncement(Announcement announcement, Integer announcementId) {
        Announcement ex = announcementRepository.findById(announcementId).orElseThrow(
                () -> new HttpClientErrorException(HttpStatus.NOT_FOUND, "Announcement Id " + announcementId + " not found")
        );
        ex.setAnnouncementTitle(announcement.getAnnouncementTitle());
        ex.setAnnouncementCategory(announcement.getAnnouncementCategory());
        ex.setAnnouncementDescription(announcement.getAnnouncementDescription());
        ex.setAnnouncementDisplay(String.valueOf(announcement.getAnnouncementDisplay()));
        return announcementRepository.saveAndFlush(ex);
    }

    public void removeAnnouncement(Integer announcementId) {
        Announcement ex = announcementRepository.findById(announcementId).orElseThrow(
                () -> new HttpClientErrorException(HttpStatus.NOT_FOUND, "Announcement Id " + announcementId + " not found")
        );
        announcementRepository.delete(ex);
    }
}
