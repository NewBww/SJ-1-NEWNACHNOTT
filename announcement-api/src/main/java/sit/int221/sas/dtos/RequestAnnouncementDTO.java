package sit.int221.sas.dtos;

import jakarta.validation.constraints.*;
import lombok.Data;
import sit.int221.sas.entities.Category;
import sit.int221.sas.entities.Display;
import sit.int221.sas.validators.ValidDate;
import sit.int221.sas.validators.ValidateDisplay;

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

    @NotNull
    private Display announcementDisplay = Display.N;

    @NotNull
    private Integer categoryId;

    private Integer id;

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
        this.announcementCategory = new Category();
        this.announcementCategory.setId(categoryId);
    }

    public void setAnnouncementDisplay(String displayName) {
        if (displayName == null) {
            this.announcementDisplay = Display.N;
        } else {
            this.announcementDisplay = Display.valueOf(displayName);
        }
    }
}
