package sit.int221.sas.dtos;

import jakarta.validation.constraints.*;
import lombok.Data;
import sit.int221.sas.entities.Category;
import sit.int221.sas.entities.Display;
import sit.int221.sas.validators.ValidDate;

import java.time.ZonedDateTime;

@Data
@ValidDate
public class RequestAnnouncementDTO {
    @NotBlank
    @Size(min = 1, max = 200, message = "size must be between 1 and 200")
    private String announcementTitle;
    @NotBlank
    @Size(min = 1, max = 10000, message = "size must be between 1 and 10000")
    private String announcementDescription;
    private Category announcementCategory;
    @FutureOrPresent(message = "must be a date in the present or in the future")
    private ZonedDateTime publishDate;
    @Future(message = "must be a future date")
    private ZonedDateTime closeDate;
    private Display announcementDisplay = Display.N;


    public void setCategoryId(@NotNull(message = "can not be null") Integer id) {
        this.announcementCategory = new Category();
        this.announcementCategory.setId(id);
    }

    public void setAnnouncementDisplay(@NotBlank(message = "must be either 'Y' or 'N'") String displayName) {
        if (displayName == null) {
            this.announcementDisplay = Display.N;
        } else {
            this.announcementDisplay = Display.valueOf(displayName);
        }
    }
}
