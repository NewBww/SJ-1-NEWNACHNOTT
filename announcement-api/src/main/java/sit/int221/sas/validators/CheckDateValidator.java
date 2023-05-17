package sit.int221.sas.validators;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import sit.int221.sas.dtos.RequestAnnouncementDTO;

import java.util.Objects;

public class CheckDateValidator implements ConstraintValidator<ValidDate, RequestAnnouncementDTO> {
    @Override
    public void initialize(ValidDate constraintAnnotation) {
    }

    @Override
    public boolean isValid(RequestAnnouncementDTO requestAnnouncementDTO, ConstraintValidatorContext constraintValidatorContext) {
        if (requestAnnouncementDTO == null) {
            return true;
        }
        boolean isValid;
        if (Objects.nonNull(requestAnnouncementDTO.getCloseDate()) && Objects.nonNull(requestAnnouncementDTO.getPublishDate())){
            isValid = requestAnnouncementDTO.getCloseDate().isAfter(requestAnnouncementDTO.getPublishDate());
            constraintValidatorContext.disableDefaultConstraintViolation();
            constraintValidatorContext.buildConstraintViolationWithTemplate("must be later than publish date").addPropertyNode("closeDate").addConstraintViolation();
        } else isValid = true;
        return isValid;
    }
}
