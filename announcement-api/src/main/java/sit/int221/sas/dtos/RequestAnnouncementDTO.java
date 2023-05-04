package sit.int221.sas.dtos;

import com.fasterxml.jackson.annotation.JsonEnumDefaultValue;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import sit.int221.sas.entities.Category;
import sit.int221.sas.entities.Display;

import java.time.ZonedDateTime;

@NoArgsConstructor
@Data
public class RequestAnnouncementDTO {
    private String announcementTitle;
    private String announcementDescription;
    private Category categoryId;
    private ZonedDateTime publishDate;
    private ZonedDateTime closeDate;
    @NonNull
    private Display announcementDisplay = Display.N;

    public void setCategoryId(Integer id) {
        this.categoryId = new Category();
        this.categoryId.setId(id);
    }

    public void setAnnouncementDisplay(String displayName) {
        if (displayName.equals("N") || displayName.equals("Y")) {
            this.announcementDisplay = Display.valueOf(displayName);
        } else {
            this.announcementDisplay = Display.N;
        }
    }
}
