package sit.int221.sas.entities;

import sit.int221.sas.validators.ValidateDisplay;

@ValidateDisplay(display = {Display.N, Display.Y})
public enum Display {
    N,
    Y
}