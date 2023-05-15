package sit.int221.sas.validators;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Target({ ElementType.ANNOTATION_TYPE, ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = CheckDateValidator.class)
@Documented
public @interface ValidDate {
    String message() default "must be later than publish date";
    Class<?>[] groups() default { };
    Class<? extends Payload>[] payload() default { };
}
