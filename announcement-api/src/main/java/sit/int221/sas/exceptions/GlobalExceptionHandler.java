package sit.int221.sas.exceptions;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    public static final String TRACE = "trace";

    @ExceptionHandler(ItemNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<ErrorResponse> handleItemNotFoundException(
            ItemNotFoundException exception, WebRequest request) {
        HttpHeaders respondHeaders = new HttpHeaders();
        respondHeaders.set("Description", exception.getMessage());
        return buildErrorResponse(exception, HttpStatus.NOT_FOUND, request, respondHeaders);
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<ErrorResponse> handleAllUncaughtException(
            Exception exception, WebRequest request) {
        HttpHeaders respondHeaders = new HttpHeaders();
        return buildErrorResponse(
                "Unknown error occurred", HttpStatus.INTERNAL_SERVER_ERROR, request
        , respondHeaders);
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(
            Exception exception, HttpStatus httpStatus, WebRequest request, HttpHeaders headers) {

        return buildErrorResponse(exception.getMessage(), httpStatus, request, headers);
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(
            String message, HttpStatus httpStatus, WebRequest request, HttpHeaders headers) {

        ErrorResponse errorResponse = new ErrorResponse(httpStatus.value(), message,
                request.getDescription(false)
        );
        return ResponseEntity.status(httpStatus).headers(headers).body(errorResponse);
    }
}