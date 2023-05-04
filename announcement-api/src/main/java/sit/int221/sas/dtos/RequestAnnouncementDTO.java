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
    private ZonedDateTime publishDate;
    private ZonedDateTime closeDate;
    private Display announcementDisplay = Display.N;

    public void setCategoryId(Integer id) {
        this.categoryId = new Category();
        this.categoryId.setId(id);
    }
}
