package sit.int221.sas.dtos;

import lombok.Data;
import sit.int221.sas.entities.Category;
import sit.int221.sas.entities.Display;

import java.time.ZonedDateTime;

@Data
public class ResponseAnnouncementDTO {
    private Integer id;
    private String announcementTitle;
    private Category announcementCategory;
    private String announcementDescription;
    private ZonedDateTime publishDate;
    private ZonedDateTime closeDate;
    private Display announcementDisplay = Display.N;
    private Integer categoryId;
    private Integer viewCount;
    public String getAnnouncementCategory() {
        return this.announcementCategory.getCategoryName();
    }

    public Integer getCategoryId() {
        return this.announcementCategory.getId();
    }
}