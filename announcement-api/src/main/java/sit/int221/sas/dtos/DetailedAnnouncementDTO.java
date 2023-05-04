package sit.int221.sas.dtos;

import lombok.Data;
import sit.int221.sas.entities.Category;
import sit.int221.sas.entities.Display;

import java.time.ZonedDateTime;

@Data
public class
DetailedAnnouncementDTO {
    private Integer id;
    private String announcementTitle;
    private String announcementDescription;
    private Category announcementCategory;
    private ZonedDateTime publishDate;
    private ZonedDateTime closeDate;
    private Display announcementDisplay = Display.N;

    public String getAnnouncementCategory() {
        return this.announcementCategory.getCategoryName();
    }
}
