package sit.int221.sas.exceptions;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ValidationErrorResponse {
    private int status;
    private String title;
    private String instance;
    private final List<ValidationError> detail = new ArrayList<>();

    private record ValidationError(String field, String errorMessage) {}
    public void addValidationError(String field, String errorMessage) {
        this.detail.add(new ValidationError(field, errorMessage));
    }
}
