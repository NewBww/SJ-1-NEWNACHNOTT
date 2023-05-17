package sit.int221.sas.entities;


import com.fasterxml.jackson.annotation.JsonCreator;

import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public enum Display {
    N,
    Y,
    UNKNOWN_VALUE;

    @JsonCreator
    public static Display fromValue(String value) {
        if (value == null) {
            return N;
        }
        return Stream.of(Display.values()).filter(e -> e.toString().equals(value)).findFirst().orElse(UNKNOWN_VALUE);
    }

    public static Set<Display> knownValues() {
        return Stream.of(values()).filter(v -> v != UNKNOWN_VALUE).collect(Collectors.toSet());
    }
}