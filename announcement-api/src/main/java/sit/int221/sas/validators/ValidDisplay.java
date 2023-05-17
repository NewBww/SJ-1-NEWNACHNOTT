package sit.int221.sas.validators;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.*;

@Target({ FIELD, METHOD, PARAMETER, ANNOTATION_TYPE, TYPE_USE })
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = CheckValidDisplay.class)
@Documented
public @interface ValidDisplay {
    String message() default "must not be null";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
