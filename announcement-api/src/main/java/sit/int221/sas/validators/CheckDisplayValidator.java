package sit.int221.sas.validators;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;


import sit.int221.sas.entities.Display;

import java.util.Objects;

public class CheckDisplayValidator implements ConstraintValidator<ValidateDisplay, Display> {

    @Override
    public void initialize(ValidateDisplay constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(Display display, ConstraintValidatorContext constraintValidatorContext) {
//        return display == null;
//                if (display.toString().isEmpty()) {
//            return false;
//        }
        if (Objects.equals(display.toString(), "N") || Objects.equals(display.toString(), "Y")) {

            return true;
        }
        constraintValidatorContext.disableDefaultConstraintViolation();
        constraintValidatorContext.buildConstraintViolationWithTemplate("must be either 'Y' or 'N'").addPropertyNode("categoryId").addConstraintViolation();
        return false;
    }


}