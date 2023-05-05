package sit.int221.sas.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;
import sit.int221.sas.entities.Category;
import sit.int221.sas.entities.Display;

import java.time.ZonedDateTime;

@NoArgsConstructor
@Data
public class RequestAnnouncementDTO {
    private String announcementTitle;
    private String announcementDescription;
    private Category announcementCategory;
    private ZonedDateTime publishDate;
    private ZonedDateTime closeDate;
    private Display announcementDisplay = Display.N;

    public void setCategoryId(Integer id) {
        this.announcementCategory = new Category();
        this.announcementCategory.setId(id);
    }

    public void setAnnouncementDisplay(String displayName) {
        if (displayName.equals("N") || displayName.equals("Y")) {
            this.announcementDisplay = Display.valueOf(displayName);
        } else {
            this.announcementDisplay = Display.N;
        }
    }
}
