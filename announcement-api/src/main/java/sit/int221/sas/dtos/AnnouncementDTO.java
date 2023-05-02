package sit.int221.sas.dtos;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import sit.int221.sas.entities.Category;
import sit.int221.sas.entities.Display;

import java.time.ZonedDateTime;

@Data
public class AnnouncementDTO {
    private Integer id;
    private String announcementTitle;
    private Category announcementCategory;
    private ZonedDateTime publishDate;
    private ZonedDateTime closeDate;
    private Display announcementDisplay = Display.N;

    public String getAnnouncementCategory() {
        return this.announcementCategory.getCategoryName();
    }
}
