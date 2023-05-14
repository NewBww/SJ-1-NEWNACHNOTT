package sit.int221.sas.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;
import sit.int221.sas.entities.Category;
import sit.int221.sas.entities.Display;

import java.time.ZonedDateTime;

@NoArgsConstructor
@Data
public class RequestAnnouncementDTO {
    @NotNull
    @NotBlank
    @Size(min = 1, max = 200, message = "size must be between 1 and 200")
    private String announcementTitle;
    @NotNull
    @NotBlank
    @Size(min = 1, max = 10000, message = "size must be between 1 and 10000")
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
