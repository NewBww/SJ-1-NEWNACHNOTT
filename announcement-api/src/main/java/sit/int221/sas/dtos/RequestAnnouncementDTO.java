package sit.int221.sas.dtos;

import lombok.Data;
import sit.int221.sas.entities.Category;
import sit.int221.sas.entities.Display;

import java.time.ZonedDateTime;

@Data
public class RequestAnnouncementDTO {
    private String announcementTitle;
    private String announcementDescription;
    private Category categoryId;
    private ZonedDateTime publishedDate;
    private ZonedDateTime closedDate;
    private Display announcementDisplay = Display.N;

    public Integer getCategoryId() {
        return this.categoryId.getId();
    }
}
