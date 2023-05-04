package sit.int221.sas.exceptions;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
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
        ErrorResponse errorResponse= new ErrorResponse(HttpStatus.BAD_REQUEST.value(), "Invalid method argument type "  + exception.getCause().getMessage().toLowerCase(), request.getDescription(false));
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

    @ExceptionHandler(DataIntegrityViolationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<Object> handleDataIntegrityViolationException() {
        return buildErrorResponse(HttpStatus.BAD_REQUEST, new HttpHeaders(), "invalid input, object invalid");
    }

    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        return buildErrorResponse(HttpStatus.BAD_REQUEST, new HttpHeaders(), "invalid input, object invalid");
    }

    private ResponseEntity<Object> buildErrorResponse(HttpStatus status, HttpHeaders headers, String message) {
        ErrorResponse errorResponse = new ErrorResponse(new Timestamp(System.currentTimeMillis()), status.value(), status.getReasonPhrase(), message);
        return ResponseEntity.status(status).headers(headers).body(errorResponse);
    }
}