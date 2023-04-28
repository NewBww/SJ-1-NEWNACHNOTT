package sit.int221.sas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import sit.int221.sas.entities.Announcement;

public interface AnnouncementRepository extends JpaRepository<Announcement, Integer> {
}
