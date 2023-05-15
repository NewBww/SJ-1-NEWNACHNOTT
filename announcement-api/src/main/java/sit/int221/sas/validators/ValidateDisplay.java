package sit.int221.sas.validators;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import sit.int221.sas.entities.Display;

import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.*;
@Target({ FIELD, METHOD, PARAMETER, ANNOTATION_TYPE, TYPE_USE })
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = CheckDisplayValidator.class)
@Documented
public @interface ValidateDisplay {
    Display[] display();
    String message() default "must be 'Y' or 'N'";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}