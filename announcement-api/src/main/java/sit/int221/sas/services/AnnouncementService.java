package sit.int221.sas.services;

import jakarta.validation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import sit.int221.sas.entities.Announcement;
import sit.int221.sas.entities.Category;
import sit.int221.sas.exceptions.ItemNotFoundException;
import sit.int221.sas.repositories.AnnouncementRepository;
import sit.int221.sas.repositories.CategoryRepository;

import java.util.List;
import java.util.Set;

@Service
public class AnnouncementService {
    @Autowired
    private AnnouncementRepository announcementRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private Validator validator;

    public List<Announcement> findAll(String mode) {
        Sort sort = Sort.by(Sort.Direction.DESC, "id");
        return switch (mode) {
            case "active" -> announcementRepository.findAllByActiveMode(sort);
            case "close" -> announcementRepository.findAllByCloseMode(sort);
            default -> announcementRepository.findAll(sort);
        };
    }

    public Announcement findById(Integer id) {
        return announcementRepository.findById(id).orElseThrow(() -> new ItemNotFoundException("Announcement id " + id + " does not exist!"));
    }

    public Page<Announcement> findPage(String mode, int page, int size, Integer category) {
        Sort sort = Sort.by(Sort.Direction.DESC, "id");
        PageRequest pageRequest = PageRequest.of(page, size, sort);
        return switch (mode) {
            case "active" -> announcementRepository.findAllByActiveMode(pageRequest, category);
            case "close" -> announcementRepository.findAllByCloseMode(pageRequest, category);
            default -> announcementRepository.findAllByAdminMode(pageRequest, category);
        };
    }

    public Announcement createAnnouncement(Announcement announcement) {
        Category category = categoryRepository.findById(announcement.getAnnouncementCategory().getId())
                .orElse(new Category());
        Set<ConstraintViolation<Category>> violations = validator.validate(category);
        if (!violations.isEmpty()) {

            throw new ConstraintViolationException(violations);
        }
        announcement.setAnnouncementCategory(category);
        return announcementRepository.saveAndFlush(announcement);
    }

    public Announcement updateAnnouncement(Integer announcementId, Announcement newAnn) {
        Announcement existedAnn = announcementRepository.findById(announcementId).orElseThrow(
                () -> new ItemNotFoundException("Announcement id " + announcementId + " does not exist")
        );
        existedAnn.setAnnouncementTitle(newAnn.getAnnouncementTitle());
        Integer newAnnCategoryId = newAnn.getAnnouncementCategory().getId();
        existedAnn.setAnnouncementCategory(categoryRepository.findById(newAnnCategoryId)
                .orElseThrow(() -> new ItemNotFoundException("Category id " + newAnnCategoryId + " does not exist")));
        existedAnn.setAnnouncementDescription(newAnn.getAnnouncementDescription());
        existedAnn.setPublishDate(newAnn.getPublishDate());
        existedAnn.setCloseDate(newAnn.getCloseDate());
        existedAnn.setAnnouncementDisplay(newAnn.getAnnouncementDisplay());
        return announcementRepository.saveAndFlush(existedAnn);
    }

    public void removeAnnouncement(Integer announcementId) {
        Announcement deleteId = announcementRepository.findById(announcementId).orElseThrow(
                () -> new ItemNotFoundException("Announcement id " + announcementId + " does not exist")
        );
        announcementRepository.delete(deleteId);
    }
}
