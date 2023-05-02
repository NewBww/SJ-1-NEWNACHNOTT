package sit.int221.sas.exceptions;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
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
        return buildErrorResponse(exception, request, HttpStatus.NOT_FOUND, respondHeaders);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ErrorResponse> handleMethodArgumentTypeMismatch(
            MethodArgumentTypeMismatchException exception, WebRequest request) {
        HttpHeaders headers = new HttpHeaders();
        ErrorResponse errorResponse= new ErrorResponse(HttpStatus.BAD_REQUEST.value(), exception.getMessage(), request.getDescription(false));
        errorResponse.addValidationError(HttpStatus.BAD_REQUEST.getReasonPhrase());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).headers(headers).body(errorResponse);
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<ErrorResponse> handleAllUncaughtException(
            Exception exception, WebRequest request) {
        HttpHeaders respondHeaders = new HttpHeaders();
        return buildErrorResponse(
                "Unknown error occurred", request, HttpStatus.INTERNAL_SERVER_ERROR, respondHeaders
        );
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(
            Exception exception, WebRequest request, HttpStatus status, HttpHeaders headers) {

        return buildErrorResponse(exception.getMessage(), request, status, headers);
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(
            String message, WebRequest request, HttpStatus status, HttpHeaders headers) {

        ErrorResponse errorResponse = new ErrorResponse(status.value(), message,
                request.getDescription(false)
        );
        return ResponseEntity.status(status).headers(headers).body(errorResponse);
    }
}