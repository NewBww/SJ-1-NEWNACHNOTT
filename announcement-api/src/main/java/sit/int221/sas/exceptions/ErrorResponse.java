package sit.int221.sas.exceptions;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@JsonInclude(JsonInclude.Include.NON_NULL)
public record ErrorResponse(Timestamp timestamp, int status, String error, String message) {
}