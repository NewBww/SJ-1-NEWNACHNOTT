package sit.int221.sas.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sit.int221.sas.entities.Announcement;
import sit.int221.sas.entities.Display;

import java.time.ZonedDateTime;
import java.util.List;

public interface AnnouncementRepository extends JpaRepository<Announcement, Integer> {
    List<Announcement> findAllByAnnouncementDisplayAndCloseDateIsLessThanEqual(Display display, ZonedDateTime nowDate, Sort sort);
    Page<Announcement> findAllByAnnouncementDisplayAndCloseDateIsLessThanEqual(Display display, ZonedDateTime nowDate, Pageable pageable);

    @Query("SELECT a FROM Announcement a WHERE a.announcementDisplay='Y' AND (a.publishDate IS NULL OR a.publishDate<=NOW()) AND (a.closeDate IS NULL OR a.closeDate>NOW())")
    List<Announcement> findAllByActiveMode(Sort sort);

    @Query("SELECT a FROM Announcement a WHERE a.announcementDisplay='Y' AND (a.publishDate IS NULL OR a.publishDate<=NOW()) AND (a.closeDate IS NULL OR a.closeDate>NOW())")
    Page<Announcement> findAllByActiveMode(Pageable pageable);


}