package sit.int221.sas.validators;

import jakarta.validation.ConstraintValidator;

import jakarta.validation.ConstraintValidatorContext;
import sit.int221.sas.entities.Category;

public class CheckCategoryIdValidator implements ConstraintValidator<CategoryIdNotNull, Category> {
    @Override
    public boolean isValid(Category category, ConstraintValidatorContext constraintValidatorContext) {
        if (category.getId() == null) {
            constraintValidatorContext.disableDefaultConstraintViolation();
            constraintValidatorContext.buildConstraintViolationWithTemplate("does not exists").addPropertyNode("categoryId").addConstraintViolation();
            return false;
        }
        return true;
    }
}
