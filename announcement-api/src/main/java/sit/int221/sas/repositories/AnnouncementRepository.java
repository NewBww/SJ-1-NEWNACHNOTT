package sit.int221.sas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.Nullable;
import sit.int221.sas.entities.Announcement;
import sit.int221.sas.entities.Display;

import java.time.ZonedDateTime;
import java.util.List;

public interface AnnouncementRepository extends JpaRepository<Announcement, Integer> {
    List<Announcement> findAllByAnnouncementDisplayAndCloseDateIsLessThanEqual(Display display, ZonedDateTime nowDate);

    List<Announcement> findAllByAnnouncementDisplayAndPublishDateIsLessThanEqualAndCloseDateIsGreaterThan(Display display, @Nullable ZonedDateTime nowDateTime1, @Nullable ZonedDateTime nowDateTime2);
}
