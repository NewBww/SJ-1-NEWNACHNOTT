package sit.int221.sas.validators;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

import static java.lang.annotation.ElementType.*;

@Target({ FIELD, METHOD, PARAMETER, ANNOTATION_TYPE, TYPE_USE })
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = CheckCategoryIdValidator.class)
@Documented
public @interface CategoryIdNotNull {
    String message() default "must not be null";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}