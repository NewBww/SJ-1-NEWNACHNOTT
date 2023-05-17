package sit.int221.sas.validators;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import sit.int221.sas.entities.Display;

public class CheckValidDisplay implements ConstraintValidator<ValidDisplay, Display> {
    @Override
    public boolean isValid(Display display, ConstraintValidatorContext constraintValidatorContext) {
        if (display != Display.UNKNOWN_VALUE) {
            return true;
        }
        constraintValidatorContext.disableDefaultConstraintViolation();
        constraintValidatorContext.buildConstraintViolationWithTemplate("must be either 'Y' or 'N'").addConstraintViolation();
        return false;
    }
}
