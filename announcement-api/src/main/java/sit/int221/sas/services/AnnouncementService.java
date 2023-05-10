package sit.int221.sas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import sit.int221.sas.entities.Announcement;
import sit.int221.sas.entities.Display;
import sit.int221.sas.exceptions.ItemNotFoundException;
import sit.int221.sas.repositories.AnnouncementRepository;
import sit.int221.sas.repositories.CategoryRepository;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.logging.Filter;

@Service
public class AnnouncementService {
    @Autowired
    private AnnouncementRepository announcementRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    private static final String DEFAULT_CATEGORY_NAME = "ทั่วไป";

    public List<Announcement> findAll(String mode) {
        return switch (mode) {
            case "active" -> {
                ZonedDateTime now = ZonedDateTime.now();
                yield announcementRepository.findAllByAnnouncementDisplayAndPublishDateIsLessThanEqualAndCloseDateIsGreaterThan(Display.Y, now, now);
            }
            case "close" -> announcementRepository.findAllByAnnouncementDisplayAndCloseDateIsLessThanEqual(Display.Y, ZonedDateTime.now());
            default -> announcementRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
        };
    }

    public Announcement findById(Integer id) {
        return announcementRepository.findById(id).orElseThrow(() -> new ItemNotFoundException("Announcement id " + id + " does not exist!"));
    }

    public Announcement createAnnouncement(Announcement announcement) {
        announcement.setAnnouncementCategory(categoryRepository.findById(announcement.getAnnouncementCategory().getId())
                .orElse(categoryRepository.findByCategoryName(DEFAULT_CATEGORY_NAME)));
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
